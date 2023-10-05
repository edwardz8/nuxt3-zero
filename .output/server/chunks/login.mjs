import { useBody, sendError, createError } from 'h3';
import { g as getUserByEmailWithPass, m as makeSession, s as sanitizeUserForFrontend } from './sessionService.mjs';
import bcrypt from 'bcrypt';
import './client.mjs';
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
