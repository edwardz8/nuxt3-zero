import { d as defineEventHandler, g as getCookie } from '../../../nitro/nitro.mjs';
import { g as getUserBySessionToken } from '../../../_/sessionService.mjs';
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

const getByAuthToken = defineEventHandler(async (event) => {
  const authToken = getCookie(event, "auth_token");
  const user = await getUserBySessionToken(authToken);
  return user;
});

export { getByAuthToken as default };
//# sourceMappingURL=getByAuthToken.mjs.map
