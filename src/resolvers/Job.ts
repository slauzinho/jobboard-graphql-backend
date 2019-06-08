import { Context } from '../utils'

export const Job = {
    city: (parent, _, ctx: Context) => {
        return ctx.prisma.job({id: parent.id}).city()
    },
    categories: (parent, _, ctx: Context) => {
        return ctx.prisma.job({id: parent.id}).categories()
    },
    tags: (parent, _, ctx: Context) => {
        return ctx.prisma.job({id: parent.id}).tags()
    },
}