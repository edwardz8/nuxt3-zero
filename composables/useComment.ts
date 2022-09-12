export async function getPlayerComments(playerId: string) {
    const comment = await $fetch('/api/comment/getComments?playerId=' + playerId, { method: 'GET' })
    return comment
}

export async function addComment(data) {
    const comment = await $fetch('/api/comment/addComment', {
        method: 'POST',
        body: {
            userId: data.userId,
            playerId: data.playerId,
            comment: data.comment
        }
    })

    return comment
}

export async function deleteComment(commentId) {
    const res = await $fetch('/api/comment/deleteComment?commentId=' + commentId, { method: 'GET' })
    return res
}