import { deleteLike } from '~/server/database/repositories/likeRepository';

export default defineEventHandler(async (event) => {
    const {likeId} = getQuery(event)


    const res = await deleteLike({ id: likeId })

    return res
})
