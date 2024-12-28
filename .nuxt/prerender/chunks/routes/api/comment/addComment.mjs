import { a as addComment$1 } from '../../../_/commentRepository.mjs';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/default.js';

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
