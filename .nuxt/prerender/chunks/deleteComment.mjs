import { defineEventHandler, useQuery } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { d as deleteComment$1 } from './commentRepository.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const deleteComment = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const commentId = query.commentId;
  const res = await deleteComment$1({ id: commentId });
  return res;
});

export { deleteComment as default };
//# sourceMappingURL=deleteComment.mjs.map
