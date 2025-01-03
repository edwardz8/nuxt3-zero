import { H as Head } from "./components-xb_NwH6n.js";
import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BzpJCmQC.js";
import "./index-BkN0T-RA.js";
import "@unhead/shared";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vue/reactivity";
import "destr";
import "klona";
import "@vueuse/core";
import "ohash";
import "cookie-es";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center" }, _attrs))}><div class="content text-3xl text-center md:text-left"><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-16 lg:mt-10 lg:px-4 xl:mt-8"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="block xl:inline">rotorink</span><span class="block text-blue-600 xl:inline"> stats and stories</span></h1><p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> Welcome to the home of NHL DFS news, season-long fantasy and props content. </p><div class="mt-5 flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/teams" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-gray-500"${_scopeId}> Stats </button>`);
      } else {
        return [
          createVNode("button", { class: "rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-gray-500" }, " Stats ")
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
export {
  index as default
};
//# sourceMappingURL=index-CztdRrIF.js.map
