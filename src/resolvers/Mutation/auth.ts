import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { promisify } from 'util';
import { Context } from '../../utils';
import { transport, makeEmail } from '../../mail';

export const auth = {
  async signup(_, args, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.prisma.createUser({ ...args, password });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async login(_, { email, password }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`Invalid email or password!`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid email or password!');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },

  async forgotPassword(_, { email }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    // If the email doesnt belong to a user abort early
    if (!user) {
      return true;
    }
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

    await ctx.prisma.updateUser({
      where: { email },
      data: { resetToken, resetTokenExpiry },
    });

    transport.sendMail({
      from: 'slaughterer90@gmail.com',
      to: user.email,
      subject: 'Password reset Link',
      html: makeEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${
        process.env.FRONTEND_URL
      }/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
    });

    return true;
  },

  async resetPassword(
    _,
    { input: { resetToken, password, repeatPassword } },
    ctx: Context
  ) {
    if (password !== repeatPassword) {
      throw new Error('Passwords dont match!');
    }

    const user = await ctx.prisma.user({ resetToken: resetToken });
    if (!user) {
      throw new Error('Invalid token');
    }

    const expired = user.resetTokenExpiry < Date.now() - 3600000;

    if (expired) {
      throw new Error('Expired email token!');
    }

    const newPassword = await bcrypt.hash(password, 10);

    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: { resetToken: null, resetTokenExpiry: null, password: newPassword },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};
