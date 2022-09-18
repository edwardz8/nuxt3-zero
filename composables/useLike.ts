import { useState } from '#app'
import { IUser } from '~~/types/IUser'


export async function getUserLikes(playerId: string) {
    const like = await $fetch('/api/like/getLikes?playerId=' + playerId, { method: 'GET' })
    return like
}

export async function addUserLike({playerId, userId}) {
    // const user = useState<IUser>('user')
    const like = await $fetch('/api/like/addLike', { method: 'POST', body: { userId: userId, playerId: playerId } })
    return like
}

export async function removeUserLike(likeId) {
    const res = await $fetch('/api/like/deleteLike?likeId=' + likeId, { method: 'GET' })
    return res
}