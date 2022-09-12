import { getLikesByUser } from '~/server/database/repositories/likeRepository';

export default defineEventHandler(async (event) => {
    const query = await useQuery(event)
    const playerId = query.playerId

    const like = await getLikesByUser(playerId)

    return like
})