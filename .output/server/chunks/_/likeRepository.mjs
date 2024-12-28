import { p as prisma } from './client.mjs';

async function getLikesByUser(playerId) {
  const idArray = playerId.split(",").map(Number);
  return await prisma.like.findMany({
    where: {
      playerId: { in: idArray }
    },
    select: {
      id: true,
      playerId: true,
      userId: true
    }
  });
}
async function addLike(data) {
  const like = await prisma.like.create({
    data: {
      userId: data.userId,
      playerId: data.playerId
    }
  });
  return like;
}
async function deleteLike(data) {
  await prisma.like.delete({
    where: {
      id: +data.id
    }
  });
  return "Unliked successfully!";
}

export { addLike as a, deleteLike as d, getLikesByUser as g };
//# sourceMappingURL=likeRepository.mjs.map
