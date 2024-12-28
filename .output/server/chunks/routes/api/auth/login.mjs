import { s as sendError, c as createError } from '../../../nitro/nitro.mjs';
import { a as getUserByEmailWithPass, m as makeSession, s as sanitizeUserForFrontend } from '../../../_/sessionService.mjs';
import bcrypt from 'bcrypt';
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
