import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { d as deleteComment$1 } from '../../../_/commentRepository.mjs';
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

const deleteComment = defineEventHandler(async (event) => {
  const query = await useQuery(event);
  const commentId = query.commentId;
  const res = await deleteComment$1({ id: commentId });
  return res;
});

export { deleteComment as default };
//# sourceMappingURL=deleteComment.mjs.map
