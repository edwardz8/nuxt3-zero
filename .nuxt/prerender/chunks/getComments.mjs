import { defineEventHandler, useQuery } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { g as getCommentsByPlayer } from './commentRepository.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const getComments = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const playerId = query.playerId;
  const comment = await getCommentsByPlayer(playerId);
  return comment;
});

export { getComments as default };
//# sourceMappingURL=getComments.mjs.map
