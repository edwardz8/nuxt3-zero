import prisma from "../client";

export async function getCommentsByPlayer(playerId) {
    return await prisma.comment.findMany({
        orderBy: [
            {
                createdAt: 'desc',
            },

        ],
        where: {
            playerId: +playerId,
        },
        select: {
            id: true,
            playerId: true,
            user: {
                select: {
                    name: true,
                    username: true
                }
            },
            comment: true,
            userId: true,
            createdAt: true
        },
    })
}

export async function addComment(data) {
    const comment = await prisma.comment.create({
        data: {
            userId: data.userId,
            playerId: data.playerId,
            comment: data.comment
        },
    })

    return comment
}

export async function deleteComment(data) {
    await prisma.comment.delete({
        where: {
            id: +data.id,
        },
    })
    return 'Comment Delete successfully!'
}
