import { getLikesByUser } from '~/server/database/repositories/likeRepository';

export default defineEventHandler(async (event) => {
    const {playerId} = await getQuery(event)

    const likes = await getLikesByUser(playerId)

    const likesGroupedByUser = likes.reduce(function (r, a) {
        r[a.playerId] = r[a.playerId] || []
        r[a.playerId].push(a)
        return r
    }, Object.create(null))

    return likesGroupedByUser

})