import { H as Head } from './components-xb_NwH6n.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-D2pF8YSe.mjs';
import './index-BkN0T-RA.mjs';
import '@unhead/shared';
import '../nitro/nitro.mjs';
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
import 'unhead';
import 'vue-router';
import '@vue/reactivity';
import '@vueuse/core';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center" }, _attrs))}><div class="content text-3xl text-center md:text-left"><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-16 lg:mt-10 lg:px-4 xl:mt-8"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="block xl:inline">mlb dfs</span><span class="block text-green-600 xl:inline"> stats and stories</span></h1><p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> Welcome to the home of baseball dfs news, season-long fantasy and props content. </p><div class="mt-5 flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/teams" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-gray-500"${_scopeId}> Stats </button>`);
      } else {
        return [
          createVNode("button", { class: "rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-gray-500" }, " Stats ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ml-2 rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-400"${_scopeId}> Blog </button>`);
      } else {
        return [
          createVNode("button", { class: "ml-2 rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-400" }, " Blog ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main></div><div class="container mx-auto flex flex-col items-center"><div class="w-full"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Script = resolveComponent("Script");
  const _component_Header = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "rotorink.com",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Script, {
            defer: "",
            "data-domain": "rotorink.com",
            src: "https://plausible.io/js/plausible.js"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`</section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-MFfm1c0F.mjs.map
