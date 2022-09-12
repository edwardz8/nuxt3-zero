import { CompatibilityEvent } from 'h3'
import { addLike } from '~/server/database/repositories/likeRepository';

export default async (event: CompatibilityEvent) => {
    const body = await useBody(event)
    console.log(body)

    const likeData = {
        userId: body.userId,
        playerId: body.playerId,
    }

    const like = await addLike(likeData)

    return like
}