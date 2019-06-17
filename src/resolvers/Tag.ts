import { Context } from '../utils';
import { TagResolvers } from '../generated/graphqlgen';

export const Tag: TagResolvers.Type = {
  ...TagResolvers.defaultResolvers,

  jobs: (parent, _, ctx: Context) => {
    return ctx.prisma
      .tag({ id: parent.id })
      .jobs({ where: { status: 'APPROVED' } });
  },
};
