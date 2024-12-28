import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { d as deleteComment$1 } from '../../../_/commentRepository.mjs';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/default.js';

const deleteComment = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const commentId = query.commentId;
  const res = await deleteComment$1({ id: commentId });
  return res;
});

export { deleteComment as default };
//# sourceMappingURL=deleteComment.mjs.map
