import { _ as _export_sfc, c as useAsyncData, a as __nuxt_component_0$1 } from "../server.mjs";
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { TagIcon } from "@heroicons/vue/solid/index.js";
import { q as queryContent } from "./query-BPLYG_3c.js";
const _sfc_main = {
  __name: "Tags",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const expanded = ref(false);
    const flatten = (tags, key) => {
      console.log(tags);
      let _tags = tags.map((tag) => {
        let _tag = tag;
        if (tag[key]) {
          let flattened = flatten(tag[key]);
          _tag = flattened;
        }
        return _tag;
      }).flat(1);
      console.log({ _tags });
      return _tags;
    };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("tags", () => queryContent("blog").only(["tags"]).find())), __temp = await __temp, __restore(), __temp);
    const articleTags = [...new Set(flatten(data.value, "tags"))];
    console.log({ articleTags });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tag-list", { active: unref(expanded) }]
      }, _attrs))} data-v-cbed510e><button class="cta w-icon" data-v-cbed510e>`);
      _push(ssrRenderComponent(unref(TagIcon), { class: "icon solid" }, null, _parent));
      _push(`<span data-v-cbed510e>Tags</span></button><ul class="${ssrRenderClass([{ expanded: unref(expanded) }, "article-tags"])}" data-v-cbed510e><!--[-->`);
      ssrRenderList(articleTags, (tag, n) => {
        _push(`<li class="tag" data-v-cbed510e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/tags/${tag}`,
          class: "font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbed510e"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Tags-D8R5L2MZ.js.map
