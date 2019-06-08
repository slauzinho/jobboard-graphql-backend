import { Context } from '../utils'

export const Tag = {
    jobs: (parent, _, ctx: Context) => {
        return ctx.prisma.tag({id: parent.id}).jobs();
    },
}