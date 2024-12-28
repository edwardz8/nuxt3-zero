import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = publicAssetsURL("/img//UFOBag.svg");
const _imports_1 = publicAssetsURL("/img/Connor_Mcdavid.svg");
const _imports_2 = publicAssetsURL("/img/PlumbersJersey.svg");
const _imports_3 = publicAssetsURL("/img/Skates-Retro-Pink-2.svg");
const _sfc_main = {
  data() {
    return {
      features: [
        { name: "Daily Fantasy Lineups", description: "DFS and Season-long top plays 📱" },
        { name: "Parlays", description: "Stringing together high-percentage combos for 💰" },
        { name: "Player & Team Props", description: "Goalscorers and Shots on Goal props and parlays ⛸️" },
        { name: "Prospects", description: "Keep up with future stars 🏒 (Coming soon)" },
        { name: "Featured Hockey Plays", description: "Plays from the Sports top hockey contributors  🥅" },
        { name: "Player News", description: "Trending player updates 💻" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2"><div><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Features</h2><p class="mt-4 text-gray-500">Prosper in your fantasy leagues and apps with articles on betting, lineup and season-long fantasy advice.</p><dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"><!--[-->`);
  ssrRenderList($data.features, (feature) => {
    _push(`<div class="border-t border-gray-200 pt-4"><dt class="font-medium text-gray-900">${ssrInterpolate(feature.name)}</dt><dd class="mt-2 text-sm text-gray-500">${ssrInterpolate(feature.description)}</dd></div>`);
  });
  _push(`<!--]--></dl></div><div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"><img${ssrRenderAttr("src", _imports_0)} alt="hockey" class="bg-gray-100 rounded-lg"><img${ssrRenderAttr("src", _imports_1)} alt="hockey" class="bg-gray-100 rounded-lg"><img${ssrRenderAttr("src", _imports_2)} alt="hockey" class="bg-gray-100 rounded-lg"><img${ssrRenderAttr("src", _imports_3)} alt="hockey" class="bg-gray-100 rounded-lg"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Features-BwLxzWem.js.map
