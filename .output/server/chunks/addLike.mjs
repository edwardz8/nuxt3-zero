import { useBody } from 'h3';
import { a as addLike$1 } from './likeRepository.mjs';
import './client.mjs';
import '@prisma/client';

const addLike = async (event) => {
  const body = await useBody(event);
  console.log(body);
  const likeData = {
    userId: body.userId,
    playerId: body.playerId
  };
  const like = await addLike$1(likeData);
  return like;
};

export { addLike as default };
//# sourceMappingURL=addLike.mjs.map
