import { defineEventHandler, useQuery } from 'h3';
import { g as getLikesByUser } from './likeRepository.mjs';
import './client.mjs';
import '@prisma/client';

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
