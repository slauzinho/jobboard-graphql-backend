import { getUserId, Context } from '../utils'

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
  jobs(parent, args, ctx: Context) {
    return ctx.prisma.jobs({where: {published_at_not: null}})
  }
}
