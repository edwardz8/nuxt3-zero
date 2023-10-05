import { useBody } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { a as addLike$1 } from './likeRepository.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

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
