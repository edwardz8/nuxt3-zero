import { defineEventHandler, getCookie } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { g as getUserBySessionToken } from '../../../_/sessionService.mjs';
import '../../../_/client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/default.js';
import 'crypto';

const getByAuthToken = defineEventHandler(async (event) => {
  const authToken = getCookie(event, "auth_token");
  const user = await getUserBySessionToken(authToken);
  return user;
});

export { getByAuthToken as default };
//# sourceMappingURL=getByAuthToken.mjs.map
