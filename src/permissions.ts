import { rule, shield, and, or, not } from 'graphql-shield';
import { Context, getUserId } from './utils';
import console = require('console');

const isAuthenticated = rule()(async (parent, args, ctx) => {
  const userID = getUserId(ctx);
  const user = await ctx.prisma.user({ id: userID });
  ctx.user = user;
  return ctx.user !== null;
});

const isCreator = rule()(async (parent, args, ctx) => {
  const userID = getUserId(ctx);
  const creator = await ctx.prisma.job({ id: args.id }).creator();
  ctx.user = creator;
  return userID === creator.id;
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
    unpublish: or(isAdmin, isCreator), // only admin or creator can unpublish a job
    createJob: isAuthenticated, // you need to me authenticated to create a job
  },
  Query: {
    pending: isAdmin,
    me: isAuthenticated,
  },
});

export default permissions;
