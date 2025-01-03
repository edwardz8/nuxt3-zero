import { setCookie } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { p as prisma } from './client.mjs';
import crypto from 'crypto';

async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      id: true,
      username: true
    }
  });
}
async function getUserByEmailWithPass(email) {
  return await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      id: true,
      username: true,
      password: true
    }
  });
}
async function getUserByUserName(username) {
  return await prisma.user.findUnique({
    where: {
      username
    },
    select: {
      id: true,
      username: true
    }
  });
}
async function createUser(data) {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      email: data.email,
      loginType: data.loginType,
      password: data.password
    }
  });
  return user;
}

async function validate$1(data) {
  const errors = /* @__PURE__ */ new Map();
  for (const [key, value] of Object.entries(data)) {
    let val = await runChecks(key, value);
    if (val.hasError) {
      errors.set(key, { "check": val });
    }
  }
  return errors;
}
async function runChecks(key, value) {
  const check = {
    value,
    isBlank: false,
    lenghtMin8: true,
    key,
    hasError: false
  };
  if (value == "" || value == null) {
    check.isBlank = true;
    check.hasError = true;
    check.errorMessage = `${key} is required`;
    return check;
  }
  if (key == "password") {
    if (value.length < 8) {
      check.hasError = true;
      check.errorMessage = `password must be at least 8 characters`;
    }
    check.lenghtMin8 = false;
  }
  if (key == "email") {
    const isValidEmail = validateEmail(value);
    if (!isValidEmail) {
      check.emailTaken = true;
      check.hasError = true;
      check.errorMessage = `${value}, is not a valid email!`;
      return check;
    }
    const email = await getUserByEmail(value);
    if (email) {
      check.emailTaken = true;
      check.hasError = true;
      check.errorMessage = `This email, ${value}, is already registered!`;
    }
  }
  if (key == "username") {
    const username = await getUserByUserName(value);
    if (username) {
      check.usernameTaken = true;
      check.hasError = true;
      check.errorMessage = `The username, ${value}, is already registered!`;
    }
  }
  return check;
}
function validateEmail(input) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.match(validRegex)) {
    return false;
  }
  return true;
}

async function validateUser(data) {
  const errors = await validate$1(data);
  if (errors.size > 0) {
    return { hasErrors: true, errors };
  }
  return { hasErrors: false };
}
function sanitizeUserForFrontend(user) {
  if (!user) {
    return user;
  }
  delete user.password;
  delete user.loginType;
  delete user.stripeCustomerId;
  return user;
}

async function createSession(data) {
  return await prisma.session.create({
    data: {
      userId: data.userId,
      authToken: data.authToken
    }
  });
}
async function getSessionByAuthToken(authToken) {
  const user = await getUserByAuthToken(authToken);
  return { authToken, user };
}
async function getUserByAuthToken(authToken) {
  return prisma.session.findUnique({
    where: {
      authToken
    }
  }).user();
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  return stringify(rnds);
}

async function makeSession(user, event) {
  const authToken = v4().replaceAll("-", "");
  const session = await createSession({ authToken, userId: user.id });
  const userId = session.userId;
  if (userId) {
    setCookie(event, "auth_token", authToken, { path: "/", httpOnly: true });
    return getUserBySessionToken(authToken);
  }
  throw Error("Error Creating Session");
}
async function getUserBySessionToken(authToken) {
  const session = await getSessionByAuthToken(authToken);
  return sanitizeUserForFrontend(session.user);
}

export { getUserByEmailWithPass as a, createUser as c, getUserBySessionToken as g, makeSession as m, sanitizeUserForFrontend as s, validateUser as v };
//# sourceMappingURL=sessionService.mjs.map
