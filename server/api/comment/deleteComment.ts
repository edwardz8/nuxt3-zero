import { deleteComment } from '~/server/database/repositories/commentRepository';

export default defineEventHandler(async (event) => {
    const query = await getQuery(event)
    const commentId = query.commentId

    const res = await deleteComment({ id: commentId })

    return res
})