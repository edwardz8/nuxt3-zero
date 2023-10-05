import { useBody } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { a as addComment$1 } from './commentRepository.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const addComment = async (event) => {
  const body = await useBody(event);
  const commentData = {
    userId: body.userId,
    playerId: body.playerId,
    comment: body.comment
  };
  const comment = await addComment$1(commentData);
  return comment;
};

export { addComment as default };
//# sourceMappingURL=addComment.mjs.map
