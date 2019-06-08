import { Context } from "../../utils";


export default {
    async publish(parent, {id}, ctx: Context) {
      try {
        await ctx.prisma.updateJob({
          data: {
            published_at: new Date()
          },
          where: {
            id
          }
        });
      } catch(e) {
        return new Error('Job ID doesnt exist');
      }
      return true;
    },
    async unpublish(parent, {id}, ctx: Context) {
      try {
        await ctx.prisma.updateJob({
          data: {
            published_at: null
          },
          where: {
            id
          }
        });
      } catch(e) {
        return new Error('Job ID doesnt exist');
      }
      return true;
    },
}