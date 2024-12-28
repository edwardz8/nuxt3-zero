import { useSSRContext, ref, unref, defineComponent, mergeProps } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.mjs';
import { m as matchPlayerImage } from './methods-CTCXKPMz.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Player",
  __ssrInlineRender: true,
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white border shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-zinc-700/[.7]" }, _attrs))}><img class="mx-auto rounded-t-xl w-32 mt-2"${ssrRenderAttr("src", unref(matchPlayerImage)(__props.player.full_name))} alt="Player Profile"><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white">${ssrInterpolate(__props.player.full_name)}</h3><p class="mt-1 text-gray-800 dark:text-gray-400">${ssrInterpolate(__props.player.position)} <br></p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Player.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const players = ref([]);
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Player = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="container mx-auto"><h2 class="text-2xl mt-3 mb-4 text-center">All Players</h2>`);
      if (unref(loading)) {
        _push(`<div class="text-center">Loading...</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(players), (player) => {
          _push(ssrRenderComponent(_component_Player, {
            player: unref(players),
            key: player.id
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/players/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DugdxUDs.mjs.map
