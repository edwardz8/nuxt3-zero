import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { d as deleteLike$1 } from '../../../_/likeRepository.mjs';
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

const deleteLike = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const likeId = query.likeId;
  const res = await deleteLike$1({ id: likeId });
  return res;
});

export { deleteLike as default };
//# sourceMappingURL=deleteLike.mjs.map
