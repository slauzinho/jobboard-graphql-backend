import { Context } from '../utils';
import { CategoryResolvers } from '../generated/graphqlgen';

export const Category: CategoryResolvers.Type = {
  ...CategoryResolvers.defaultResolvers,
  jobs: (parent, _, ctx: Context) => {
    return ctx.prisma.category({ id: parent.id }).jobs();
  },
};
