import { _ as __nuxt_component_0 } from './Tags-mnN2gCnb.mjs';
import _sfc_main$1 from './ContentList-GtLky4U_.mjs';
import { b as useRoute, a as __nuxt_component_0$1 } from './server.mjs';
import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './index-BkN0T-RA.mjs';
import '@heroicons/vue/solid/index.js';
import './query-D7KAhVql.mjs';
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
import './preview-DST8z7jb.mjs';
import './ContentQuery-ZDTi0uyD.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vue/reactivity';
import '@vueuse/core';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      params: { slug }
    } = useRoute();
    const filter = slug.split(",");
    console.log({ filter });
    useHead({
      title: `All articles with ${slug}`,
      meta: [{ name: "description", content: "Featured articles" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tags = __nuxt_component_0;
      const _component_ContentList = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles with &quot;${ssrInterpolate(unref(slug))}&quot;</h1><p class="font-medium text-lg">List of articles</p></div></header><section class="page-section">`);
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
                    _push3(`<div class="wrapper"${_scopeId2}><div class="img-cont w-32"${_scopeId2}><img${ssrRenderAttr("src", `/${article.img}`)}${ssrRenderAttr("alt", article.title)} class="rounded-lg max-h-[8rem]"${_scopeId2}></div><header${_scopeId2}><h1 class="text-2xl font-semibold"${_scopeId2}>${ssrInterpolate(article.title)}</h1><p${_scopeId2}>${ssrInterpolate(article.description)}</p><ul class="article-tags"${_scopeId2}><!--[-->`);
                    ssrRenderList(article.tags, (tag, n) => {
                      _push3(`<li class="tag"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/blog/tags/${tag}`,
                        class: "underline"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(tag)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(tag), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></header></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "wrapper" }, [
                        createVNode("div", { class: "img-cont w-32" }, [
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
                                class: "tag",
                                key: n
                              }, [
                                createVNode(_component_NuxtLink, {
                                  to: `/blog/tags/${tag}`,
                                  class: "underline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]);
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
                          createVNode("div", { class: "img-cont w-32" }, [
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
                                  class: "tag",
                                  key: n
                                }, [
                                  createVNode(_component_NuxtLink, {
                                    to: `/blog/tags/${tag}`,
                                    class: "underline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/tags/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CCClBT_z.mjs.map
