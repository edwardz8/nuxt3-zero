import { defineEventHandler, useQuery } from 'h3';
import { g as getCommentsByPlayer } from './commentRepository.mjs';
import './client.mjs';
import '@prisma/client';

const getComments = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const playerId = query.playerId;
  const comment = await getCommentsByPlayer(playerId);
  return comment;
});

export { getComments as default };
//# sourceMappingURL=getComments.mjs.map
