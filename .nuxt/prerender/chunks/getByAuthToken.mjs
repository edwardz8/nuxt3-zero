import { defineEventHandler, useCookie } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { a as getUserBySessionToken } from './sessionService.mjs';
import './client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';
import 'crypto';

const getByAuthToken = defineEventHandler(async (event) => {
  const authToken = useCookie(event.req, "auth_token");
  const user = await getUserBySessionToken(authToken);
  return user;
});

export { getByAuthToken as default };
//# sourceMappingURL=getByAuthToken.mjs.map
