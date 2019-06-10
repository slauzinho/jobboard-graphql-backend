import { getUserId, Context } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  },
  jobs(parent, args, ctx: Context) {
    return ctx.prisma.jobs({ where: { published_at_not: null, status: 'APPROVED' } });
  },
};
