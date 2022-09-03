import { defineEventHandler, useCookie } from 'h3';
import { a as getUserBySessionToken } from './sessionService.mjs';
import '@prisma/client';
import 'crypto';

const getByAuthToken = defineEventHandler(async (event) => {
  const authToken = useCookie(event.req, "auth_token");
  const user = await getUserBySessionToken(authToken);
  return user;
});

export { getByAuthToken as default };
//# sourceMappingURL=getByAuthToken.mjs.map
