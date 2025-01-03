import { readBody, sendError, createError } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import bcrypt from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/bcrypt/bcrypt.js';
import { v as validateUser, c as createUser, m as makeSession } from '../../../_/sessionService.mjs';
import '../../../_/client.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@prisma/client/default.js';
import 'crypto';

const register = async (event) => {
  const body = await readBody(event);
  const data = body.data;
  const validation = await validateUser(data);
  if (validation.hasErrors === true) {
    const errors = JSON.stringify(Object.fromEntries(validation.errors));
    return sendError(event, createError({ statusCode: 422, data: errors }));
  }
  const encryptedPassword = await bcrypt.hash(data.password, 10);
  const userData = {
    username: data.username,
    name: data.name,
    email: data.email,
    loginType: "email",
    password: encryptedPassword
  };
  const user = await createUser(userData);
  return await makeSession(user, event);
};

export { register as default };
//# sourceMappingURL=register.mjs.map
