import { getCommentsByPlayer } from '~/server/database/repositories/commentRepository';

export default defineEventHandler(async (event) => {
    const {playerId} = await getQuery(event)

    const comment = await getCommentsByPlayer(playerId)

    return comment
})
