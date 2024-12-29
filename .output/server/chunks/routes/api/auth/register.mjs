import { s as sendError, c as createError } from '../../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
import { v as validateUser, c as createUser, m as makeSession } from '../../../_/sessionService.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../../../_/client.mjs';
import '@prisma/client';
import 'crypto';

const register = async (event) => {
  const body = await useBody(event);
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
