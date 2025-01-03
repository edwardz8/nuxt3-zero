import { H as Head } from './components-xb_NwH6n.mjs';
import { _ as __nuxt_component_0 } from './Tags-D8R5L2MZ.mjs';
import _sfc_main$1 from './ContentList-BtZXe7ZH.mjs';
import { b as useRoute, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, resolveComponent, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './index-BkN0T-RA.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@heroicons/vue/solid/index.js';
import './query-BPLYG_3c.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs';
import './preview-DST8z7jb.mjs';
import './ContentQuery-KzMuouZD.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
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
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/unhead/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      query: { tags }
    } = useRoute();
    const filter = ref(tags == null ? void 0 : tags.split(","));
    useHead({
      title: "All articles",
      meta: [{ name: "description", content: "All articles" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Script = resolveComponent("Script");
      const _component_Tags = __nuxt_component_0;
      const _component_ContentList = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
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
      _push(`<header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles</h1><p class="font-medium text-lg">List of all articles</p></div></header><section class="page-section">`);
      _push(ssrRenderComponent(_component_Tags, null, null, _parent));
      _push(ssrRenderComponent(_component_ContentList, {
        path: "/blog",
        query: {
          only: ["title", "description", "tags", "_path", "img"],
          where: {
            tags: {
              $contains: unref(filter)
            }
          },
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="article-list"${_scopeId}><!--[-->`);
            ssrRenderList(list, (article) => {
              _push2(`<li class="article-item"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: article._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="wrapper"${_scopeId2}><div class="img-cont w-32 shrink-0"${_scopeId2}><img${ssrRenderAttr("src", `/${article.img}`)}${ssrRenderAttr("alt", article.title)} class="rounded-lg max-h-[8rem]"${_scopeId2}></div><header${_scopeId2}><h1 class="text-2xl font-semibold"${_scopeId2}>${ssrInterpolate(article.title)}</h1><p${_scopeId2}>${ssrInterpolate(article.description)}</p><ul class="article-tags"${_scopeId2}><!--[-->`);
                    ssrRenderList(article.tags, (tag, n) => {
                      _push3(`<li class="tag !py-0.5"${_scopeId2}>${ssrInterpolate(tag)}</li>`);
                    });
                    _push3(`<!--]--></ul></header></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "wrapper" }, [
                        createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                          createVNode("img", {
                            src: `/${article.img}`,
                            alt: article.title,
                            class: "rounded-lg max-h-[8rem]"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("header", null, [
                          createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(article.title), 1),
                          createVNode("p", null, toDisplayString(article.description), 1),
                          createVNode("ul", { class: "article-tags" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(article.tags, (tag, n) => {
                              return openBlock(), createBlock("li", {
                                class: "tag !py-0.5",
                                key: n
                              }, toDisplayString(tag), 1);
                            }), 128))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "article-list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                  return openBlock(), createBlock("li", {
                    key: article._path,
                    class: "article-item"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: article._path
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "wrapper" }, [
                          createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                            createVNode("img", {
                              src: `/${article.img}`,
                              alt: article.title,
                              class: "rounded-lg max-h-[8rem]"
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("header", null, [
                            createVNode("h1", { class: "text-2xl font-semibold" }, toDisplayString(article.title), 1),
                            createVNode("p", null, toDisplayString(article.description), 1),
                            createVNode("ul", { class: "article-tags" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(article.tags, (tag, n) => {
                                return openBlock(), createBlock("li", {
                                  class: "tag !py-0.5",
                                  key: n
                                }, toDisplayString(tag), 1);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No articles found.</p>`);
          } else {
            return [
              createVNode("p", null, "No articles found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CijvIiW3.mjs.map
