import { rule, shield, and, or, not } from 'graphql-shield';
import { Context, getUserId } from './utils';

const isAuthenticated = rule()(async (parent, args, ctx) => {
  const userID = getUserId(ctx);
  const user = await ctx.prisma.user({ id: userID });
  ctx.user = user
  return ctx.user !== null;
});

const isOwner = rule()(async (parent, args, ctx) => {
  const userID = getUserId(ctx);
  const owner = await ctx.prisma.job({ id: args.id }).owner();
  ctx.user = owner
  return userID === owner.id;
});

const isAdmin = rule()(async (parent, args, ctx: Context) => {
  const userID = getUserId(ctx);
  const user = await ctx.prisma.user({ id: userID });
  ctx.user = user;
  return user.permission === 'ADMIN';
});

const permissions = shield({
  Mutation: {
    publish: isAdmin, // only admin can publish jobs
    unpublish: isAdmin, // only admin can unpublish a job
    createJob: isAuthenticated // you need to me authenticated to create a job
  },
});

export default permissions;
