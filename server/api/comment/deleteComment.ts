import {deleteComment} from '~/server/database/repositories/commentRepository';

export default defineEventHandler(async (event) => {
    const {commentId} = await getQuery(event)

    const res = await deleteComment({id: commentId})

    return res
})
