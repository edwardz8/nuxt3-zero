import { getCommentsByPlayer } from '~/server/database/repositories/commentRepository';

export default defineEventHandler(async (event) => {
    const query = await getQuery(event)
    const playerId = query.playerId

    const comment = await getCommentsByPlayer(playerId)

    return comment
})