import _sfc_main$1 from './Markdown-CZiW761y.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { ExclamationIcon, BanIcon, InformationCircleIcon } from '@heroicons/vue/solid/index.js';
import { _ as _export_sfc } from './server.mjs';
import './ContentSlot-BcmQm8hp.mjs';
import './node-BZyc0_pG.mjs';
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
import '@unhead/shared';
import 'vue-router';
import '@vue/reactivity';
import '@vueuse/core';

const _sfc_main = {
  __name: "InfoBox",
  __ssrInlineRender: true,
  props: ["type"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Markdown = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["info-box not-prose", [__props.type]]
      }, _attrs))} data-v-51e11f77>`);
      if (__props.type == "warning") {
        _push(ssrRenderComponent(unref(ExclamationIcon), { class: "icon solid" }, null, _parent));
      } else if (__props.type == "error") {
        _push(ssrRenderComponent(unref(BanIcon), { class: "icon solid" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "icon solid" }, null, _parent));
      }
      _push(`<details data-v-51e11f77><summary data-v-51e11f77>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</summary><div class="details pt-2" data-v-51e11f77>`);
      _push(ssrRenderComponent(_component_Markdown, {
        use: _ctx.$slots.details,
        unwrap: "p"
      }, null, _parent));
      _push(`</div></details></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/InfoBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InfoBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51e11f77"]]);

export { InfoBox as default };
//# sourceMappingURL=InfoBox-Bnv4wqkx.mjs.map
