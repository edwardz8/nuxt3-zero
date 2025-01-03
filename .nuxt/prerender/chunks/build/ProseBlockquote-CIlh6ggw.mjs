import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unified/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-parse/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-rehype/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/defu/dist/defu.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-gfm/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-external-links/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-raw/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/detab/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/scule/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hast-util-to-string/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/github-slugger/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/destr/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hookable/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/klona/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/radix3/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/pathe/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unhead/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</blockquote>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseBlockquote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProseBlockquote as default };
//# sourceMappingURL=ProseBlockquote-CIlh6ggw.mjs.map
