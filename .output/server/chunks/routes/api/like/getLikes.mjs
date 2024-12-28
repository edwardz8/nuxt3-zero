import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { g as getLikesByUser } from '../../../_/likeRepository.mjs';
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

const getLikes = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const playerId = query.playerId;
  const likes = await getLikesByUser(playerId);
  const likesGroupedByUser = likes.reduce(function(r, a) {
    r[a.playerId] = r[a.playerId] || [];
    r[a.playerId].push(a);
    return r;
  }, /* @__PURE__ */ Object.create(null));
  return likesGroupedByUser;
});

export { getLikes as default };
//# sourceMappingURL=getLikes.mjs.map
