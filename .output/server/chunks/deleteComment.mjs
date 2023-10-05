import { defineEventHandler, useQuery } from 'h3';
import { d as deleteComment$1 } from './commentRepository.mjs';
import './client.mjs';
import '@prisma/client';

const deleteComment = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const commentId = query.commentId;
  const res = await deleteComment$1({ id: commentId });
  return res;
});

export { deleteComment as default };
//# sourceMappingURL=deleteComment.mjs.map
