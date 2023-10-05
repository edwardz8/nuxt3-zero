import { defineEventHandler, useQuery } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { d as deleteLike$1 } from './likeRepository.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const deleteLike = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const likeId = query.likeId;
  const res = await deleteLike$1({ id: likeId });
  return res;
});

export { deleteLike as default };
//# sourceMappingURL=deleteLike.mjs.map
