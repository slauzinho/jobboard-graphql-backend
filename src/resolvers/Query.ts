import { getUserId, Context } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  },
  jobs(parent, args, ctx: Context) {
    return ctx.prisma.jobs({
      where: { published_at_not: null, status: 'APPROVED' },
    });
  },
  pending(parent, args, ctx: Context) {
    return ctx.prisma.jobs({
      where: { status: 'PENDING', published_at_not: null },
    });
  },
  categories(parent, args, ctx: Context) {
    return ctx.prisma.categories();
  },
  tags(parent, args, ctx: Context) {
    return ctx.prisma.tags();
  },
  cities(parent, args, ctx: Context) {
    return ctx.prisma.cities();
  },
  city(parent, { id, name }, ctx: Context) {
    if (!id && !name) {
      throw new Error('You need to provide an ID or a name');
    }
    if (id) {
      return ctx.prisma.city({ id });
    }
    return ctx.prisma.city({ name });
  },
  async job(parent, { id }, ctx: Context) {
    const job = await ctx.prisma.job({ id });
    if (job && job.status === 'APPROVED') {
      return job;
    }
    return null;
  },
};
