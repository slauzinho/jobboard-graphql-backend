import { Context } from '../utils';
import { JobResolvers } from '../generated/graphqlgen';

export const Job: JobResolvers.Type = {
  ...JobResolvers.defaultResolvers,
  
  city: (parent, _, ctx: Context) => {
    return ctx.prisma.job({ id: parent.id }).city();
  },
  categories: (parent, _, ctx: Context) => {
    return ctx.prisma.job({ id: parent.id }).categories();
  },
  tags: (parent, _, ctx: Context) => {
    return ctx.prisma.job({ id: parent.id }).tags();
  },
};
