import { rule, shield, and, or, not } from 'graphql-shield';
import * as jwt from 'jsonwebtoken';
import { Context } from './utils';

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  const [_,authToken] = ctx.request.get('Authorization').split(' ');
  const token = await jwt.verify(authToken, process.env.APP_SECRET);
  const user = await ctx.prisma.user({ id: token.userId });
  ctx.user = user
  return ctx.user !== null;
});

const isOwner = rule()(async (parent, args, ctx, info) => {
  const owner = await ctx.prisma.job({ id: args.id }).owner();
  return ctx.user.id;
});

const isAdmin = rule()(async (parent, args, ctx: Context, info) => {
  const [_,authToken] = ctx.request.get('Authorization').split(' ');
  const token = await jwt.verify(authToken, process.env.APP_SECRET);
  const user = await ctx.prisma.user({ id: token.userId });
  ctx.user = user;
  return user.permission === 'ADMIN';
});

const permissions = shield({
  Mutation: {
    publish: isAdmin,
    unpublish: isAdmin,
    createJob: isAuthenticated
  },
});

export default permissions;
