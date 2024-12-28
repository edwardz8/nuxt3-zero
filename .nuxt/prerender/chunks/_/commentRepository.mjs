import { p as prisma } from './client.mjs';

async function getCommentsByPlayer(playerId) {
  return await prisma.comment.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    where: {
      playerId: +playerId
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
    }
  });
}
async function addComment(data) {
  const comment = await prisma.comment.create({
    data: {
      userId: data.userId,
      playerId: data.playerId,
      comment: data.comment
    }
  });
  return comment;
}
async function deleteComment(data) {
  await prisma.comment.delete({
    where: {
      id: +data.id
    }
  });
  return "Comment Delete successfully!";
}

export { addComment as a, deleteComment as d, getCommentsByPlayer as g };
//# sourceMappingURL=commentRepository.mjs.map
