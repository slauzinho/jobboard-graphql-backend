import { UserResolvers } from '../generated/graphqlgen';
import { getUserId, Context } from '../utils';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  jobs: async (parent, args, ctx: Context) => {
    const userId = getUserId(ctx);

    return ctx.prisma.jobs({
      where: { creator: { id: userId }, status_not: 'REMOVED' },
    });
  },
};
