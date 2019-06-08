import { Context } from '../utils'

export const Category = {
    jobs: (parent, _, ctx: Context) => {
        return ctx.prisma.category({id: parent.id}).jobs();
    },
}