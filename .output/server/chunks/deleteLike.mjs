import { defineEventHandler, useQuery } from 'h3';
import { d as deleteLike$1 } from './likeRepository.mjs';
import './client.mjs';
import '@prisma/client';

const deleteLike = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const likeId = query.likeId;
  const res = await deleteLike$1({ id: likeId });
  return res;
});

export { deleteLike as default };
//# sourceMappingURL=deleteLike.mjs.map
