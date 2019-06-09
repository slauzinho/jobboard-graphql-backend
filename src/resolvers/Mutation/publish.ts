import { Context } from '../../utils';

export default {
  async publish(parent, { id }, ctx: Context) {
    try {
      const job = await ctx.prisma.updateJob({
        data: {
          published_at: new Date(),
        },
        where: {
          id,
        },
      });
      return job;
    } catch (e) {
      throw new Error('Job ID doesnt exist!');
    }
  },
  async unpublish(parent, { id }, ctx: Context) {
    try {
      const job = await ctx.prisma.updateJob({
        data: {
          published_at: null,
        },
        where: {
          id,
        },
      });
      return job;
    } catch (e) {
      throw new Error('Job ID doesnt exist!');
    }
  },
};
