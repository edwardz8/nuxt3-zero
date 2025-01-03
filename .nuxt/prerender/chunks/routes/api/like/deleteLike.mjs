import { defineEventHandler, getQuery } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { d as deleteLike$1 } from '../../../_/likeRepository.mjs';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/default.js';

const deleteLike = defineEventHandler(async (event) => {
  const query = await getQuery(event);
  const likeId = query.likeId;
  const res = await deleteLike$1({ id: likeId });
  return res;
});

export { deleteLike as default };
//# sourceMappingURL=deleteLike.mjs.map
