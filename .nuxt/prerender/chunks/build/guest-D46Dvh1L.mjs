import { g as defineNuxtRouteMiddleware, h as executeAsync, i as useUser } from './server.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unified/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/remark-parse/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/remark-rehype/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/defu/dist/defu.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/remark-gfm/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/rehype-external-links/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/rehype-raw/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/detab/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/scule/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/hast-util-to-string/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/github-slugger/index.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/destr/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/hookable/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/klona/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/radix3/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/pathe/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unhead/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs';

const guest = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const user = ([__temp, __restore] = executeAsync(() => useUser()), __temp = await __temp, __restore(), __temp);
  if (user !== null && user !== void 0) {
    return "/";
  }
});

export { guest as default };
//# sourceMappingURL=guest-D46Dvh1L.mjs.map
