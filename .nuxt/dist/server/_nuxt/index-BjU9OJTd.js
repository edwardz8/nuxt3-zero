import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { m as matchPlayerImage } from "./methods-Dr2_CXld.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeamCard",
  __ssrInlineRender: true,
  props: ["team"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white border shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-zinc-700/[.7]" }, _attrs))}><img class="mx-auto rounded-t-xl w-32 mt-2"${ssrRenderAttr("src", unref(matchPlayerImage)(__props.team.abbreviation))} alt="Player Profile"><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white">${ssrInterpolate(__props.team.fullName)}</h3><p class="mt-1 text-gray-800 dark:text-gray-400">${ssrInterpolate(__props.team.location)} <br></p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",
        to: `/teams/` + __props.team.triCode
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Team `);
          } else {
            return [
              createTextVNode(" View Team ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const teams = ref([]);
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TeamCard = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="container mx-auto"><h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2>`);
      if (unref(loading)) {
        _push(`<div class="text-center">Loading...</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center text-zinc-700">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(teams), (team) => {
          _push(ssrRenderComponent(_component_TeamCard, {
            team,
            key: team.id
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BjU9OJTd.js.map
