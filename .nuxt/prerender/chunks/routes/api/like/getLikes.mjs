import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { g as getLikesByUser } from '../../../_/likeRepository.mjs';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const getLikes = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const playerId = query.playerId;
  const likes = await getLikesByUser(playerId);
  const likesGroupedByUser = likes.reduce(function(r, a) {
    r[a.playerId] = r[a.playerId] || [];
    r[a.playerId].push(a);
    return r;
  }, /* @__PURE__ */ Object.create(null));
  return likesGroupedByUser;
});

export { getLikes as default };
//# sourceMappingURL=getLikes.mjs.map
