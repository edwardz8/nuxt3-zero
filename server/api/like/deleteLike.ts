import { deleteLike } from '~/server/database/repositories/likeRepository';

export default defineEventHandler(async (event) => {
    const query = await getQuery(event)
    const likeId = query.likeId

    const res = await deleteLike({ id: likeId })

    return res
})