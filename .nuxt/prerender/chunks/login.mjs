import { useBody, sendError, createError } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { g as getUserByEmail, m as makeSession, s as sanitizeUserForFrontend } from './sessionService.mjs';
import bcrypt from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/bcrypt/bcrypt.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';
import 'crypto';

const login = async (event) => {
  const body = await useBody(event);
  const email = body.email;
  const password = body.password;
  const user = await getUserByEmail(email);
  if (user === null) {
    sendError(event, createError({ statusCode: 401, statusMessage: "Unauthenticated" }));
  }
  const isPasswordCorrect = bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    sendError(event, createError({ statusCode: 401, statusMessage: "Unauthenticated" }));
  }
  await makeSession(user, event);
  return sanitizeUserForFrontend(user);
};

export { login as default };
//# sourceMappingURL=login.mjs.map
