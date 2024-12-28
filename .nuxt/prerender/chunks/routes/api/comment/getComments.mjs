import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { g as getCommentsByPlayer } from '../../../_/commentRepository.mjs';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';

const getComments = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const playerId = query.playerId;
  const comment = await getCommentsByPlayer(playerId);
  return comment;
});

export { getComments as default };
//# sourceMappingURL=getComments.mjs.map