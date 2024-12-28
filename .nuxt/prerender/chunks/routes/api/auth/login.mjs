import { sendError, createError } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { a as getUserByEmailWithPass, m as makeSession, s as sanitizeUserForFrontend } from '../../../_/sessionService.mjs';
import bcrypt from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/bcrypt/bcrypt.js';
import '../../../_/client.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@prisma/client/index.js';
import 'crypto';

const login = async (event) => {
  const body = await useBody(event);
  const email = body.email;
  const password = body.password;
  const user = await getUserByEmailWithPass(email);
  if (user === null) {
    return sendError(event, createError({ statusCode: 423, statusMessage: "Wrong Email" }));
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  console.log(password, user, isPasswordCorrect);
  if (!isPasswordCorrect) {
    return sendError(event, createError({ statusCode: 423, statusMessage: "Wrong Password" }));
  }
  await makeSession(user, event);
  return sanitizeUserForFrontend(user);
};

export { login as default };
//# sourceMappingURL=login.mjs.map
