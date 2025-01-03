import { H as Head } from "./components-xb_NwH6n.js";
import { mergeProps, useSSRContext, ref, unref, withCtx, createVNode, toDisplayString, withAsyncContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useRouter, a as __nuxt_component_0, b as useRoute, c as useAsyncData } from "../server.mjs";
import _sfc_main$4 from "./ContentRenderer-qbY54hXS.js";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid/index.js";
import { q as queryContent } from "./query-BPLYG_3c.js";
import { u as useHead } from "./index-BkN0T-RA.js";
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
import "./ContentRendererMarkdown-DYuqjlDY.js";
import "scule";
import "property-information";
import "./node-BZyc0_pG.js";
import "./preview-DST8z7jb.js";
const _sfc_main$3 = {
  __name: "Toc",
  __ssrInlineRender: true,
  props: ["links"],
  setup(__props) {
    const flattenLinks = (links) => {
      let _links = links.map((link) => {
        let _link = [link];
        if (link.children) {
          let flattened = flattenLinks(link.children);
          _link = [link, ...flattened];
        }
        return _link;
      }).flat(1);
      console.log({ _links });
      return _links;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "toc" }, _attrs))} data-v-1c6d7220><header class="toc-header" data-v-1c6d7220><h3 class="text-xl font-bold" data-v-1c6d7220>Table of contents</h3></header><ul class="toc-links" data-v-1c6d7220><!--[-->`);
      ssrRenderList(flattenLinks(__props.links), (link) => {
        _push(`<li class="${ssrRenderClass(`toc-link _${link.depth}`)}" data-v-1c6d7220><a${ssrRenderAttr("href", `#${link.id}`)} data-v-1c6d7220>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toc.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c6d7220"]]);
const _sfc_main$2 = {
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    useRouter();
    const userEmail = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 mb-4 mt-4" }, _attrs))}><div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"><h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"><span class="block">Want exclusive content?</span><span class="block text-blue-600">Sign up for our free newsletter</span></h2><div class="mt-8 flex lg:mt-0 lg:flex-shrink-0"><form class="ml-2 inline-flex rounded-md shadow"><label for="email" class="hidden leading-7 text-sm text-gray-600">email</label><input type="email" id="email"${ssrRenderAttr("value", unref(userEmail))} name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"><button class="inline-flex ml-2 items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-900"> Subscribe </button></form></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PrevNext",
  __ssrInlineRender: true,
  props: ["prev", "next"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "prev-next-cont" }, _attrs))} data-v-3d46834e><li class="link-item prev" data-v-3d46834e>`);
      if (__props.prev) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.prev._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeftIcon), { class: "icon stroke" }, null, _parent2, _scopeId));
              _push2(`<span data-v-3d46834e${_scopeId}>${ssrInterpolate(__props.prev.title)}</span>`);
            } else {
              return [
                createVNode(unref(ArrowLeftIcon), { class: "icon stroke" }),
                createVNode("span", null, toDisplayString(__props.prev.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="link-item next" data-v-3d46834e>`);
      if (__props.next) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.next._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3d46834e${_scopeId}>${ssrInterpolate(__props.next.title)}</span>`);
              _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "icon stroke" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.next.title), 1),
                createVNode(unref(ArrowRightIcon), { class: "icon stroke" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrevNext.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3d46834e"]]);
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let article = queryContent().where({ _path: path }).findOne();
      let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
      return {
        article: await article,
        surround: await surround
      };
    })), __temp = await __temp, __restore(), __temp);
    const [prev, next] = data.value.surround;
    console.log({ data, prev, next });
    useHead({
      title: data.value.article.title,
      meta: [
        { name: "description", content: data.value.article.description },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://site.com/${data.value.article.img}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Script = resolveComponent("Script");
      const _component_Toc = __nuxt_component_1;
      const _component_ContentRenderer = _sfc_main$4;
      const _component_MarkdownRenderer = resolveComponent("MarkdownRenderer");
      const _component_Form = _sfc_main$2;
      const _component_PrevNext = __nuxt_component_4;
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "article-main"
      }, _attrs))} data-v-9dc4bc9a>`);
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
      if (unref(data).article) {
        _push(`<header class="article-header" data-v-9dc4bc9a><div class="img-cont h-72 mb-12" data-v-9dc4bc9a><img${ssrRenderAttr("src", `/${unref(data).article.img}`)}${ssrRenderAttr("alt", unref(data).article.title)} class="rounded-2xl" data-v-9dc4bc9a></div><h1 class="heading" data-v-9dc4bc9a>${ssrInterpolate(unref(data).article.title)}</h1><p class="supporting" data-v-9dc4bc9a>${ssrInterpolate(unref(data).article.description)}</p><ul class="article-tags" data-v-9dc4bc9a><!--[-->`);
        ssrRenderList(unref(data).article.tags, (tag, n) => {
          _push(`<li class="tag" data-v-9dc4bc9a>${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr data-v-9dc4bc9a><section class="article-section" data-v-9dc4bc9a><aside class="aside" data-v-9dc4bc9a>`);
      _push(ssrRenderComponent(_component_Toc, {
        links: unref(data).article.body.toc.links
      }, null, _parent));
      _push(`</aside><article class="article" data-v-9dc4bc9a>`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(data).article
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-9dc4bc9a${_scopeId}>No content found.</p>`);
          } else {
            return [
              createVNode("p", null, "No content found.")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MarkdownRenderer, {
              value: unref(data).article
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MarkdownRenderer, {
                value: unref(data).article
              }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></section>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      _push(ssrRenderComponent(_component_PrevNext, {
        prev: unref(prev),
        next: unref(next)
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dc4bc9a"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-P9RRd49d.js.map
