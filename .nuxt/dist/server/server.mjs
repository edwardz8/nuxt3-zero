
// --------------------
// Request: /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/paths.mjs ($id_18786cd8)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/css.mjs ($id_96d15167)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/root-component.mjs ($id_ff981dfb)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/app-component.mjs ($id_170882f6)
// --------------------
const $id_74742b3b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /components/Toc.vue ($id_5cbfb66a)
// - /components/Form.vue ($id_ce31a1a0)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /components/PlayerCard.vue ($id_89df6488)
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /components/Comments.vue ($id_04072223)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// - /pages/teams/index.vue ($id_9644598b)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /components/User.vue ($id_ce2e00d8)
// - /components/SiteHeader.vue ($id_01340d67)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/paths.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_18786cd8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico?v2"}],"style":[],"script":[],"title":"rosterprops"},"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":""}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/paths.mjs ($id_18786cd8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /composables/useLike.ts ($id_6dd93210)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /components/Form.vue ($id_ce31a1a0)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /components/PlayerCard.vue ($id_89df6488)
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /components/Comments.vue ($id_04072223)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// - /pages/teams/index.vue ($id_9644598b)
// - /middleware/auth.ts ($id_7b92aa86)
// - /middleware/guest.ts ($id_c862a572)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/User.vue ($id_ce2e00d8)
// - /components/SiteHeader.vue ($id_01340d67)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /middleware/auth.ts ($id_7b92aa86)
// - /middleware/guest.ts ($id_c862a572)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /components/PlayerCard.vue ($id_89df6488)
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /components/SiteHeader.vue ($id_01340d67)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/css.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 
// - /assets/css/main.css ($id_f8b2993b)
// --------------------
const $id_96d15167 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/main.css");
;
}


// --------------------
// Request: /assets/css/main.css
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/css.mjs ($id_96d15167)
// Dependencies: 

// --------------------
const $id_f8b2993b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,800,500,100,700,400,300,200,900&f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap\");\n/*! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:Satoshi,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where([class~=lead]):not(:where([class~=not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-bottom:1.2em;margin-top:1.2em}.prose :where(a):not(:where([class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(ol):not(:where([class~=not-prose] *)){list-style-type:decimal;padding-left:1.625em}.prose :where(ol[type=A]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=\"1\"]):not(:where([class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose] *)){list-style-type:disc;padding-left:1.625em}.prose :where(ol>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(hr):not(:where([class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-bottom:3em;margin-top:3em}.prose :where(blockquote):not(:where([class~=not-prose] *)){border-left-color:var(--tw-prose-quote-borders);border-left-width:.25rem;color:var(--tw-prose-quotes);font-style:italic;font-weight:500;margin-bottom:1.6em;margin-top:1.6em;padding-left:1em;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:2.25em;font-weight:800;line-height:1.1111111;margin-bottom:.8888889em;margin-top:0}.prose :where(h1 strong):not(:where([class~=not-prose] *)){font-weight:900}.prose :where(h2):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.5em;font-weight:700;line-height:1.3333333;margin-bottom:1em;margin-top:2em}.prose :where(h2 strong):not(:where([class~=not-prose] *)){font-weight:800}.prose :where(h3):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.25em;font-weight:600;line-height:1.6;margin-bottom:.6em;margin-top:1.6em}.prose :where(h3 strong):not(:where([class~=not-prose] *)){font-weight:700}.prose :where(h4):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;line-height:1.5;margin-bottom:.5em;margin-top:1.5em}.prose :where(h4 strong):not(:where([class~=not-prose] *)){font-weight:700}.prose :where(figure>*):not(:where([class~=not-prose] *)){margin-bottom:0;margin-top:0}.prose :where(figcaption):not(:where([class~=not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose :where(code):not(:where([class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose] *)):before{content:\"`\"}.prose :where(code):not(:where([class~=not-prose] *)):after{content:\"`\"}.prose :where(a code):not(:where([class~=not-prose] *)){color:var(--tw-prose-links)}.prose :where(pre):not(:where([class~=not-prose] *)){background-color:var(--tw-prose-pre-bg);border-radius:.375rem;color:var(--tw-prose-pre-code);font-size:.875em;font-weight:400;line-height:1.7142857;margin-bottom:1.7142857em;margin-top:1.7142857em;overflow-x:auto;padding:.8571429em 1.1428571em}.prose :where(pre code):not(:where([class~=not-prose] *)){background-color:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding:0}.prose :where(pre code):not(:where([class~=not-prose] *)):before{content:none}.prose :where(pre code):not(:where([class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose] *)){font-size:.875em;line-height:1.7142857;margin-bottom:2em;margin-top:2em;table-layout:auto;text-align:left;width:100%}.prose :where(thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-th-borders);border-bottom-width:1px}.prose :where(thead th):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;padding-bottom:.5714286em;padding-left:.5714286em;padding-right:.5714286em;vertical-align:bottom}.prose :where(tbody tr):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-td-borders);border-bottom-width:1px}.prose :where(tbody tr:last-child):not(:where([class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose] *)){padding:.5714286em;vertical-align:baseline}.prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgba(0,0,0,.5);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.prose :where(p):not(:where([class~=not-prose] *)){margin-bottom:1.25em;margin-top:1.25em}.prose :where(img):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(video):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(figure):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(h2 code):not(:where([class~=not-prose] *)){font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose] *)){font-size:.9em}.prose :where(li):not(:where([class~=not-prose] *)){margin-bottom:.5em;margin-top:.5em}.prose :where(ol>li):not(:where([class~=not-prose] *)){padding-left:.375em}.prose :where(ul>li):not(:where([class~=not-prose] *)){padding-left:.375em}.prose>:where(ul>li p):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.prose>:where(ul>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.prose>:where(ul>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.prose>:where(ol>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.prose>:where(ol>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.prose :where(hr+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h2+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h3+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h4+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose] *)){padding-left:0}.prose :where(thead th:last-child):not(:where([class~=not-prose] *)){padding-right:0}.prose :where(tbody td:first-child):not(:where([class~=not-prose] *)){padding-left:0}.prose :where(tbody td:last-child):not(:where([class~=not-prose] *)){padding-right:0}.prose>:where(:first-child):not(:where([class~=not-prose] *)){margin-top:0}.prose>:where(:last-child):not(:where([class~=not-prose] *)){margin-bottom:0}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{left:0;right:0}.inset-0,.inset-y-0{bottom:0;top:0}.top-0{top:0}.bottom-0{bottom:0}.right-0{right:0}.left-0{left:0}.z-50{z-index:50}.col-span-full{grid-column:1/-1}.row-start-1{grid-row-start:1}.float-left{float:left}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.mx-4{margin-left:1rem;margin-right:1rem}.ml-3{margin-left:.75rem}.mb-3{margin-bottom:.75rem}.ml-auto{margin-left:auto}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.ml-12{margin-left:3rem}.mb-4{margin-bottom:1rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.ml-2{margin-left:.5rem}.mt-1{margin-top:.25rem}.mt-3{margin-top:.75rem}.mr-8{margin-right:2rem}.mr-2{margin-right:.5rem}.mt-6{margin-top:1.5rem}.mb-1{margin-bottom:.25rem}.mt-5{margin-top:1.25rem}.mb-12{margin-bottom:3rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-4{height:1rem}.h-10{height:2.5rem}.h-auto{height:auto}.h-screen{height:100vh}.h-24{height:6rem}.h-6{height:1.5rem}.h-5{height:1.25rem}.h-72{height:18rem}.max-h-\\[calc\\(100vh-6rem\\)\\]{max-height:calc(100vh - 6rem)}.max-h-\\[8rem\\]{max-height:8rem}.w-full{width:100%}.w-20{width:5rem}.w-4{width:1rem}.w-10{width:2.5rem}.w-auto{width:auto}.w-6{width:1.5rem}.w-5{width:1.25rem}.w-32{width:8rem}.min-w-max{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.max-w-7xl{max-width:80rem}.max-w-6xl{max-width:72rem}.max-w-0{max-width:0}.max-w-md{max-width:28rem}.max-w-5xl{max-width:64rem}.max-w-3xl{max-width:48rem}.shrink-0{flex-shrink:0}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.resize{resize:both}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.-space-y-px>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(-1px*var(--tw-space-y-reverse));margin-top:calc(-1px*(1 - var(--tw-space-y-reverse)))}.whitespace-nowrap{white-space:nowrap}.rounded-none{border-radius:0}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-xl{border-radius:.75rem}.rounded-lg{border-radius:.5rem}.rounded-2xl{border-radius:1rem}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.rounded-b-md{border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[3px\\]{border-width:3px}.border-t{border-top-width:1px}.border-b-2{border-bottom-width:2px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-900{--tw-border-opacity:1;border-color:rgb(17 24 39/var(--tw-border-opacity))}.border-current{border-color:currentColor}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.border-yellow-400{--tw-border-opacity:1;border-color:rgb(250 204 21/var(--tw-border-opacity))}.border-red-400{--tw-border-opacity:1;border-color:rgb(248 113 113/var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.border-t-transparent{border-top-color:transparent}.border-opacity-30{--tw-border-opacity:0.3}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-yellow-200{--tw-bg-opacity:1;background-color:rgb(254 240 138/var(--tw-bg-opacity))}.bg-red-200{--tw-bg-opacity:1;background-color:rgb(254 202 202/var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-40{--tw-bg-opacity:0.4}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-white{--tw-gradient-from:#fff;--tw-gradient-to:hsla(0,0%,100%,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-blue-200{--tw-gradient-to:#bfdbfe}.bg-clip-padding{background-clip:padding-box}.fill-current{fill:currentColor}.p-4{padding:1rem}.p-2{padding:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-9{padding-bottom:2.25rem;padding-top:2.25rem}.\\!py-0\\.5{padding-bottom:.125rem!important;padding-top:.125rem!important}.\\!py-0{padding-bottom:0!important;padding-top:0!important}.pt-3{padding-top:.75rem}.pb-2{padding-bottom:.5rem}.pt-2{padding-top:.5rem}.pl-3{padding-left:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-6xl{font-size:3.75rem;line-height:1}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.font-black{font-weight:900}.font-normal{font-weight:400}.font-extrabold{font-weight:800}.leading-3{line-height:.75rem}.leading-7{line-height:1.75rem}.leading-8{line-height:2rem}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.placeholder-gray-500:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.opacity-0{opacity:0}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-sm{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-lg{--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}*{scroll-margin:5rem}html{scroll-behavior:smooth}body{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}a{text-decoration:underline}h1,h2,h3,h4,h5,h6{font-family:Cabinet Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.icon{display:inline-flex;height:1.5rem;width:1.5rem}.icon.solid{fill:#64748b}.icon.stroke{stroke:#64748b}.cta{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity));border-color:rgb(226 232 240/var(--tw-border-opacity));border-radius:.5rem;border-width:1px;font-weight:600;padding:.375rem .5rem;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.cta:hover{--tw-translate-y:-0.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cta:focus{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.cta:active{--tw-translate-y:0.125rem;--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cta.w-icon{align-items:center;display:flex;gap:.5rem;padding-right:.75rem}.img-cont img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.article-tags{display:flex;gap:.5rem;padding-bottom:.5rem;padding-top:.5rem}.article-tags .tag{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity));border-radius:.375rem;color:rgb(51 65 85/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem;padding:.5rem;padding-bottom:.125rem!important;padding-top:.125rem!important;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.article-tags .tag:hover{--tw-translate-y:-0.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.page-heading{--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity));padding:3rem}.page-heading>.wrapper,.page-section{margin:auto;max-width:48rem}.page-section{padding:2rem 1rem}.article-list{display:flex;flex-direction:column;gap:1.5rem}.article-item{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity));border-top-width:1px;padding-top:1.5rem}.article-item:first-of-type{border-style:none}.article-item a{-webkit-text-decoration-line:none;text-decoration-line:none}.article-item>*>.wrapper{align-items:flex-start;display:flex;gap:1rem}.hover\\:scale-110:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-gray-800:hover{--tw-border-opacity:1;border-color:rgb(31 41 55/var(--tw-border-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.hover\\:bg-blue-900:hover{--tw-bg-opacity:1;background-color:rgb(30 58 138/var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.focus\\:z-10:focus{z-index:10}.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgb(99 102 241/var(--tw-border-opacity))}.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-gray-400:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(156 163 175/var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.focus\\:ring-gray-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(107 114 128/var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.group:hover .group-hover\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity))}.dark\\:border-gray-900{--tw-border-opacity:1;border-color:rgb(17 24 39/var(--tw-border-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:bg-opacity-80{--tw-bg-opacity:0.8}.dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:shadow-slate-700\\/\\[\\.7\\]{--tw-shadow-color:rgba(51,65,85,.7);--tw-shadow:var(--tw-shadow-colored)}.dark\\:hover\\:border-gray-900:hover{--tw-border-opacity:1;border-color:rgb(17 24 39/var(--tw-border-opacity))}.dark\\:hover\\:bg-gray-900:hover{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.dark\\:focus\\:ring-gray-900:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(17 24 39/var(--tw-ring-opacity))}.dark\\:focus\\:ring-offset-gray-800:focus{--tw-ring-offset-color:#1f2937}}@media (min-width:640px){.sm\\:inline{display:inline}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:768px){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:col-span-6{grid-column:span 6/span 6}.md\\:col-start-1{grid-column-start:1}.md\\:row-start-1{grid-row-start:1}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:w-1\\/2{width:50%}.md\\:flex-1{flex:1 1 0%}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:p-5{padding:1.25rem}}@media (min-width:1024px){.lg\\:mt-0{margin-top:0}.lg\\:flex{display:flex}.lg\\:w-0{width:0}.lg\\:flex-shrink-0{flex-shrink:0}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:items-center{align-items:center}.lg\\:justify-between{justify-content:space-between}.lg\\:py-16{padding-bottom:4rem;padding-top:4rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// --------------------
const $id_d89cfd50 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/plugin.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// --------------------
const $id_50656c08 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  InfoBox: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/content/InfoBox.vue' /* webpackChunkName: "components/info-box" */).then(c => c.default || c)),
  ContentDoc: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs' /* webpackChunkName: "components/content-doc" */).then(c => c.default || c)),
  ContentList: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs' /* webpackChunkName: "components/content-list" */).then(c => c.default || c)),
  ContentNavigation: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs' /* webpackChunkName: "components/content-navigation" */).then(c => c.default || c)),
  ContentQuery: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs' /* webpackChunkName: "components/content-query" */).then(c => c.default || c)),
  ContentRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs' /* webpackChunkName: "components/content-renderer" */).then(c => c.default || c)),
  Markdown: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs' /* webpackChunkName: "components/markdown" */).then(c => c.default || c)),
  MarkdownRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs' /* webpackChunkName: "components/markdown-renderer" */).then(c => c.default || c)),
  ProseA: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue' /* webpackChunkName: "components/prose-a" */).then(c => c.default || c)),
  ProseBlockquote: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue' /* webpackChunkName: "components/prose-blockquote" */).then(c => c.default || c)),
  ProseCode: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue' /* webpackChunkName: "components/prose-code" */).then(c => c.default || c)),
  ProseCodeInline: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue' /* webpackChunkName: "components/prose-code-inline" */).then(c => c.default || c)),
  ProseEm: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue' /* webpackChunkName: "components/prose-em" */).then(c => c.default || c)),
  ProseH1: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue' /* webpackChunkName: "components/prose-h1" */).then(c => c.default || c)),
  ProseH2: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue' /* webpackChunkName: "components/prose-h2" */).then(c => c.default || c)),
  ProseH3: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue' /* webpackChunkName: "components/prose-h3" */).then(c => c.default || c)),
  ProseH4: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue' /* webpackChunkName: "components/prose-h4" */).then(c => c.default || c)),
  ProseH5: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue' /* webpackChunkName: "components/prose-h5" */).then(c => c.default || c)),
  ProseH6: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue' /* webpackChunkName: "components/prose-h6" */).then(c => c.default || c)),
  ProseHr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue' /* webpackChunkName: "components/prose-hr" */).then(c => c.default || c)),
  ProseImg: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue' /* webpackChunkName: "components/prose-img" */).then(c => c.default || c)),
  ProseLi: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue' /* webpackChunkName: "components/prose-li" */).then(c => c.default || c)),
  ProseOl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue' /* webpackChunkName: "components/prose-ol" */).then(c => c.default || c)),
  ProseP: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue' /* webpackChunkName: "components/prose-p" */).then(c => c.default || c)),
  ProseStrong: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue' /* webpackChunkName: "components/prose-strong" */).then(c => c.default || c)),
  ProseTable: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue' /* webpackChunkName: "components/prose-table" */).then(c => c.default || c)),
  ProseTbody: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue' /* webpackChunkName: "components/prose-tbody" */).then(c => c.default || c)),
  ProseTd: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue' /* webpackChunkName: "components/prose-td" */).then(c => c.default || c)),
  ProseTh: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue' /* webpackChunkName: "components/prose-th" */).then(c => c.default || c)),
  ProseThead: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue' /* webpackChunkName: "components/prose-thead" */).then(c => c.default || c)),
  ProseTr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue' /* webpackChunkName: "components/prose-tr" */).then(c => c.default || c)),
  ProseUl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue' /* webpackChunkName: "components/prose-ul" */).then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/content/InfoBox.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@heroicons/vue/solid/index.js ($id_a0bb35af)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/content/InfoBox.vue?vue&type=style&index=0&scoped=true&lang.css ($id_003dffd4)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e10e5808 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@heroicons/vue/solid/index.js");


// define props in <script>

const _sfc_main = {
  __name: 'InfoBox',
  props: ["type"],
  setup(__props, { expose }) {
  expose();

const props = __props

// import icons from HeroIcons


const __returned__ = { props, InformationCircleIcon: __vite_ssr_import_1__.InformationCircleIcon, ExclamationIcon: __vite_ssr_import_1__.ExclamationIcon, BanIcon: __vite_ssr_import_1__.BanIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Markdown = __vite_ssr_import_0__.default

  _push(`<!--[--><!-- Access \`type\` prop in Dynamic class  --><div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: ["info-box not-prose", [$props.type]]
  }, _attrs))} data-v-399a029c><!-- Conditionally render icons based on prop -->`)
  if ($props.type == 'warning') {
    _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ExclamationIcon"], { class: "icon solid" }, null, _parent))
  } else if ($props.type == 'error') {
    _push(__vite_ssr_import_3__.ssrRenderComponent($setup["BanIcon"], { class: "icon solid" }, null, _parent))
  } else {
    _push(__vite_ssr_import_3__.ssrRenderComponent($setup["InformationCircleIcon"], { class: "icon solid" }, null, _parent))
  }
  _push(`<details data-v-399a029c><summary data-v-399a029c><!-- Unamed Slot to render component content -->`)
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</summary><div class="details pt-2" data-v-399a029c><!-- Named markdown component to render rich-text -->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Markdown, {
    use: _ctx.$slots.details,
    unwrap: "p"
  }, null, _parent))
  _push(`</div></details></div><!--]-->`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/content/InfoBox.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/content/InfoBox.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-399a029c"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/content/InfoBox.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs
// Parents: 
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// --------------------
const $id_f4cbbc2c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = __vite_ssr_import_0__.getCurrentInstance();
    const { between } = __vite_ssr_import_0__.useSlots();
    const tags = __vite_ssr_import_0__.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, between, tags, parent }) {
    try {
      const slot = typeof use === "string" ? parent?.slots[use] || parent?.parent?.slots[use] : use;
      if (!slot) {
        return __vite_ssr_import_0__.h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = __vite_ssr_import_0__.useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index) => index === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return __vite_ssr_import_0__.h("div");
    }
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useComment.ts ($id_662ffe6f)
// - /composables/useLike.ts ($id_6dd93210)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_8e1dca9a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/useComment.ts");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/composables/useLike.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.useMeta }});
const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.isVue3 }});
const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.defineNuxtLink }});
const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useTransitionState }});
const __vite_ssr_import_15__ = await __vite_ssr_import__("/composables/useComment.ts");

Object.defineProperty(__vite_ssr_exports__, "getPlayerComments", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.getPlayerComments }});
Object.defineProperty(__vite_ssr_exports__, "addComment", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.addComment }});
Object.defineProperty(__vite_ssr_exports__, "deleteComment", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.deleteComment }});
const __vite_ssr_import_16__ = await __vite_ssr_import__("/composables/useLike.ts");

Object.defineProperty(__vite_ssr_exports__, "getUserLikes", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.getUserLikes }});
Object.defineProperty(__vite_ssr_exports__, "addUserLike", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.addUserLike }});
Object.defineProperty(__vite_ssr_exports__, "removeUserLike", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.removeUserLike }});
const __vite_ssr_import_17__ = await __vite_ssr_import__("/composables/useAuth.ts");

Object.defineProperty(__vite_ssr_exports__, "useAuthCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.useAuthCookie }});
Object.defineProperty(__vite_ssr_exports__, "useUser", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.useUser }});
Object.defineProperty(__vite_ssr_exports__, "userLogout", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.userLogout }});
Object.defineProperty(__vite_ssr_exports__, "registerWithEmail", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.registerWithEmail }});
Object.defineProperty(__vite_ssr_exports__, "loginWithEmail", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.loginWithEmail }});
const __vite_ssr_import_18__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_18__.queryContent }});
const __vite_ssr_import_19__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_19__.withContentBase }});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_19__.useUnwrap }});
const __vite_ssr_import_20__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.fetchContentNavigation }});
const __vite_ssr_import_21__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_21__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /composables/useComment.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /components/Comments.vue ($id_04072223)
// Dependencies: 

// --------------------
const $id_662ffe6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
async function getPlayerComments(playerId) {
  const comment = await $fetch("/api/comment/getComments?playerId=" + playerId, { method: "GET" });
  return comment;
}
Object.defineProperty(__vite_ssr_exports__, "getPlayerComments", { enumerable: true, configurable: true, get(){ return getPlayerComments }});
async function addComment(data) {
  const comment = await $fetch("/api/comment/addComment", {
    method: "POST",
    body: {
      userId: data.userId,
      playerId: data.playerId,
      comment: data.comment
    }
  });
  return comment;
}
Object.defineProperty(__vite_ssr_exports__, "addComment", { enumerable: true, configurable: true, get(){ return addComment }});
async function deleteComment(commentId) {
  const res = await $fetch("/api/comment/deleteComment?commentId=" + commentId, { method: "GET" });
  return res;
}
Object.defineProperty(__vite_ssr_exports__, "deleteComment", { enumerable: true, configurable: true, get(){ return deleteComment }});
;
}


// --------------------
// Request: /composables/useLike.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6dd93210 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

async function getUserLikes(playerId) {
  const like = await $fetch("/api/like/getLikes?playerId=" + playerId, { method: "GET" });
  return like;
}
Object.defineProperty(__vite_ssr_exports__, "getUserLikes", { enumerable: true, configurable: true, get(){ return getUserLikes }});
async function addUserLike(playerId) {
  const user = __vite_ssr_import_0__.useState("user");
  const like = await $fetch("/api/like/addLike", { method: "POST", body: { userId: user.value.id, playerId } });
  return like;
}
Object.defineProperty(__vite_ssr_exports__, "addUserLike", { enumerable: true, configurable: true, get(){ return addUserLike }});
async function removeUserLike(likeId) {
  const res = await $fetch("/api/like/deleteLike?likeId=" + likeId, { method: "GET" });
  return res;
}
Object.defineProperty(__vite_ssr_exports__, "removeUserLike", { enumerable: true, configurable: true, get(){ return removeUserLike }});
;
}


// --------------------
// Request: /composables/useAuth.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /middleware/auth.ts ($id_7b92aa86)
// - /middleware/guest.ts ($id_c862a572)
// - /components/User.vue ($id_ce2e00d8)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ba05bb26 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useAuthCookie = () => __vite_ssr_import_0__.useCookie("auth_token");
Object.defineProperty(__vite_ssr_exports__, "useAuthCookie", { enumerable: true, configurable: true, get(){ return useAuthCookie }});
async function useUser() {
  const authCookie = useAuthCookie().value;
  const user = __vite_ssr_import_1__.useState("user");
  if (authCookie && !user.value) {
    const { data } = await __vite_ssr_import_0__.useFetch(`/api/auth/getByAuthToken`, {
      headers: __vite_ssr_import_0__.useRequestHeaders(["cookie"])
    });
    user.value = data.value;
  }
  return user.value;
}
Object.defineProperty(__vite_ssr_exports__, "useUser", { enumerable: true, configurable: true, get(){ return useUser }});
async function userLogout() {
  await __vite_ssr_import_0__.useFetch("/api/auth/logout");
  __vite_ssr_import_1__.useState("user").value = null;
  await __vite_ssr_import_1__.useRouter().push("/");
}
Object.defineProperty(__vite_ssr_exports__, "userLogout", { enumerable: true, configurable: true, get(){ return userLogout }});
async function registerWithEmail(username, name, email, password) {
  const { data, error } = await __vite_ssr_import_0__.useFetch("/api/auth/register", {
    method: "POST",
    body: { data: { username, name, email, password } }
  });
  if (error.value) {
    const errorData = error.value;
    const errors = errorData.data.data;
    const res = JSON.parse(errors);
    const errorMap = new Map(Object.entries(res));
    return { hasErrors: true, errors: errorMap };
  }
  if (data) {
    __vite_ssr_import_1__.useState("user").value = data;
    await __vite_ssr_import_1__.useRouter().push("/blog");
  }
}
Object.defineProperty(__vite_ssr_exports__, "registerWithEmail", { enumerable: true, configurable: true, get(){ return registerWithEmail }});
async function loginWithEmail(email, password) {
  const user = await $fetch("/api/auth/login", { method: "POST", body: { email, password } });
  __vite_ssr_import_1__.useState("user").value = user;
  await __vite_ssr_import_1__.useRouter().push("/blog");
}
Object.defineProperty(__vite_ssr_exports__, "loginWithEmail", { enumerable: true, configurable: true, get(){ return loginWithEmail }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/query.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_47535763 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/query.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const createQueryFetch = (path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: __vite_ssr_import_0__.withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  const params = query.params();
  const apiPath = __vite_ssr_import_5__.withContentBase(true ? "/query" : `/query/${__vite_ssr_import_1__.hash(params)}`);
  if (!true && true) {
    __vite_ssr_import_2__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_4__.jsonStringify(params),
      previewToken: __vite_ssr_import_2__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "createQueryFetch", { enumerable: true, configurable: true, get(){ return createQueryFetch }});
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    return __vite_ssr_import_3__.createQuery(createQueryFetch(__vite_ssr_import_0__.withLeadingSlash(__vite_ssr_import_0__.joinURL(query, ...pathParts))));
  }
  return __vite_ssr_import_3__.createQuery(createQueryFetch(), query);
}
Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return queryContent }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/query.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs ($id_e943acfb)
// --------------------
const $id_7961d5dc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs");

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = __vite_ssr_import_0__.ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", __vite_ssr_import_0__.ensureArray),
    without: $set("without", __vite_ssr_import_0__.ensureArray),
    where: $set("where", (q) => [...__vite_ssr_import_0__.ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...__vite_ssr_import_0__.ensureArray(queryParams.sort), ...__vite_ssr_import_0__.ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
Object.defineProperty(__vite_ssr_exports__, "createQuery", { enumerable: true, configurable: true, get(){ return createQuery }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// Dependencies: 

// --------------------
const $id_e943acfb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const pick = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "pick", { enumerable: true, configurable: true, get(){ return pick }});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "omit", { enumerable: true, configurable: true, get(){ return omit }});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
Object.defineProperty(__vite_ssr_exports__, "apply", { enumerable: true, configurable: true, get(){ return apply }});
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
Object.defineProperty(__vite_ssr_exports__, "detectProperties", { enumerable: true, configurable: true, get(){ return detectProperties }});
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withoutKeys", { enumerable: true, configurable: true, get(){ return withoutKeys }});
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return withKeys }});
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
Object.defineProperty(__vite_ssr_exports__, "sortList", { enumerable: true, configurable: true, get(){ return sortList }});
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
Object.defineProperty(__vite_ssr_exports__, "assertArray", { enumerable: true, configurable: true, get(){ return assertArray }});
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
Object.defineProperty(__vite_ssr_exports__, "ensureArray", { enumerable: true, configurable: true, get(){ return ensureArray }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/utils/json.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 

// --------------------
const $id_45454526 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
Object.defineProperty(__vite_ssr_exports__, "jsonStringify", { enumerable: true, configurable: true, get(){ return jsonStringify }});
function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
Object.defineProperty(__vite_ssr_exports__, "jsonParse", { enumerable: true, configurable: true, get(){ return jsonParse }});
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs ($id_eacbabc5)
// --------------------
const $id_3db3e041 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs");

const withContentBase = (url) => __vite_ssr_import_0__.withBase(url, "/api/" + __vite_ssr_import_1__.useRuntimeConfig().public.content.base);
Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return withContentBase }});
const useUnwrap = () => ({
  unwrap: __vite_ssr_import_2__.unwrap,
  flatUnwrap: __vite_ssr_import_2__.flatUnwrap
});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return useUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// Dependencies: 

// --------------------
const $id_eacbabc5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
Object.defineProperty(__vite_ssr_exports__, "TEXT_TAGS", { enumerable: true, configurable: true, get(){ return TEXT_TAGS }});
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
Object.defineProperty(__vite_ssr_exports__, "isTag", { enumerable: true, configurable: true, get(){ return isTag }});
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
Object.defineProperty(__vite_ssr_exports__, "isText", { enumerable: true, configurable: true, get(){ return isText }});
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "nodeChildren", { enumerable: true, configurable: true, get(){ return nodeChildren }});
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
Object.defineProperty(__vite_ssr_exports__, "nodeTextContent", { enumerable: true, configurable: true, get(){ return nodeTextContent }});
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
Object.defineProperty(__vite_ssr_exports__, "unwrap", { enumerable: true, configurable: true, get(){ return unwrap }});
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
Object.defineProperty(__vite_ssr_exports__, "flatUnwrap", { enumerable: true, configurable: true, get(){ return flatUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_e209d000 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const fetchContentNavigation = (queryBuilder) => {
  let params = queryBuilder;
  if (typeof params?.params === "function") {
    params = params.params();
  }
  const apiPath = __vite_ssr_import_3__.withContentBase(params ? `/navigation/${__vite_ssr_import_0__.hash(params)}` : "/navigation");
  if (!true && true) {
    __vite_ssr_import_1__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_2__.jsonStringify(params || {}),
      previewToken: __vite_ssr_import_1__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return fetchContentNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/login.vue ($id_b0922173)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@heroicons/vue/solid/index.js
// Parents: 
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /components/Tags.vue ($id_3a31b237)
// Dependencies: 

// --------------------
const $id_a0bb35af = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@heroicons/vue/solid/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@heroicons/vue/solid/index.js\".")
  })


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /components/Toc.vue ($id_5cbfb66a)
// - /components/Form.vue ($id_ce31a1a0)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /components/PlayerCard.vue ($id_89df6488)
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /components/Comments.vue ($id_04072223)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// - /pages/teams/index.vue ($id_9644598b)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/User.vue ($id_ce2e00d8)
// - /components/SiteHeader.vue ($id_01340d67)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /components/content/InfoBox.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/content/InfoBox.vue ($id_e10e5808)
// Dependencies: 

// --------------------
const $id_003dffd4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".info-box[data-v-399a029c]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:flex-start;background-color:rgb(241 245 249/var(--tw-bg-opacity));border-color:rgb(226 232 240/var(--tw-border-opacity));border-radius:.5rem;border-width:1px;color:rgb(100 116 139/var(--tw-text-opacity));gap:.5rem;padding:1rem}.info-box[data-v-399a029c],details summary[data-v-399a029c]{display:flex}details summary[data-v-399a029c]{cursor:pointer;font-weight:600;line-height:1.25}details .details[data-v-399a029c]{font-size:.875rem;line-height:1.25rem}.info-box .icon[data-v-399a029c]{flex-shrink:0}.info-box.warning[data-v-399a029c]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(254 240 138/var(--tw-bg-opacity));border-color:rgb(250 204 21/var(--tw-border-opacity));color:rgb(202 138 4/var(--tw-text-opacity))}.info-box.warning .icon.solid[data-v-399a029c]{fill:#ca8a04}.info-box.error[data-v-399a029c]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(254 202 202/var(--tw-bg-opacity));border-color:rgb(248 113 113/var(--tw-border-opacity));color:rgb(220 38 38/var(--tw-text-opacity))}.info-box.error .icon.solid[data-v-399a029c]{fill:#dc2626}";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/content/InfoBox.vue ($id_e10e5808)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /components/Toc.vue ($id_5cbfb66a)
// - /components/Form.vue ($id_ce31a1a0)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /components/Tags.vue ($id_3a31b237)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /components/PlayerCard.vue ($id_89df6488)
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /components/Comments.vue ($id_04072223)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// - /pages/teams/index.vue ($id_9644598b)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/User.vue ($id_ce2e00d8)
// - /components/SiteHeader.vue ($id_01340d67)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// --------------------
const $id_12ce52f3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => __vite_ssr_import_3__.useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { tag, excerpt, path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    const addHead = (doc) => {
      if (path !== __vite_ssr_import_3__.useRoute().path) {
        return;
      }
      const head = Object.assign({}, doc.head);
      head.title = head.title || doc.title;
      head.meta = head.meta || [];
      const description = head.description || doc.description;
      if (description && head.meta.filter((m) => m.name === "description").length === 0) {
        head.meta.push({
          name: "description",
          content: description
        });
      }
      if (head.image && head.meta.filter((m) => m.property === "og:image").length === 0) {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      if (false) {
        __vite_ssr_import_0__.nextTick(() => __vite_ssr_import_3__.useHead(head));
      } else {
        __vite_ssr_import_3__.useHead(head);
      }
    };
    return __vite_ssr_import_0__.h(__vite_ssr_import_2__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => {
        addHead(data);
        return slots.default({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        addHead(data);
        return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => slots?.empty ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => slots?.empty?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>."),
      "not-found": (bindings) => slots?.["not-found"]?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.")
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// --------------------
const $id_8f3d0953 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    __vite_ssr_import_0__.watch(() => props.excerpt, (newExcerpt) => {
      if (newExcerpt && !props.value?.excerpt) {
        console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && value?._type === "markdown" && value?.body?.children?.length) {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/scule/dist/index.mjs ($id_ff332d11)
// - /node_modules/property-information/index.js ($id_882dd793)
// - /node_modules/html-tags/index.js ($id_4503b399)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_4c793316 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/scule/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/property-information/index.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/html-tags/index.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = __vite_ssr_import_5__.useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = __vite_ssr_import_0__.toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...value?.tags || {}
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, __vite_ssr_import_0__.h, meta));
    return __vite_ssr_import_0__.h(component, {
      ...contentProps,
      ...meta.component?.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  const originalTag = node.tag;
  const renderTag = typeof node.props?.__ignoreMap === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(__vite_ssr_import_0__.Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = __vite_ssr_import_3__.find(__vite_ssr_import_3__.html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!__vite_ssr_import_4__.default.includes(component)) {
    const componentFn = __vite_ssr_import_0__.resolveComponent(__vite_ssr_import_2__.pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? __vite_ssr_import_1__.default(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
;
}


// --------------------
// Request: /node_modules/scule/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_ff332d11 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/scule/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/scule/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/property-information/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_882dd793 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/property-information/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/property-information/index.js\".")
  })


// --------------------
// Request: /node_modules/html-tags/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_4503b399 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/html-tags/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/html-tags/index.js\".")
  })


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// --------------------
const $id_3f801a38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = __vite_ssr_import_1__.toRefs(props);
    const isPartial = __vite_ssr_import_2__.computed(() => path.value.includes("/_"));
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-query-${__vite_ssr_import_0__.hash(props)}`, () => {
      let queryBuilder;
      if (path.value) {
        queryBuilder = __vite_ssr_import_2__.queryContent(path.value);
      } else {
        queryBuilder = __vite_ssr_import_2__.queryContent();
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find.value === "one") {
        return queryBuilder.findOne();
      }
      if (find.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_1__.useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data?._type === "markdown" && !data?.body?.children.length) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots?.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => __vite_ssr_import_1__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// --------------------
const $id_9fab5abb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => slots?.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => slots?.empty ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => slots?.["not-found"] ? slots?.["not-found"]?.(bindings) : ({ data }) => emptyNode("not-found", data)
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// --------------------
const $id_d2da4ccd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = __vite_ssr_import_0__.toRefs(props);
    const queryBuilder = __vite_ssr_import_0__.computed(() => {
      if (typeof query.value?.params === "function") {
        return query.value.params();
      }
      return query.value;
    });
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-navigation-${__vite_ssr_import_1__.hash(queryBuilder.value)}`, () => __vite_ssr_import_2__.fetchContentNavigation(queryBuilder.value));
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if (slots?.empty && (!data || !data?.length)) {
      return slots?.empty?.({ query, ...this.$attrs }) || emptyNode("empty", { query, data });
    }
    return slots?.default ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_558bf79f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseA",
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, __vite_ssr_import_2__.mergeProps({ href: $props.href }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_01e2b479 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</blockquote>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css ($id_d7e7fe44)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_19429b58 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// Dependencies: 

// --------------------
const $id_d7e7fe44 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "pre code .line{display:block;min-height:1rem}";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fab9e310 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<code${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</code>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_840411f2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<em${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</em>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b479ada6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9c1df7ff = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH2",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h2${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h2>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f86082f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH3",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h3${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h3>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7f627a67 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH4",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h4${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h4>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_caec80eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h5${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h5>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_26303ae9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h6${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h6>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6f4fac0c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f72b4351 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "ProseImg",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    src: $props.src,
    alt: $props.alt,
    width: $props.width,
    height: $props.height
  }, _attrs))}>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1b78ec5d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</li>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2e24a6f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ol${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ol>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0990778f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</p>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6d4c23c7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<strong${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</strong>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10f5aef2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<table${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</table>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_faffa2d8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tbody>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b51a8b09 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<td${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</td>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_07608f57 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<th${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</th>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_17b6f147 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<thead${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</thead>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_16f58501 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tr>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs ($id_50656c08)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7728c86d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ul>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/meta.config.mjs ($id_228b9c10)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_228b9c10 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico?v2"}],"style":[],"script":[],"title":"rosterprops"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/router.options.mjs ($id_1ce20c25)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs ($id_c4b3f06e)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// - /pages/teams/index.vue ($id_9644598b)
// --------------------
const $id_8b52cc6c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/blog/[...slug].vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/blog/index.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/blog/tags/[slug].vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/login.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/register.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/teams/[id]/index.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/teams/[id]/player/[player].vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/teams/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "blog-slug",
    path: "/blog/:slug(.*)*",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/[...slug].vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/blog/[...slug].vue')
  },
  {
    name: "blog",
    path: "/blog",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/blog/index.vue')
  },
  {
    name: "blog-tags-slug",
    path: "/blog/tags/:slug",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/tags/[slug].vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/blog/tags/[slug].vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "login",
    path: "/login",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/login.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/login.vue')
  },
  {
    name: "register",
    path: "/register",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/register.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/register.vue')
  },
  {
    name: "teams-id",
    path: "/teams/:id",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/index.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/teams/[id]/index.vue')
  },
  {
    name: "teams-id-player-player",
    path: "/teams/:id/player/:player",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/player/[player].vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/teams/[id]/player/[player].vue')
  },
  {
    name: "teams",
    path: "/teams",
    file: "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/index.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/teams/index.vue')
  }
];
}


// --------------------
// Request: /pages/blog/[...slug].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Toc.vue ($id_5cbfb66a)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /components/Form.vue ($id_ce31a1a0)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css ($id_f86f35dd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_23ff3f9c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Toc.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Form.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/PrevNext.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  __name: '[...slug]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { path } = __vite_ssr_import_5__.useRoute();
const { data } = (
  ([__temp,__restore] = __vite_ssr_import_8__.withAsyncContext(async () => __vite_ssr_import_5__.useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = __vite_ssr_import_6__.queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = __vite_ssr_import_6__.queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
}))),
  __temp = await __temp,
  __restore(),
  __temp
);

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
__vite_ssr_import_7__.useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.article.img}`,
    },
  ],
});

const __returned__ = { path, data, prev, next }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_9__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_9__.resolveComponent("Script")
  const _component_Toc = __vite_ssr_import_0__.default
  const _component_ContentRenderer = __vite_ssr_import_1__.default
  const _component_MarkdownRenderer = __vite_ssr_import_2__.default
  const _component_Form = __vite_ssr_import_3__.default
  const _component_PrevNext = __vite_ssr_import_4__.default

  _push(`<main${__vite_ssr_import_10__.ssrRenderAttrs(__vite_ssr_import_9__.mergeProps({
    id: "main",
    class: "article-main"
  }, _attrs))} data-v-04f43c4b>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_9__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  if ($setup.data.article) {
    _push(`<header class="article-header" data-v-04f43c4b><div class="img-cont h-72 mb-12" data-v-04f43c4b><img${
      __vite_ssr_import_10__.ssrRenderAttr("src", `/${$setup.data.article.img}`)
    }${
      __vite_ssr_import_10__.ssrRenderAttr("alt", $setup.data.article.title)
    } class="rounded-2xl" data-v-04f43c4b></div><h1 class="heading" data-v-04f43c4b>${
      __vite_ssr_import_10__.ssrInterpolate($setup.data.article.title)
    }</h1><p class="supporting" data-v-04f43c4b>${
      __vite_ssr_import_10__.ssrInterpolate($setup.data.article.description)
    }</p><ul class="article-tags" data-v-04f43c4b><!--[-->`)
    __vite_ssr_import_10__.ssrRenderList($setup.data.article.tags, (tag, n) => {
      _push(`<li class="tag" data-v-04f43c4b>${__vite_ssr_import_10__.ssrInterpolate(tag)}</li>`)
    })
    _push(`<!--]--></ul></header>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<hr data-v-04f43c4b><section class="article-section" data-v-04f43c4b><aside class="aside" data-v-04f43c4b><!-- Toc Component -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Toc, {
    links: $setup.data.article.body.toc.links
  }, null, _parent))
  _push(`</aside><article class="article" data-v-04f43c4b><!-- render document coming from query -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_ContentRenderer, {
    value: $setup.data.article
  }, {
    empty: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p data-v-04f43c4b${_scopeId}>No content found.</p>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("p", null, "No content found.")
        ]
      }
    }),
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_MarkdownRenderer, {
          value: $setup.data.article
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_9__.createVNode(_component_MarkdownRenderer, {
            value: $setup.data.article
          }, null, 8 /* PROPS */, ["value"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</article></section>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Form, null, null, _parent))
  _push(`<!-- PrevNext Component -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_PrevNext, {
    prev: $setup.prev,
    next: $setup.next
  }, null, _parent))
  _push(`</main>`)
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-04f43c4b"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/[...slug].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Toc.vue
// Parents: 
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Toc.vue?vue&type=style&index=0&scoped=true&lang.css ($id_c6ac83bd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5cbfb66a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'Toc',
  props: ["links"],
  setup(__props, { expose }) {
  expose();

// define links prop


// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  console.log({ _links });

  return _links;
};

const __returned__ = { flattenLinks }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "toc" }, _attrs))} data-v-7065a786><header class="toc-header" data-v-7065a786><h3 class="text-xl font-bold" data-v-7065a786>Table of contents</h3></header><ul class="toc-links" data-v-7065a786><!-- render each link with depth class --><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($setup.flattenLinks($props.links), (link) => {
    _push(`<li class="${
      __vite_ssr_import_1__.ssrRenderClass(`toc-link _${link.depth}`)
    }" data-v-7065a786><a${
      __vite_ssr_import_1__.ssrRenderAttr("href", `#${link.id}`)
    } data-v-7065a786>${
      __vite_ssr_import_1__.ssrInterpolate(link.text)
    }</a></li>`)
  })
  _push(`<!--]--></ul></nav>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Toc.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Toc.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-7065a786"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/Toc.vue"]]);
}


// --------------------
// Request: /components/Toc.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Toc.vue ($id_5cbfb66a)
// Dependencies: 

// --------------------
const $id_c6ac83bd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".toc[data-v-7065a786]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity));border-color:rgb(226 232 240/var(--tw-border-opacity));border-radius:.5rem;border-width:1px;max-height:calc(100vh - 6rem);overflow:auto;padding:1rem}.toc-header[data-v-7065a786]{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(226 232 240/var(--tw-border-opacity));margin-bottom:.5rem;padding-bottom:.5rem}.toc-links[data-v-7065a786]{display:flex;flex-direction:column;gap:.5rem;padding-left:.5rem;padding-right:.5rem}.toc-link[data-v-7065a786]{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.toc-link._3[data-v-7065a786]{padding-left:.75rem}.toc-link._4[data-v-7065a786]{padding-left:1.5rem}.toc-link._undefined[data-v-7065a786]{padding-left:2rem}";
}


// --------------------
// Request: /components/Form.vue
// Parents: 
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ce31a1a0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const _sfc_main = {
  __name: 'Form',
  setup(__props, { expose }) {
  expose();

const DBResponse = __vite_ssr_import_0__.ref([]);

const router = __vite_ssr_import_1__.useRouter();
const userEmail = __vite_ssr_import_0__.ref("");

async function postToDB() {
  const result = await fetch(`/api/subscribe?email=${userEmail.value}`);
  const data = await result.json();
  DBResponse.value = data;
  email.value = "";
}

const __returned__ = { DBResponse, router, userEmail, postToDB }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "bg-gray-100 mb-4 mt-4" }, _attrs))
  }><div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"><h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"><span class="block">Want exclusive content?</span><span class="block text-blue-600">Sign up for our free newsletter</span></h2><div class="mt-8 flex lg:mt-0 lg:flex-shrink-0"><form class="ml-2 inline-flex rounded-md shadow"><label for="email" class="hidden leading-7 text-sm text-gray-600">email</label><input type="email" id="email"${
    __vite_ssr_import_3__.ssrRenderAttr("value", $setup.userEmail)
  } name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"><button class="inline-flex ml-2 items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-900"> Subscribe </button></form></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Form.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/Form.vue"]]);
}


// --------------------
// Request: /components/PrevNext.vue
// Parents: 
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/@heroicons/vue/solid/index.js ($id_a0bb35af)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/PrevNext.vue?vue&type=style&index=0&scoped=true&lang.css ($id_4be36c1f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fca51e5c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@heroicons/vue/solid/index.js");


// define prev and next props

const _sfc_main = {
  __name: 'PrevNext',
  props: ["prev", "next"],
  setup(__props, { expose }) {
  expose();



const __returned__ = { ArrowLeftIcon: __vite_ssr_import_1__.ArrowLeftIcon, ArrowRightIcon: __vite_ssr_import_1__.ArrowRightIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<ul${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "prev-next-cont" }, _attrs))} data-v-66b24521><li class="link-item prev" data-v-66b24521>`)
  if ($props.prev) {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
      to: $props.prev._path
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ArrowLeftIcon"], { class: "icon stroke" }, null, _parent, _scopeId))
          _push(`<span data-v-66b24521${
            _scopeId
          }>${
            __vite_ssr_import_3__.ssrInterpolate($props.prev.title)
          }</span>`)
        } else {
          return [
            __vite_ssr_import_2__.createVNode($setup["ArrowLeftIcon"], { class: "icon stroke" }),
            __vite_ssr_import_2__.createVNode("span", null, __vite_ssr_import_2__.toDisplayString($props.prev.title), 1 /* TEXT */)
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</li><li class="link-item next" data-v-66b24521>`)
  if ($props.next) {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
      to: $props.next._path
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<span data-v-66b24521${
            _scopeId
          }>${
            __vite_ssr_import_3__.ssrInterpolate($props.next.title)
          }</span>`)
          _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ArrowRightIcon"], { class: "icon stroke" }, null, _parent, _scopeId))
        } else {
          return [
            __vite_ssr_import_2__.createVNode("span", null, __vite_ssr_import_2__.toDisplayString($props.next.title), 1 /* TEXT */),
            __vite_ssr_import_2__.createVNode($setup["ArrowRightIcon"], { class: "icon stroke" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</li></ul>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/PrevNext.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PrevNext.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-66b24521"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/PrevNext.vue"]]);
}


// --------------------
// Request: /components/PrevNext.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/PrevNext.vue ($id_fca51e5c)
// Dependencies: 

// --------------------
const $id_4be36c1f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".prev-next-cont[data-v-66b24521]{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity));border-radius:.5rem;border-width:1px;display:flex;gap:1rem;justify-content:space-between;padding:1rem}.link-item a[data-v-66b24521]{display:flex;gap:.5rem}";
}


// --------------------
// Request: /pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/blog/[...slug].vue?macro=true ($id_23ff3f9c)
// - /pages/blog/[...slug].vue ($id_b8f35669)
// Dependencies: 

// --------------------
const $id_f86f35dd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".article-main[data-v-04f43c4b]{margin:auto;max-width:64rem;padding:1rem}.article-header[data-v-04f43c4b]{padding:1rem 1rem 3rem}.article-header .heading[data-v-04f43c4b]{font-size:3rem;font-weight:800;line-height:1}.article-header .supporting[data-v-04f43c4b]{font-size:1.125rem;font-weight:500;line-height:1.75rem}.article-section[data-v-04f43c4b]{display:grid;grid-template-columns:repeat(8,minmax(0,1fr))}.aside[data-v-04f43c4b]{grid-column:1/-1;grid-row-start:1;padding-top:3.5rem;width:100%}@media (min-width:768px){.aside[data-v-04f43c4b]{grid-column:span 2/span 2}}.aside .toc[data-v-04f43c4b]{position:-webkit-sticky;position:sticky;top:5rem}.article[data-v-04f43c4b]{color:var(--tw-prose-body);max-width:65ch}.article[data-v-04f43c4b] :where([class~=lead]):not(:where([class~=not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-bottom:1.2em;margin-top:1.2em}.article[data-v-04f43c4b] :where(a):not(:where([class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.article[data-v-04f43c4b] :where(strong):not(:where([class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.article[data-v-04f43c4b] :where(ol):not(:where([class~=not-prose] *)){list-style-type:decimal;padding-left:1.625em}.article[data-v-04f43c4b] :where(ol[type=A]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.article[data-v-04f43c4b] :where(ol[type=a]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.article[data-v-04f43c4b] :where(ol[type=A s]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.article[data-v-04f43c4b] :where(ol[type=a s]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.article[data-v-04f43c4b] :where(ol[type=I]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.article[data-v-04f43c4b] :where(ol[type=i]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.article[data-v-04f43c4b] :where(ol[type=I s]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.article[data-v-04f43c4b] :where(ol[type=i s]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.article[data-v-04f43c4b] :where(ol[type=\"1\"]):not(:where([class~=not-prose] *)){list-style-type:decimal}.article[data-v-04f43c4b] :where(ul):not(:where([class~=not-prose] *)){list-style-type:disc;padding-left:1.625em}.article[data-v-04f43c4b] :where(ol>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.article[data-v-04f43c4b] :where(ul>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.article[data-v-04f43c4b] :where(hr):not(:where([class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-bottom:3em;margin-top:3em}.article[data-v-04f43c4b] :where(blockquote):not(:where([class~=not-prose] *)){border-left-color:var(--tw-prose-quote-borders);border-left-width:.25rem;color:var(--tw-prose-quotes);font-style:italic;font-weight:500;margin-bottom:1.6em;margin-top:1.6em;padding-left:1em;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"}.article[data-v-04f43c4b] :where(blockquote p:first-of-type):not(:where([class~=not-prose] *)):before{content:open-quote}.article[data-v-04f43c4b] :where(blockquote p:last-of-type):not(:where([class~=not-prose] *)):after{content:close-quote}.article[data-v-04f43c4b] :where(h1):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:2.25em;font-weight:800;line-height:1.1111111;margin-bottom:.8888889em;margin-top:0}.article[data-v-04f43c4b] :where(h1 strong):not(:where([class~=not-prose] *)){font-weight:900}.article[data-v-04f43c4b] :where(h2):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.5em;font-weight:700;line-height:1.3333333;margin-bottom:1em;margin-top:2em}.article[data-v-04f43c4b] :where(h2 strong):not(:where([class~=not-prose] *)){font-weight:800}.article[data-v-04f43c4b] :where(h3):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.25em;font-weight:600;line-height:1.6;margin-bottom:.6em;margin-top:1.6em}.article[data-v-04f43c4b] :where(h3 strong):not(:where([class~=not-prose] *)){font-weight:700}.article[data-v-04f43c4b] :where(h4):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;line-height:1.5;margin-bottom:.5em;margin-top:1.5em}.article[data-v-04f43c4b] :where(h4 strong):not(:where([class~=not-prose] *)){font-weight:700}.article[data-v-04f43c4b] :where(figure>*):not(:where([class~=not-prose] *)){margin-bottom:0;margin-top:0}.article[data-v-04f43c4b] :where(figcaption):not(:where([class~=not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.article[data-v-04f43c4b] :where(code):not(:where([class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.article[data-v-04f43c4b] :where(code):not(:where([class~=not-prose] *)):before{content:\"`\"}.article[data-v-04f43c4b] :where(code):not(:where([class~=not-prose] *)):after{content:\"`\"}.article[data-v-04f43c4b] :where(a code):not(:where([class~=not-prose] *)){color:var(--tw-prose-links)}.article[data-v-04f43c4b] :where(pre):not(:where([class~=not-prose] *)){background-color:var(--tw-prose-pre-bg);border-radius:.375rem;color:var(--tw-prose-pre-code);font-size:.875em;font-weight:400;line-height:1.7142857;margin-bottom:1.7142857em;margin-top:1.7142857em;overflow-x:auto;padding:.8571429em 1.1428571em}.article[data-v-04f43c4b] :where(pre code):not(:where([class~=not-prose] *)){background-color:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding:0}.article[data-v-04f43c4b] :where(pre code):not(:where([class~=not-prose] *)):before{content:none}.article[data-v-04f43c4b] :where(pre code):not(:where([class~=not-prose] *)):after{content:none}.article[data-v-04f43c4b] :where(table):not(:where([class~=not-prose] *)){font-size:.875em;line-height:1.7142857;margin-bottom:2em;margin-top:2em;table-layout:auto;text-align:left;width:100%}.article[data-v-04f43c4b] :where(thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-th-borders);border-bottom-width:1px}.article[data-v-04f43c4b] :where(thead th):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;padding-bottom:.5714286em;padding-left:.5714286em;padding-right:.5714286em;vertical-align:bottom}.article[data-v-04f43c4b] :where(tbody tr):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-td-borders);border-bottom-width:1px}.article[data-v-04f43c4b] :where(tbody tr:last-child):not(:where([class~=not-prose] *)){border-bottom-width:0}.article[data-v-04f43c4b] :where(tbody td):not(:where([class~=not-prose] *)){padding:.5714286em;vertical-align:baseline}.article[data-v-04f43c4b]{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgba(0,0,0,.5);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.article[data-v-04f43c4b] :where(p):not(:where([class~=not-prose] *)){margin-bottom:1.25em;margin-top:1.25em}.article[data-v-04f43c4b] :where(img):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.article[data-v-04f43c4b] :where(video):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.article[data-v-04f43c4b] :where(figure):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.article[data-v-04f43c4b] :where(h2 code):not(:where([class~=not-prose] *)){font-size:.875em}.article[data-v-04f43c4b] :where(h3 code):not(:where([class~=not-prose] *)){font-size:.9em}.article[data-v-04f43c4b] :where(li):not(:where([class~=not-prose] *)){margin-bottom:.5em;margin-top:.5em}.article[data-v-04f43c4b] :where(ol>li):not(:where([class~=not-prose] *)){padding-left:.375em}.article[data-v-04f43c4b] :where(ul>li):not(:where([class~=not-prose] *)){padding-left:.375em}.article[data-v-04f43c4b]>:where(ul>li p):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.article[data-v-04f43c4b]>:where(ul>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.article[data-v-04f43c4b]>:where(ul>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.article[data-v-04f43c4b]>:where(ol>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.article[data-v-04f43c4b]>:where(ol>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.article[data-v-04f43c4b] :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.article[data-v-04f43c4b] :where(hr+*):not(:where([class~=not-prose] *)){margin-top:0}.article[data-v-04f43c4b] :where(h2+*):not(:where([class~=not-prose] *)){margin-top:0}.article[data-v-04f43c4b] :where(h3+*):not(:where([class~=not-prose] *)){margin-top:0}.article[data-v-04f43c4b] :where(h4+*):not(:where([class~=not-prose] *)){margin-top:0}.article[data-v-04f43c4b] :where(thead th:first-child):not(:where([class~=not-prose] *)){padding-left:0}.article[data-v-04f43c4b] :where(thead th:last-child):not(:where([class~=not-prose] *)){padding-right:0}.article[data-v-04f43c4b] :where(tbody td:first-child):not(:where([class~=not-prose] *)){padding-left:0}.article[data-v-04f43c4b] :where(tbody td:last-child):not(:where([class~=not-prose] *)){padding-right:0}.article[data-v-04f43c4b]>:where(:first-child):not(:where([class~=not-prose] *)){margin-top:0}.article[data-v-04f43c4b]>:where(:last-child):not(:where([class~=not-prose] *)){margin-bottom:0}.article[data-v-04f43c4b]{grid-column:1/-1;margin:auto;max-width:48rem;padding:1rem;width:100%}@media (min-width:768px){.article[data-v-04f43c4b]{grid-column:span 6/span 6;grid-column-start:1;grid-row-start:1}}";
}


// --------------------
// Request: /pages/blog/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Tags.vue ($id_3a31b237)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_381d5fdd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Tags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_3__.definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = __vite_ssr_import_4__.useRoute();

const filter = __vite_ssr_import_5__.ref(tags?.split(","));

// set meta for page
__vite_ssr_import_6__.useHead({
  title: "All articles",
  meta: [{ name: "description", content: "All articles" }],
});

const __returned__ = { tags, filter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_7__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_7__.resolveComponent("Script")
  const _component_Tags = __vite_ssr_import_0__.default
  const _component_ContentList = __vite_ssr_import_1__.default
  const _component_NuxtLink = __vite_ssr_import_2__.default

  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_7__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles</h1><p class="font-medium text-lg">List of all articles</p></div></header><section class="page-section">`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Tags, null, null, _parent))
  _push(`<!-- Render list of all articles in ./content/blog using \`path\` --><!-- Provide only defined fieldsin the \`:query\` prop -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ContentList, {
    path: "/blog",
    query: {
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: $setup.filter,
            },
          },
          $sensitivity: 'base',
        }
  }, {
    default: __vite_ssr_import_7__.withCtx(({ list }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul class="article-list"${_scopeId}><!--[-->`)
        __vite_ssr_import_8__.ssrRenderList(list, (article) => {
          _push(`<li class="article-item"${_scopeId}>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
            to: article._path
          }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="wrapper"${
                  _scopeId
                }><div class="img-cont w-32 shrink-0"${
                  _scopeId
                }><img${
                  __vite_ssr_import_8__.ssrRenderAttr("src", `/${article.img}`)
                }${
                  __vite_ssr_import_8__.ssrRenderAttr("alt", article.title)
                } class="rounded-lg max-h-[8rem]"${
                  _scopeId
                }></div><header${
                  _scopeId
                }><h1 class="text-2xl font-semibold"${
                  _scopeId
                }>${
                  __vite_ssr_import_8__.ssrInterpolate(article.title)
                }</h1><p${
                  _scopeId
                }>${
                  __vite_ssr_import_8__.ssrInterpolate(article.description)
                }</p><ul class="article-tags"${
                  _scopeId
                }><!--[-->`)
                __vite_ssr_import_8__.ssrRenderList(article.tags, (tag, n) => {
                  _push(`<li class="tag !py-0.5"${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(tag)
                  }</li>`)
                })
                _push(`<!--]--></ul></header></div>`)
              } else {
                return [
                  __vite_ssr_import_7__.createVNode("div", { class: "wrapper" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                      __vite_ssr_import_7__.createVNode("img", {
                        src: `/${article.img}`,
                        alt: article.title,
                        class: "rounded-lg max-h-[8rem]"
                      }, null, 8 /* PROPS */, ["src", "alt"])
                    ]),
                    __vite_ssr_import_7__.createVNode("header", null, [
                      __vite_ssr_import_7__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_7__.toDisplayString(article.title), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("p", null, __vite_ssr_import_7__.toDisplayString(article.description), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("ul", { class: "article-tags" }, [
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(article.tags, (tag, n) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                            class: "tag !py-0.5",
                            key: n
                          }, __vite_ssr_import_7__.toDisplayString(tag), 1 /* TEXT */))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
          _push(`</li>`)
        })
        _push(`<!--]--></ul>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("ul", { class: "article-list" }, [
            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(list, (article) => {
              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                key: article._path,
                class: "article-item"
              }, [
                __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                  to: article._path
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "wrapper" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                        __vite_ssr_import_7__.createVNode("img", {
                          src: `/${article.img}`,
                          alt: article.title,
                          class: "rounded-lg max-h-[8rem]"
                        }, null, 8 /* PROPS */, ["src", "alt"])
                      ]),
                      __vite_ssr_import_7__.createVNode("header", null, [
                        __vite_ssr_import_7__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_7__.toDisplayString(article.title), 1 /* TEXT */),
                        __vite_ssr_import_7__.createVNode("p", null, __vite_ssr_import_7__.toDisplayString(article.description), 1 /* TEXT */),
                        __vite_ssr_import_7__.createVNode("ul", { class: "article-tags" }, [
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(article.tags, (tag, n) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                              class: "tag !py-0.5",
                              key: n
                            }, __vite_ssr_import_7__.toDisplayString(tag), 1 /* TEXT */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    "not-found": __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No articles found.</p>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("p", null, "No articles found.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section></main>`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/index.vue"]])
const meta = {
  key: (route) => route.fullPath,
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Tags.vue
// Parents: 
// - /pages/blog/index.vue?macro=true ($id_381d5fdd)
// - /pages/blog/tags/[slug].vue?macro=true ($id_23cb5fd2)
// - /pages/blog/index.vue ($id_83c2b1d1)
// - /pages/blog/tags/[slug].vue ($id_399653d9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@heroicons/vue/solid/index.js ($id_a0bb35af)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Tags.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a21c26c9)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3a31b237 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@heroicons/vue/solid/index.js");


// tag list state

const _sfc_main = {
  __name: 'Tags',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const expanded = __vite_ssr_import_1__.ref(false);

// helper function to flatten tags array
const flatten = (tags, key) => {
  console.log(tags);

  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  console.log({ _tags });

  return _tags;
};

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// get only tags data from `/blog`
const { data } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("tags", () => __vite_ssr_import_3__.queryContent("blog").only(["tags"]).find()))),
  __temp = await __temp,
  __restore(),
  __temp
);

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, "tags"))];

console.log({ articleTags });

const __returned__ = { expanded, flatten, toggleExpand, data, articleTags, TagIcon: __vite_ssr_import_5__.TagIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({
    class: ["tag-list", { active: $setup.expanded }]
  }, _attrs))} data-v-57c02174><!-- Button to toggle expand --><button class="cta w-icon" data-v-57c02174>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["TagIcon"], { class: "icon solid" }, null, _parent))
  _push(`<span data-v-57c02174>Tags</span></button><ul class="${__vite_ssr_import_7__.ssrRenderClass([{ expanded: $setup.expanded }, "article-tags"])}" data-v-57c02174><!-- list out tags with links --><!--[-->`)
  __vite_ssr_import_7__.ssrRenderList($setup.articleTags, (tag, n) => {
    _push(`<li class="tag" data-v-57c02174>`)
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/tags/${tag}`,
      class: "font-semibold"
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_7__.ssrInterpolate(tag)}`)
        } else {
          return [
            __vite_ssr_import_6__.createTextVNode(__vite_ssr_import_6__.toDisplayString(tag), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</li>`)
  })
  _push(`<!--]--></ul></div>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/Tags.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Tags.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-57c02174"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/Tags.vue"]]);
}


// --------------------
// Request: /components/Tags.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Tags.vue ($id_3a31b237)
// Dependencies: 

// --------------------
const $id_a21c26c9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".tag-list[data-v-57c02174]{align-items:center;border-color:transparent;border-radius:.5rem;border-width:1px;display:flex;gap:.5rem;padding:.5rem}.tag-list.active[data-v-57c02174]{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.article-tags[data-v-57c02174]{max-width:0;overflow:hidden;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.article-tags.expanded[data-v-57c02174]{max-width:100%}";
}


// --------------------
// Request: /pages/blog/tags/[slug].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Tags.vue ($id_3a31b237)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_23cb5fd2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Tags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: '[slug]',
  setup(__props, { expose }) {
  expose();

// const print = (wareev) => {
//   console.log(wareev);
// };

// get current route
const {
  params: { slug },
} = __vite_ssr_import_3__.useRoute();

const filter = slug.split(",");
console.log({ filter });


// set meta for page
__vite_ssr_import_4__.useHead({
  title: `All articles with ${slug}`,
  meta: [{ name: "description", content: "Featured articles" }],
});

const __returned__ = { slug, filter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tags = __vite_ssr_import_0__.default
  const _component_ContentList = __vite_ssr_import_1__.default
  const _component_NuxtLink = __vite_ssr_import_2__.default

  _push(`<main${
    __vite_ssr_import_6__.ssrRenderAttrs(_attrs)
  }><header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles with &quot;${
    __vite_ssr_import_6__.ssrInterpolate($setup.slug)
  }&quot;</h1><p class="font-medium text-lg">List of articles</p></div></header><section class="page-section">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tags, null, null, _parent))
  _push(`<!-- Render list of all articles in ./content/blog using \`path\` --><!-- Provide only defined fieldsin the \`:query\` prop -->`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ContentList, {
    path: "/blog",
    query: {
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: $setup.filter,
            },
          },
          $sensitivity: 'base',
        }
  }, {
    default: __vite_ssr_import_5__.withCtx(({ list }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul class="article-list"${_scopeId}><!--[-->`)
        __vite_ssr_import_6__.ssrRenderList(list, (article) => {
          _push(`<li class="article-item"${_scopeId}>`)
          _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
            to: article._path
          }, {
            default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="wrapper"${
                  _scopeId
                }><div class="img-cont w-32"${
                  _scopeId
                }><img${
                  __vite_ssr_import_6__.ssrRenderAttr("src", `/${article.img}`)
                }${
                  __vite_ssr_import_6__.ssrRenderAttr("alt", article.title)
                } class="rounded-lg max-h-[8rem]"${
                  _scopeId
                }></div><header${
                  _scopeId
                }><h1 class="text-2xl font-semibold"${
                  _scopeId
                }>${
                  __vite_ssr_import_6__.ssrInterpolate(article.title)
                }</h1><p${
                  _scopeId
                }>${
                  __vite_ssr_import_6__.ssrInterpolate(article.description)
                }</p><ul class="article-tags"${
                  _scopeId
                }><!--[-->`)
                __vite_ssr_import_6__.ssrRenderList(article.tags, (tag, n) => {
                  _push(`<li class="tag"${_scopeId}>`)
                  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
                    to: `/blog/tags/${tag}`,
                    class: "underline"
                  }, {
                    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                      if (_push) {
                        _push(`${__vite_ssr_import_6__.ssrInterpolate(tag)}`)
                      } else {
                        return [
                          __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                        ]
                      }
                    }),
                    _: 2 /* DYNAMIC */
                  }, _parent, _scopeId))
                  _push(`</li>`)
                })
                _push(`<!--]--></ul></header></div>`)
              } else {
                return [
                  __vite_ssr_import_5__.createVNode("div", { class: "wrapper" }, [
                    __vite_ssr_import_5__.createVNode("div", { class: "img-cont w-32" }, [
                      __vite_ssr_import_5__.createVNode("img", {
                        src: `/${article.img}`,
                        alt: article.title,
                        class: "rounded-lg max-h-[8rem]"
                      }, null, 8 /* PROPS */, ["src", "alt"])
                    ]),
                    __vite_ssr_import_5__.createVNode("header", null, [
                      __vite_ssr_import_5__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_5__.toDisplayString(article.title), 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("p", null, __vite_ssr_import_5__.toDisplayString(article.description), 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("ul", { class: "article-tags" }, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(article.tags, (tag, n) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                            class: "tag",
                            key: n
                          }, [
                            __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                              to: `/blog/tags/${tag}`,
                              class: "underline"
                            }, {
                              default: __vite_ssr_import_5__.withCtx(() => [
                                __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
          _push(`</li>`)
        })
        _push(`<!--]--></ul>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("ul", { class: "article-list" }, [
            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(list, (article) => {
              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                key: article._path,
                class: "article-item"
              }, [
                __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                  to: article._path
                }, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "wrapper" }, [
                      __vite_ssr_import_5__.createVNode("div", { class: "img-cont w-32" }, [
                        __vite_ssr_import_5__.createVNode("img", {
                          src: `/${article.img}`,
                          alt: article.title,
                          class: "rounded-lg max-h-[8rem]"
                        }, null, 8 /* PROPS */, ["src", "alt"])
                      ]),
                      __vite_ssr_import_5__.createVNode("header", null, [
                        __vite_ssr_import_5__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_5__.toDisplayString(article.title), 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("p", null, __vite_ssr_import_5__.toDisplayString(article.description), 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("ul", { class: "article-tags" }, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(article.tags, (tag, n) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                              class: "tag",
                              key: n
                            }, [
                              __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                                to: `/blog/tags/${tag}`,
                                class: "underline"
                              }, {
                                default: __vite_ssr_import_5__.withCtx(() => [
                                  __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    "not-found": __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No articles found.</p>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("p", null, "No articles found.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section></main>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/tags/[slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/tags/[slug].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_4aa9e65e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = __vite_ssr_import_1__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_1__.resolveComponent("Script")
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)} data-v-2a183b29>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<section class="hero-section" data-v-2a183b29><header data-v-2a183b29><h1 class="font-black text-6xl" data-v-2a183b29>Welcome to roster.props</h1><span class="text-4xl" data-v-2a183b29>🏈 🏒 ⚽</span><p data-v-2a183b29>browse the`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` daily fantasy + props content`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" daily fantasy + props content")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p><p data-v-2a183b29>and sign up or login to</p><p data-v-2a183b29>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/teams" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`like and comment on your favorite players for the day`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("like and comment on your favorite players for the day")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p></header></section></main>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_4aa9e65e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".hero-section[data-v-2a183b29]{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(248 250 252/var(--tw-bg-opacity));color:rgb(51 65 85/var(--tw-text-opacity));display:flex;height:100vh;justify-content:center;text-align:center;width:100%}";
}


// --------------------
// Request: /pages/login.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_213baa8a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const email = __vite_ssr_import_2__.ref(null);
    const password = __vite_ssr_import_2__.ref(null);
    const hasError = __vite_ssr_import_2__.ref(null);
    const errorMessage = __vite_ssr_import_2__.ref(null);
    /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
      middleware: "guest"
    });
    const postLoginForm = async function() {
      await __vite_ssr_import_3__.loginWithEmail(email.value, password.value);
    };
    const __returned__ = { email, password, hasError, errorMessage, postLoginForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "h-screen bg-gradient-to-b from-white to-blue-200" }, _attrs))}><div class="flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full space-y-8"><div><div class="h-25 w-25"></div><div class="flex"><img class="mx-auto h-24 w-auto" src="/img/hockeyphone.png" alt="roster.props logo"><h1 class="py-9 text-center text-3xl font-extrabold text-gray-900"> roster.props </h1></div><h2 class="mt-6 py-9 text-center text-3xl font-extrabold text-gray-900"> Sign in </h2></div>`);
  if ($setup.hasError) {
    _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Oops, try again! </strong><span class="block sm:inline">${__vite_ssr_import_5__.ssrInterpolate($setup.errorMessage)}</span><span class="absolute top-0 bottom-0 right-0 px-4 py-3"><svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg></span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (true) {
    _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">Email address</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.email)} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address"></div></div><div><label for="password" class="sr-only">Password</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.password)} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Password"></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div><div><button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> Sign in </button></div></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/login.vue"]]);

const meta = {
      middleware: "guest"
    }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/@vue/reactivity/dist/reactivity.cjs.js
// Parents: 
// - /pages/login.vue?macro=true ($id_213baa8a)
// - /pages/register.vue?macro=true ($id_222c4ecc)
// - /pages/login.vue ($id_b0922173)
// - /pages/register.vue ($id_a0bf5dce)
// - /components/User.vue ($id_ce2e00d8)
// Dependencies: 

// --------------------
const $id_85c34493 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.js\".")
  })


// --------------------
// Request: /pages/register.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_222c4ecc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "register",
  setup(__props, { expose }) {
    expose();
    const email = __vite_ssr_import_2__.ref(null);
    const password = __vite_ssr_import_2__.ref(null);
    const username = __vite_ssr_import_2__.ref(null);
    const name = __vite_ssr_import_2__.ref(null);
    const errors = __vite_ssr_import_2__.ref(/* @__PURE__ */ new Map());
    let response = __vite_ssr_import_2__.ref({ hasErrors: false });
    async function postRegisterForm() {
      response.value = await __vite_ssr_import_3__.registerWithEmail(username.value, name.value, email.value, password.value);
      errors.value = response.value.errors;
    }
    const __returned__ = { email, password, username, name, errors, response, postRegisterForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "h-screen" }, _attrs))}><div class="flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full"><div class="flex"><img class="mx-auto h-24 w-auto" src="/img/hockeyphone.png" alt="roster.props logo"><h1 class="py-9 text-center text-3xl font-extrabold text-gray-900"> roster.props </h1></div><div><h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900">Sign Up</h2></div>`);
  if ($setup.response.hasErrors && $setup.errors) {
    _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert"><strong class="font-bold">Oops, try again! </strong><ul class="block sm:inline"><!--[-->`);
    __vite_ssr_import_5__.ssrRenderList($setup.errors, ([key, value]) => {
      _push(`<li>${__vite_ssr_import_5__.ssrInterpolate(value.check.errorMessage)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="name" class="sr-only">name</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.name)} id="name" name="name" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("name") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="name"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">username</label><input type="email"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.username)} id="username" name="username" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("username") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="username"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">email</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.email)} id="email-address" name="email" type="email" autocomplete="email" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("email") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="email address"></div></div><div><label for="password" class="sr-only">password</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.password)} id="password" name="password" type="password" autocomplete="current-password" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("password") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="password"></div><div class="flex items-center justify-between"><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div></form><button class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> register </button></div></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/register.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/teams/[id]/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/PlayerCard.vue ($id_89df6488)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4d404a17 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/PlayerCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const route = __vite_ssr_import_1__.useRoute();
    const { data } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${route.params.id}/roster`)), __temp = await __temp, __restore(), __temp);
    const __returned__ = { route, data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_3__.resolveComponent("Head");
  const _component_Script = __vite_ssr_import_3__.resolveComponent("Script");
  const _component_PlayerCard = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_4__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section><h2 class="text-2xl mt-3 mb-4 text-center">Team Page</h2><div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.data.roster, (player) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_PlayerCard, {
      player,
      key: player.id
    }, null, _parent));
  });
  _push(`<!--]--></div></section></main>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/PlayerCard.vue
// Parents: 
// - /pages/teams/[id]/index.vue?macro=true ($id_4d404a17)
// - /pages/teams/[id]/index.vue ($id_aeed9c79)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_89df6488 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "PlayerCard",
  props: ["player"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" }, _attrs))}><!-- <img
      class="w-full h-auto rounded-t-xl"
      :src="matchPlayerImage(player.person.fullName)"
      alt="Player Profile"
    /> --><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white">${__vite_ssr_import_4__.ssrInterpolate($props.player.person.fullName)}</h3><p class="mt-1 text-gray-800 dark:text-gray-400"> Jersey Number: ${__vite_ssr_import_4__.ssrInterpolate($props.player.jerseyNumber)}</p>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    class: "mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",
    to: `/teams/${__vite_ssr_import_1__.useRoute().params.id}/player/` + $props.player.person.id
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Player `);
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode(" View Player ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PlayerCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/components/PlayerCard.vue"]]);
;
}


// --------------------
// Request: /pages/teams/[id]/player/[player].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Comments.vue ($id_04072223)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useLike.ts ($id_6dd93210)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5609f4a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Comments.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/useLike.ts");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: '[player]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_1__.useRuntimeConfig();
const route = __vite_ssr_import_1__.useRoute();

const player = __vite_ssr_import_2__.ref(null);
const playerLikes = __vite_ssr_import_2__.ref(null);
const user = __vite_ssr_import_5__.useState("user");

const res = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => Promise.all([
  __vite_ssr_import_1__.useFetch(`https://statsapi.web.nhl.com/api/v1/people/${route.params.player}`),
  __vite_ssr_import_1__.useFetch(
    `https://statsapi.web.nhl.com/api/v1/people/${route.params.player}/stats/?stats=statsSingleSeason&season=${config.public.SEASON}`
  ),
]))),
  __temp = await __temp,
  __restore(),
  __temp
);

player.value = {
  ...res[0].data.value.people[0],
  stats: res[1].data.value.stats[0].splits[0],
};
playerLikes.value = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_4__.getUserLikes(route.params.player))),
  __temp = await __temp,
  __restore(),
  __temp
);

const isLiked = __vite_ssr_import_2__.computed(() => {
  return playerLikes.value.find((like) => like.userId == user.value.id) ? true : false;
});

const userLike = __vite_ssr_import_2__.computed(() => {
  return playerLikes.value.find((like) => like.userId == user.value.id);
});

/*
=================================
          * METHODS *
=================================
*/

async function likePlayer() {
  try {
    const like = await __vite_ssr_import_4__.addUserLike(player.value.id);
    console.log("like", like);
    playerLikes.value.push({ ...like });
  } catch (error) {}
}

async function unlikePlayer(id) {
  try {
    await __vite_ssr_import_4__.removeUserLike(id);
    const index = playerLikes.value.find((like) => id === id);
    playerLikes.value.splice(index, 1);
  } catch (error) {}
}

const __returned__ = { config, route, player, playerLikes, user, res, isLiked, userLike, likePlayer, unlikePlayer, getUserLikes: __vite_ssr_import_4__.getUserLikes, addUserLike: __vite_ssr_import_4__.addUserLike, removeUserLike: __vite_ssr_import_4__.removeUserLike, useState: __vite_ssr_import_5__.useState }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_6__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_6__.resolveComponent("Script")
  const _component_Comments = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_6__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<section>`)
  if ($setup.player) {
    _push(`<div class="md:w-1/2 md:mx-auto mt-4 mx-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white text-center">${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.fullName)
    }</h3><p class="mt-1 text-gray-800 dark:text-gray-400"> Height: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.height)
    } <br> Team: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.currentTeam.name)
    } <br> Season: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.season)
    } <br> Assists: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.assists)
    } <br> Pim: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.pim)
    } <br> shots: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.shots)
    } <br> Goals: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.goals)
    } <br> Games: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.games)
    } <br> Hits: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.hits)
    } <br></p>`)
    if ($setup.isLiked) {
      _push(`<button class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-500 font-semibold text-blue-500 focus:outline-none transition-all text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z" fill="#2F80ED"></path></svg><span>${__vite_ssr_import_7__.ssrInterpolate($setup.playerLikes.length)} Likes</span></button>`)
    } else {
      _push(`<button type="button" class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z" fill="#222B45"></path></svg><span>${__vite_ssr_import_7__.ssrInterpolate($setup.playerLikes.length)} Likes</span></button>`)
    }
    _push(`</div>`)
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Comments, null, null, _parent))
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</section></main>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/teams/[id]/player/[player].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/player/[player].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Comments.vue
// Parents: 
// - /pages/teams/[id]/player/[player].vue?macro=true ($id_5609f4a1)
// - /pages/teams/[id]/player/[player].vue ($id_b85564a3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useComment.ts ($id_662ffe6f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_04072223 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useComment.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'Comments',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const route = __vite_ssr_import_0__.useRoute();
const playerComments = __vite_ssr_import_1__.ref([]);
const comment = __vite_ssr_import_1__.ref("");
const commenting = __vite_ssr_import_1__.ref(false);
const user = __vite_ssr_import_4__.useState("user");

playerComments.value = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_3__.getPlayerComments(route.params.player))),
  __temp = await __temp,
  __restore(),
  __temp
);

/*
=================================
          * METHODS *
=================================
*/

async function commentPlayer() {
  commenting.value = true;
  try {
    const commentRes = await __vite_ssr_import_3__.addComment({
      userId: user.value.id,
      playerId: +route.params.player,
      comment: comment.value,
    });
    playerComments.value.unshift({ ...commentRes, user: user.value });
    comment.value = "";
  } catch (error) {
    console.log(error);
  } finally {
    commenting.value = false;
  }
}
async function deletePlayerComment(id, index) {
  await __vite_ssr_import_3__.deleteComment(id);
  playerComments.value.splice(index, 1);
}

const __returned__ = { route, playerComments, comment, commenting, user, commentPlayer, deletePlayerComment, addComment: __vite_ssr_import_3__.addComment, getPlayerComments: __vite_ssr_import_3__.getPlayerComments, deleteComment: __vite_ssr_import_3__.deleteComment, useState: __vite_ssr_import_4__.useState }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- Comments --><div${
    __vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({
      class: "p-4 bg-white border-t rounded-none rounded-md dark:bg-gray-800 dark:border-gray-700",
      role: "alert"
    }, _attrs))
  }><h3 class="ml-3 font-bold mb-3">Comments</h3><form class="w-full d-flex flex-col"><input${
    __vite_ssr_import_6__.ssrRenderAttr("value", $setup.comment)
  } required type="text" placeholder="Enter Comment" class="py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"><button class="ml-auto block w-20 mt-2 py-2 px-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">`)
  if ($setup.commenting) {
    _push(`<div class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading"><span class="sr-only">Loading...</span></div>`)
  } else {
    _push(`<!--[--> Submit <!--]-->`)
  }
  _push(`</button></form><div class="flex flex-col pt-3"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.playerComments, (comment, i) => {
    _push(`<div class="ml-3 mb-2 py-2 border-t border-gray-200"><div class="flex gap-3 items-center"><img src="/img/footballguy2.jpg" class="rounded-full w-10 h-10" alt="avatar"><div><h4 class="text-base m-0 leading-3">${
      __vite_ssr_import_6__.ssrInterpolate(comment.user.name)
    }</h4><span class="text-xs leading-3">@${
      __vite_ssr_import_6__.ssrInterpolate(comment.user.username)
    }</span></div><button class="p-2 ml-auto"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9C7.897 2 7 2.897 7 4V5H3V7H5V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V7H21V5H17V4C17 2.897 16.103 2 15 2ZM9 4H15V5H9V4ZM17 20H7V7H17V20Z" fill="#192038"></path></svg></button></div><p class="text-base mt-2 text-gray-700 dark:text-gray-400 ml-12">${
      __vite_ssr_import_6__.ssrInterpolate(comment.comment)
    }</p></div>`)
  })
  _push(`<!--]--></div></div><!--  --><!--]-->`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Comments.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/components/Comments.vue"]]);
}


// --------------------
// Request: /pages/teams/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a0b1a380 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TeamCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { data } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch("https://statsapi.web.nhl.com/api/v1/teams")), __temp = await __temp, __restore(), __temp);
    const __returned__ = { data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_3__.resolveComponent("Head");
  const _component_Script = __vite_ssr_import_3__.resolveComponent("Script");
  const _component_TeamCard = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_4__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section><h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2><div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.data.teams, (team) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_TeamCard, {
      team,
      key: team.id
    }, null, _parent));
  });
  _push(`<!--]--></div></section></main>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TeamCard.vue
// Parents: 
// - /pages/teams/index.vue?macro=true ($id_a0b1a380)
// - /pages/teams/index.vue ($id_9644598b)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5e2e1b2d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "TeamCard",
  props: ["team"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" }, _attrs))}><!-- <img
      class="w-full h-auto rounded-t-xl"
      src="/img/img1.jpg"
      alt="Team Description"
    /> --><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white">${__vite_ssr_import_3__.ssrInterpolate($props.team.name)}</h3><p class="mt-1 text-gray-800 dark:text-gray-400">${__vite_ssr_import_3__.ssrInterpolate($props.team.locationName)} <br></p>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    class: "mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800",
    to: `/teams/` + $props.team.id
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Players `);
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" View Players ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/components/TeamCard.vue"]]);
;
}


// --------------------
// Request: /pages/blog/[...slug].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Toc.vue ($id_5cbfb66a)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /components/Form.vue ($id_ce31a1a0)
// - /components/PrevNext.vue ($id_fca51e5c)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css ($id_f86f35dd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b8f35669 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Toc.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Form.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/PrevNext.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  __name: '[...slug]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { path } = __vite_ssr_import_5__.useRoute();
const { data } = (
  ([__temp,__restore] = __vite_ssr_import_8__.withAsyncContext(async () => __vite_ssr_import_5__.useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = __vite_ssr_import_6__.queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = __vite_ssr_import_6__.queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
}))),
  __temp = await __temp,
  __restore(),
  __temp
);

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
__vite_ssr_import_7__.useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.article.img}`,
    },
  ],
});

const __returned__ = { path, data, prev, next }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_9__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_9__.resolveComponent("Script")
  const _component_Toc = __vite_ssr_import_0__.default
  const _component_ContentRenderer = __vite_ssr_import_1__.default
  const _component_MarkdownRenderer = __vite_ssr_import_2__.default
  const _component_Form = __vite_ssr_import_3__.default
  const _component_PrevNext = __vite_ssr_import_4__.default

  _push(`<main${__vite_ssr_import_10__.ssrRenderAttrs(__vite_ssr_import_9__.mergeProps({
    id: "main",
    class: "article-main"
  }, _attrs))} data-v-04f43c4b>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_9__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  if ($setup.data.article) {
    _push(`<header class="article-header" data-v-04f43c4b><div class="img-cont h-72 mb-12" data-v-04f43c4b><img${
      __vite_ssr_import_10__.ssrRenderAttr("src", `/${$setup.data.article.img}`)
    }${
      __vite_ssr_import_10__.ssrRenderAttr("alt", $setup.data.article.title)
    } class="rounded-2xl" data-v-04f43c4b></div><h1 class="heading" data-v-04f43c4b>${
      __vite_ssr_import_10__.ssrInterpolate($setup.data.article.title)
    }</h1><p class="supporting" data-v-04f43c4b>${
      __vite_ssr_import_10__.ssrInterpolate($setup.data.article.description)
    }</p><ul class="article-tags" data-v-04f43c4b><!--[-->`)
    __vite_ssr_import_10__.ssrRenderList($setup.data.article.tags, (tag, n) => {
      _push(`<li class="tag" data-v-04f43c4b>${__vite_ssr_import_10__.ssrInterpolate(tag)}</li>`)
    })
    _push(`<!--]--></ul></header>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<hr data-v-04f43c4b><section class="article-section" data-v-04f43c4b><aside class="aside" data-v-04f43c4b><!-- Toc Component -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Toc, {
    links: $setup.data.article.body.toc.links
  }, null, _parent))
  _push(`</aside><article class="article" data-v-04f43c4b><!-- render document coming from query -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_ContentRenderer, {
    value: $setup.data.article
  }, {
    empty: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p data-v-04f43c4b${_scopeId}>No content found.</p>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("p", null, "No content found.")
        ]
      }
    }),
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_MarkdownRenderer, {
          value: $setup.data.article
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_9__.createVNode(_component_MarkdownRenderer, {
            value: $setup.data.article
          }, null, 8 /* PROPS */, ["value"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</article></section>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_Form, null, null, _parent))
  _push(`<!-- PrevNext Component -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_PrevNext, {
    prev: $setup.prev,
    next: $setup.next
  }, null, _parent))
  _push(`</main>`)
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-04f43c4b"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/[...slug].vue"]]);
}


// --------------------
// Request: /pages/blog/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Tags.vue ($id_3a31b237)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_83c2b1d1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Tags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_3__.definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = __vite_ssr_import_4__.useRoute();

const filter = __vite_ssr_import_5__.ref(tags?.split(","));

// set meta for page
__vite_ssr_import_6__.useHead({
  title: "All articles",
  meta: [{ name: "description", content: "All articles" }],
});

const __returned__ = { tags, filter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_7__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_7__.resolveComponent("Script")
  const _component_Tags = __vite_ssr_import_0__.default
  const _component_ContentList = __vite_ssr_import_1__.default
  const _component_NuxtLink = __vite_ssr_import_2__.default

  _push(`<main${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_7__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles</h1><p class="font-medium text-lg">List of all articles</p></div></header><section class="page-section">`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_Tags, null, null, _parent))
  _push(`<!-- Render list of all articles in ./content/blog using \`path\` --><!-- Provide only defined fieldsin the \`:query\` prop -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ContentList, {
    path: "/blog",
    query: {
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: $setup.filter,
            },
          },
          $sensitivity: 'base',
        }
  }, {
    default: __vite_ssr_import_7__.withCtx(({ list }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul class="article-list"${_scopeId}><!--[-->`)
        __vite_ssr_import_8__.ssrRenderList(list, (article) => {
          _push(`<li class="article-item"${_scopeId}>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
            to: article._path
          }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="wrapper"${
                  _scopeId
                }><div class="img-cont w-32 shrink-0"${
                  _scopeId
                }><img${
                  __vite_ssr_import_8__.ssrRenderAttr("src", `/${article.img}`)
                }${
                  __vite_ssr_import_8__.ssrRenderAttr("alt", article.title)
                } class="rounded-lg max-h-[8rem]"${
                  _scopeId
                }></div><header${
                  _scopeId
                }><h1 class="text-2xl font-semibold"${
                  _scopeId
                }>${
                  __vite_ssr_import_8__.ssrInterpolate(article.title)
                }</h1><p${
                  _scopeId
                }>${
                  __vite_ssr_import_8__.ssrInterpolate(article.description)
                }</p><ul class="article-tags"${
                  _scopeId
                }><!--[-->`)
                __vite_ssr_import_8__.ssrRenderList(article.tags, (tag, n) => {
                  _push(`<li class="tag !py-0.5"${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(tag)
                  }</li>`)
                })
                _push(`<!--]--></ul></header></div>`)
              } else {
                return [
                  __vite_ssr_import_7__.createVNode("div", { class: "wrapper" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                      __vite_ssr_import_7__.createVNode("img", {
                        src: `/${article.img}`,
                        alt: article.title,
                        class: "rounded-lg max-h-[8rem]"
                      }, null, 8 /* PROPS */, ["src", "alt"])
                    ]),
                    __vite_ssr_import_7__.createVNode("header", null, [
                      __vite_ssr_import_7__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_7__.toDisplayString(article.title), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("p", null, __vite_ssr_import_7__.toDisplayString(article.description), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("ul", { class: "article-tags" }, [
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(article.tags, (tag, n) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                            class: "tag !py-0.5",
                            key: n
                          }, __vite_ssr_import_7__.toDisplayString(tag), 1 /* TEXT */))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
          _push(`</li>`)
        })
        _push(`<!--]--></ul>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("ul", { class: "article-list" }, [
            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(list, (article) => {
              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                key: article._path,
                class: "article-item"
              }, [
                __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                  to: article._path
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "wrapper" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "img-cont w-32 shrink-0" }, [
                        __vite_ssr_import_7__.createVNode("img", {
                          src: `/${article.img}`,
                          alt: article.title,
                          class: "rounded-lg max-h-[8rem]"
                        }, null, 8 /* PROPS */, ["src", "alt"])
                      ]),
                      __vite_ssr_import_7__.createVNode("header", null, [
                        __vite_ssr_import_7__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_7__.toDisplayString(article.title), 1 /* TEXT */),
                        __vite_ssr_import_7__.createVNode("p", null, __vite_ssr_import_7__.toDisplayString(article.description), 1 /* TEXT */),
                        __vite_ssr_import_7__.createVNode("ul", { class: "article-tags" }, [
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(article.tags, (tag, n) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", {
                              class: "tag !py-0.5",
                              key: n
                            }, __vite_ssr_import_7__.toDisplayString(tag), 1 /* TEXT */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    "not-found": __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No articles found.</p>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("p", null, "No articles found.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section></main>`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/index.vue"]]);
}


// --------------------
// Request: /pages/blog/tags/[slug].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Tags.vue ($id_3a31b237)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_399653d9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Tags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: '[slug]',
  setup(__props, { expose }) {
  expose();

// const print = (wareev) => {
//   console.log(wareev);
// };

// get current route
const {
  params: { slug },
} = __vite_ssr_import_3__.useRoute();

const filter = slug.split(",");
console.log({ filter });


// set meta for page
__vite_ssr_import_4__.useHead({
  title: `All articles with ${slug}`,
  meta: [{ name: "description", content: "Featured articles" }],
});

const __returned__ = { slug, filter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tags = __vite_ssr_import_0__.default
  const _component_ContentList = __vite_ssr_import_1__.default
  const _component_NuxtLink = __vite_ssr_import_2__.default

  _push(`<main${
    __vite_ssr_import_6__.ssrRenderAttrs(_attrs)
  }><header class="page-heading"><div class="wrapper"><h1 class="text-5xl font-extrabold">All articles with &quot;${
    __vite_ssr_import_6__.ssrInterpolate($setup.slug)
  }&quot;</h1><p class="font-medium text-lg">List of articles</p></div></header><section class="page-section">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Tags, null, null, _parent))
  _push(`<!-- Render list of all articles in ./content/blog using \`path\` --><!-- Provide only defined fieldsin the \`:query\` prop -->`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ContentList, {
    path: "/blog",
    query: {
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: $setup.filter,
            },
          },
          $sensitivity: 'base',
        }
  }, {
    default: __vite_ssr_import_5__.withCtx(({ list }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul class="article-list"${_scopeId}><!--[-->`)
        __vite_ssr_import_6__.ssrRenderList(list, (article) => {
          _push(`<li class="article-item"${_scopeId}>`)
          _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
            to: article._path
          }, {
            default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="wrapper"${
                  _scopeId
                }><div class="img-cont w-32"${
                  _scopeId
                }><img${
                  __vite_ssr_import_6__.ssrRenderAttr("src", `/${article.img}`)
                }${
                  __vite_ssr_import_6__.ssrRenderAttr("alt", article.title)
                } class="rounded-lg max-h-[8rem]"${
                  _scopeId
                }></div><header${
                  _scopeId
                }><h1 class="text-2xl font-semibold"${
                  _scopeId
                }>${
                  __vite_ssr_import_6__.ssrInterpolate(article.title)
                }</h1><p${
                  _scopeId
                }>${
                  __vite_ssr_import_6__.ssrInterpolate(article.description)
                }</p><ul class="article-tags"${
                  _scopeId
                }><!--[-->`)
                __vite_ssr_import_6__.ssrRenderList(article.tags, (tag, n) => {
                  _push(`<li class="tag"${_scopeId}>`)
                  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
                    to: `/blog/tags/${tag}`,
                    class: "underline"
                  }, {
                    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                      if (_push) {
                        _push(`${__vite_ssr_import_6__.ssrInterpolate(tag)}`)
                      } else {
                        return [
                          __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                        ]
                      }
                    }),
                    _: 2 /* DYNAMIC */
                  }, _parent, _scopeId))
                  _push(`</li>`)
                })
                _push(`<!--]--></ul></header></div>`)
              } else {
                return [
                  __vite_ssr_import_5__.createVNode("div", { class: "wrapper" }, [
                    __vite_ssr_import_5__.createVNode("div", { class: "img-cont w-32" }, [
                      __vite_ssr_import_5__.createVNode("img", {
                        src: `/${article.img}`,
                        alt: article.title,
                        class: "rounded-lg max-h-[8rem]"
                      }, null, 8 /* PROPS */, ["src", "alt"])
                    ]),
                    __vite_ssr_import_5__.createVNode("header", null, [
                      __vite_ssr_import_5__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_5__.toDisplayString(article.title), 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("p", null, __vite_ssr_import_5__.toDisplayString(article.description), 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("ul", { class: "article-tags" }, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(article.tags, (tag, n) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                            class: "tag",
                            key: n
                          }, [
                            __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                              to: `/blog/tags/${tag}`,
                              class: "underline"
                            }, {
                              default: __vite_ssr_import_5__.withCtx(() => [
                                __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
          _push(`</li>`)
        })
        _push(`<!--]--></ul>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("ul", { class: "article-list" }, [
            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(list, (article) => {
              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                key: article._path,
                class: "article-item"
              }, [
                __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                  to: article._path
                }, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "wrapper" }, [
                      __vite_ssr_import_5__.createVNode("div", { class: "img-cont w-32" }, [
                        __vite_ssr_import_5__.createVNode("img", {
                          src: `/${article.img}`,
                          alt: article.title,
                          class: "rounded-lg max-h-[8rem]"
                        }, null, 8 /* PROPS */, ["src", "alt"])
                      ]),
                      __vite_ssr_import_5__.createVNode("header", null, [
                        __vite_ssr_import_5__.createVNode("h1", { class: "text-2xl font-semibold" }, __vite_ssr_import_5__.toDisplayString(article.title), 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("p", null, __vite_ssr_import_5__.toDisplayString(article.description), 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("ul", { class: "article-tags" }, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList(article.tags, (tag, n) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("li", {
                              class: "tag",
                              key: n
                            }, [
                              __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
                                to: `/blog/tags/${tag}`,
                                class: "underline"
                              }, {
                                default: __vite_ssr_import_5__.withCtx(() => [
                                  __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(tag), 1 /* TEXT */)
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    "not-found": __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No articles found.</p>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("p", null, "No articles found.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section></main>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/blog/tags/[slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/blog/tags/[slug].vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_4aa9e65e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = __vite_ssr_import_1__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_1__.resolveComponent("Script")
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)} data-v-2a183b29>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<section class="hero-section" data-v-2a183b29><header data-v-2a183b29><h1 class="font-black text-6xl" data-v-2a183b29>Welcome to roster.props</h1><span class="text-4xl" data-v-2a183b29>🏈 🏒 ⚽</span><p data-v-2a183b29>browse the`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` daily fantasy + props content`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" daily fantasy + props content")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p><p data-v-2a183b29>and sign up or login to</p><p data-v-2a183b29>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/teams" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`like and comment on your favorite players for the day`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("like and comment on your favorite players for the day")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p></header></section></main>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/index.vue"]]);
}


// --------------------
// Request: /pages/login.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b0922173 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const email = __vite_ssr_import_2__.ref(null);
    const password = __vite_ssr_import_2__.ref(null);
    const hasError = __vite_ssr_import_2__.ref(null);
    const errorMessage = __vite_ssr_import_2__.ref(null);
    /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
      middleware: "guest"
    });
    const postLoginForm = async function() {
      await __vite_ssr_import_3__.loginWithEmail(email.value, password.value);
    };
    const __returned__ = { email, password, hasError, errorMessage, postLoginForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "h-screen bg-gradient-to-b from-white to-blue-200" }, _attrs))}><div class="flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full space-y-8"><div><div class="h-25 w-25"></div><div class="flex"><img class="mx-auto h-24 w-auto" src="/img/hockeyphone.png" alt="roster.props logo"><h1 class="py-9 text-center text-3xl font-extrabold text-gray-900"> roster.props </h1></div><h2 class="mt-6 py-9 text-center text-3xl font-extrabold text-gray-900"> Sign in </h2></div>`);
  if ($setup.hasError) {
    _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Oops, try again! </strong><span class="block sm:inline">${__vite_ssr_import_5__.ssrInterpolate($setup.errorMessage)}</span><span class="absolute top-0 bottom-0 right-0 px-4 py-3"><svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg></span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (true) {
    _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">Email address</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.email)} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address"></div></div><div><label for="password" class="sr-only">Password</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.password)} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Password"></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div><div><button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> Sign in </button></div></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/login.vue"]]);
;
}


// --------------------
// Request: /pages/register.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a0bf5dce = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "register",
  setup(__props, { expose }) {
    expose();
    const email = __vite_ssr_import_2__.ref(null);
    const password = __vite_ssr_import_2__.ref(null);
    const username = __vite_ssr_import_2__.ref(null);
    const name = __vite_ssr_import_2__.ref(null);
    const errors = __vite_ssr_import_2__.ref(/* @__PURE__ */ new Map());
    let response = __vite_ssr_import_2__.ref({ hasErrors: false });
    async function postRegisterForm() {
      response.value = await __vite_ssr_import_3__.registerWithEmail(username.value, name.value, email.value, password.value);
      errors.value = response.value.errors;
    }
    const __returned__ = { email, password, username, name, errors, response, postRegisterForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "h-screen" }, _attrs))}><div class="flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full"><div class="flex"><img class="mx-auto h-24 w-auto" src="/img/hockeyphone.png" alt="roster.props logo"><h1 class="py-9 text-center text-3xl font-extrabold text-gray-900"> roster.props </h1></div><div><h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900">Sign Up</h2></div>`);
  if ($setup.response.hasErrors && $setup.errors) {
    _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert"><strong class="font-bold">Oops, try again! </strong><ul class="block sm:inline"><!--[-->`);
    __vite_ssr_import_5__.ssrRenderList($setup.errors, ([key, value]) => {
      _push(`<li>${__vite_ssr_import_5__.ssrInterpolate(value.check.errorMessage)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="name" class="sr-only">name</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.name)} id="name" name="name" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("name") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="name"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">username</label><input type="email"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.username)} id="username" name="username" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("username") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="username"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">email</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.email)} id="email-address" name="email" type="email" autocomplete="email" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("email") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="email address"></div></div><div><label for="password" class="sr-only">password</label><input${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.password)} id="password" name="password" type="password" autocomplete="current-password" required class="${__vite_ssr_import_5__.ssrRenderClass([$setup.errors.has("password") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="password"></div><div class="flex items-center justify-between"><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div></form><button class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> register </button></div></div></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/register.vue"]]);
;
}


// --------------------
// Request: /pages/teams/[id]/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/PlayerCard.vue ($id_89df6488)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_aeed9c79 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/PlayerCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const route = __vite_ssr_import_1__.useRoute();
    const { data } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`https://statsapi.web.nhl.com/api/v1/teams/${route.params.id}/roster`)), __temp = await __temp, __restore(), __temp);
    const __returned__ = { route, data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_3__.resolveComponent("Head");
  const _component_Script = __vite_ssr_import_3__.resolveComponent("Script");
  const _component_PlayerCard = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_4__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section><h2 class="text-2xl mt-3 mb-4 text-center">Team Page</h2><div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.data.roster, (player) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_PlayerCard, {
      player,
      key: player.id
    }, null, _parent));
  });
  _push(`<!--]--></div></section></main>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/index.vue"]]);
;
}


// --------------------
// Request: /pages/teams/[id]/player/[player].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/Comments.vue ($id_04072223)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useLike.ts ($id_6dd93210)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b85564a3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Comments.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/useLike.ts");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: '[player]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_1__.useRuntimeConfig();
const route = __vite_ssr_import_1__.useRoute();

const player = __vite_ssr_import_2__.ref(null);
const playerLikes = __vite_ssr_import_2__.ref(null);
const user = __vite_ssr_import_5__.useState("user");

const res = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => Promise.all([
  __vite_ssr_import_1__.useFetch(`https://statsapi.web.nhl.com/api/v1/people/${route.params.player}`),
  __vite_ssr_import_1__.useFetch(
    `https://statsapi.web.nhl.com/api/v1/people/${route.params.player}/stats/?stats=statsSingleSeason&season=${config.public.SEASON}`
  ),
]))),
  __temp = await __temp,
  __restore(),
  __temp
);

player.value = {
  ...res[0].data.value.people[0],
  stats: res[1].data.value.stats[0].splits[0],
};
playerLikes.value = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_4__.getUserLikes(route.params.player))),
  __temp = await __temp,
  __restore(),
  __temp
);

const isLiked = __vite_ssr_import_2__.computed(() => {
  return playerLikes.value.find((like) => like.userId == user.value.id) ? true : false;
});

const userLike = __vite_ssr_import_2__.computed(() => {
  return playerLikes.value.find((like) => like.userId == user.value.id);
});

/*
=================================
          * METHODS *
=================================
*/

async function likePlayer() {
  try {
    const like = await __vite_ssr_import_4__.addUserLike(player.value.id);
    console.log("like", like);
    playerLikes.value.push({ ...like });
  } catch (error) {}
}

async function unlikePlayer(id) {
  try {
    await __vite_ssr_import_4__.removeUserLike(id);
    const index = playerLikes.value.find((like) => id === id);
    playerLikes.value.splice(index, 1);
  } catch (error) {}
}

const __returned__ = { config, route, player, playerLikes, user, res, isLiked, userLike, likePlayer, unlikePlayer, getUserLikes: __vite_ssr_import_4__.getUserLikes, addUserLike: __vite_ssr_import_4__.addUserLike, removeUserLike: __vite_ssr_import_4__.removeUserLike, useState: __vite_ssr_import_5__.useState }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_6__.resolveComponent("Head")
  const _component_Script = __vite_ssr_import_6__.resolveComponent("Script")
  const _component_Comments = __vite_ssr_import_0__.default

  _push(`<main${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_6__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<section>`)
  if ($setup.player) {
    _push(`<div class="md:w-1/2 md:mx-auto mt-4 mx-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h3 class="text-lg font-bold text-gray-800 dark:text-white text-center">${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.fullName)
    }</h3><p class="mt-1 text-gray-800 dark:text-gray-400"> Height: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.height)
    } <br> Team: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.currentTeam.name)
    } <br> Season: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.season)
    } <br> Assists: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.assists)
    } <br> Pim: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.pim)
    } <br> shots: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.shots)
    } <br> Goals: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.goals)
    } <br> Games: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.games)
    } <br> Hits: ${
      __vite_ssr_import_7__.ssrInterpolate($setup.player.stats.stat.hits)
    } <br></p>`)
    if ($setup.isLiked) {
      _push(`<button class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-500 font-semibold text-blue-500 focus:outline-none transition-all text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z" fill="#2F80ED"></path></svg><span>${__vite_ssr_import_7__.ssrInterpolate($setup.playerLikes.length)} Likes</span></button>`)
    } else {
      _push(`<button type="button" class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z" fill="#222B45"></path></svg><span>${__vite_ssr_import_7__.ssrInterpolate($setup.playerLikes.length)} Likes</span></button>`)
    }
    _push(`</div>`)
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_Comments, null, null, _parent))
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</section></main>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/teams/[id]/player/[player].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/[id]/player/[player].vue"]]);
}


// --------------------
// Request: /pages/teams/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs ($id_8b52cc6c)
// Dependencies: 
// - /components/TeamCard.vue ($id_5e2e1b2d)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9644598b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TeamCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { data } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch("https://statsapi.web.nhl.com/api/v1/teams")), __temp = await __temp, __restore(), __temp);
    const __returned__ = { data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_3__.resolveComponent("Head");
  const _component_Script = __vite_ssr_import_3__.resolveComponent("Script");
  const _component_TeamCard = __vite_ssr_import_0__.default;
  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_4__.ssrRenderComponent(_component_Script, {
          defer: "",
          "data-domain": "propz.vercel.app",
          src: "https://plausible.io/js/plausible.js"
        }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_Script, {
            defer: "",
            "data-domain": "propz.vercel.app",
            src: "https://plausible.io/js/plausible.js"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section><h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2><div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.data.teams, (team) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_TeamCard, {
      team,
      key: team.id
    }, null, _parent));
  });
  _push(`<!--]--></div></section></main>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/pages/teams/index.vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_1ce20c25 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /middleware/auth.ts ($id_7b92aa86)
// - /middleware/guest.ts ($id_c862a572)
// --------------------
const $id_c4b3f06e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {
  auth: () => __vite_ssr_dynamic_import__('/middleware/auth.ts'),
  guest: () => __vite_ssr_dynamic_import__('/middleware/guest.ts')
}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /middleware/auth.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs ($id_c4b3f06e)
// Dependencies: 
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /composables/useAuth.ts ($id_ba05bb26)
// --------------------
const $id_7b92aa86 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  const user = (([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>__vite_ssr_import_2__.useUser())),__temp=await __temp,__restore(),__temp);
  if (user == null && user == void 0) {
    return "/";
  }
},1);
;
}


// --------------------
// Request: /middleware/guest.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs ($id_c4b3f06e)
// Dependencies: 
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /composables/useAuth.ts ($id_ba05bb26)
// --------------------
const $id_c862a572 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  const user = (([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>__vite_ssr_import_2__.useUser())),__temp=await __temp,__restore(),__temp);
  if (user !== null && user !== void 0) {
    return "/";
  }
},1);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs ($id_d89cfd50)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// --------------------
const $id_a4132d07 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {
  const publicConfig = __vite_ssr_import_0__.useRuntimeConfig().public;
  if (false && publicConfig.content.wsUrl) {
    __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs').then(({ useContentWebSocket }) => useContentWebSocket());
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// --------------------
const $id_575fe152 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");

const logger = {
  log: (...args) => console.log("[Content]", ...args),
  warn: (...args) => console.warn("[Content]", ...args)
};
let ws;
function useContentWebSocket() {
  if (!window.WebSocket) {
    logger.warn("Could not enable hot reload, your browser does not support WebSocket.");
    return;
  }
  const onMessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      if (!data) {
        return;
      }
      __vite_ssr_import_1__.refreshNuxtData();
    } catch (err) {
    }
  };
  const onOpen = () => logger.log("WS connected!");
  const onError = (e) => {
    switch (e.code) {
      case "ECONNREFUSED":
        connect(true);
        break;
      default:
        logger.warn("WS Error:", e);
        break;
    }
  };
  const onClose = (e) => {
    if (e.code === 1e3 || e.code === 1005) {
      logger.log("WS closed!");
    } else {
      connect(true);
    }
  };
  const connect = (retry = false) => {
    if (retry) {
      logger.log("WS reconnecting..");
      setTimeout(connect, 1e3);
      return;
    }
    if (ws) {
      try {
        ws.close();
      } catch (err) {
      }
      ws = void 0;
    }
    const wsURL = `${__vite_ssr_import_0__.useRuntimeConfig().public.content.wsUrl}ws`;
    logger.log(`WS connect to ${wsURL}`);
    ws = new WebSocket(wsURL);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onerror = onError;
    ws.onclose = onClose;
  };
  connect();
  return {
    connect
  };
}
Object.defineProperty(__vite_ssr_exports__, "useContentWebSocket", { enumerable: true, configurable: true, get(){ return useContentWebSocket }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/root-component.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_ff981dfb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/root-component.mjs ($id_ff981dfb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/error-component.mjs ($id_22d03b9f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_22d03b9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/error-component.mjs ($id_22d03b9f)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs ($id_8e1dca9a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/app-component.mjs
// Parents: 
// - /Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry ($id_74742b3b)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_170882f6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/app-component.mjs ($id_170882f6)
// Dependencies: 
// - /components/SiteHeader.vue ($id_01340d67)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/SiteHeader.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "app",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
    nuxtApp.hook("page:finish", () => {
      window.scrollTo(0, 0);
    });
    [__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_3__.useUser()), await __temp, __restore();
    const __returned__ = { nuxtApp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SiteHeader = __vite_ssr_import_0__.default;
  const _component_NuxtPage = __vite_ssr_import_4__.resolveComponent("NuxtPage");
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_SiteHeader, null, null, _parent));
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/app.vue"]]);
;
}


// --------------------
// Request: /components/SiteHeader.vue
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/User.vue ($id_ce2e00d8)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/SiteHeader.vue?vue&type=style&index=0&scoped=true&lang.css ($id_069b350e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_01340d67 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/User.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "SiteHeader",
  setup(__props, { expose }) {
    expose();
    const user = __vite_ssr_import_3__.useState("user");
    const __returned__ = { user };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  const _component_User = __vite_ssr_import_1__.default;
  const _component_nuxt_link = __vite_ssr_import_0__.default;
  _push(`<header${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "site-header" }, _attrs))} data-v-5697464f><div class="wrapper" data-v-5697464f>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "no-underline"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<figure class="site-logo" data-v-5697464f${_scopeId}><h1 data-v-5697464f${_scopeId}>propz</h1></figure>`);
      } else {
        return [
          __vite_ssr_import_4__.createVNode("figure", { class: "site-logo" }, [
            __vite_ssr_import_4__.createVNode("h1", null, "propz")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--  <NuxtLink to="/blog" class="no-underline">
        <figure class="link">
          <p class="transition duration-500 hover:scale-110 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-blue-900 bg-gray-600">Featured Articles</p>
        </figure>
      </NuxtLink> --><nav class="site-nav" data-v-5697464f><ul class="links" data-v-5697464f><div class="flex items-center justify-end md:flex-1 lg:w-0" data-v-5697464f>`);
  if ($setup.user) {
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_User, { user: $setup.user }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<li class="link" data-v-5697464f>`);
  if (!$setup.user) {
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
      to: "/register",
      class: "transition duration-500 hover:scale-110 mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-600"
    }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Sign up `);
        } else {
          return [
            __vite_ssr_import_4__.createTextVNode(" Sign up ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="link" data-v-5697464f>`);
  if (!$setup.user) {
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
      to: "/login",
      class: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Sign in `);
        } else {
          return [
            __vite_ssr_import_4__.createTextVNode(" Sign in ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li></div></ul></nav></div></header>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/SiteHeader.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5697464f"], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/components/SiteHeader.vue"]]);
;
}


// --------------------
// Request: /components/User.vue
// Parents: 
// - /components/SiteHeader.vue ($id_01340d67)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/reactivity/dist/reactivity.cjs.js ($id_85c34493)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ce2e00d8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/reactivity/dist/reactivity.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vueuse/core/index.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "User",
  setup(__props, { expose }) {
    expose();
    const avatar = (given) => given ?? "/img/footballguy2.jpg";
    const user = __vite_ssr_import_3__.useState("user");
    const logout = __vite_ssr_import_2__.userLogout;
    const hideActions = __vite_ssr_import_1__.ref(true);
    const userActions = __vite_ssr_import_1__.ref(null);
    __vite_ssr_import_4__.onClickOutside(userActions, () => hideActions.value = true);
    const __returned__ = { avatar, user, logout, hideActions, userActions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({
    ref: "userActions",
    class: "flex items-center justify-end md:flex-1"
  }, _attrs))}><span class="mr-2"><strong>${__vite_ssr_import_6__.ssrInterpolate($setup.user.username)}</strong></span><img${__vite_ssr_import_6__.ssrRenderAttr("src", $setup.avatar($setup.user.avatarUrl))} class="rounded-full w-10 h-10 mr-2" alt="avatar"><ul class="${__vite_ssr_import_6__.ssrRenderClass([[{ hidden: $setup.hideActions }], "dropdown-menu min-w-max absolute bottom bg-white text-base z-100 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 top- m-0 bg-clip-padding border-none"])}" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-800 hover:bg-gray-400" href="#">logout</a></li><!-- <li>
        <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            " href="#">Another action</a>
      </li>
      <li>
        <a class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            " href="#">Something else here</a>
      </li> --></ul></div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/edwardz_8/vue-projects/nuxt3-zero/components/User.vue"]]);
;
}


// --------------------
// Request: /node_modules/@vueuse/core/index.mjs
// Parents: 
// - /components/User.vue ($id_ce2e00d8)
// Dependencies: 

// --------------------
const $id_e8934cdc = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs\".")
  })


// --------------------
// Request: /components/SiteHeader.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/SiteHeader.vue ($id_01340d67)
// Dependencies: 

// --------------------
const $id_069b350e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".site-header[data-v-5697464f]{--tw-border-opacity:0.3;--tw-bg-opacity:0.4;--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);background-color:rgb(241 245 249/var(--tw-bg-opacity));border-bottom-width:2px;border-color:rgb(255 255 255/var(--tw-border-opacity));padding:1rem;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:20}.site-header>.wrapper[data-v-5697464f]{align-items:center;display:flex;justify-content:space-between;margin:auto;max-width:72rem}.site-logo[data-v-5697464f]{font-size:1.125rem;font-weight:900;line-height:1.75rem}";
}


const __modules__ = {
  "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry": $id_74742b3b,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/paths.mjs": $id_18786cd8,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/css.mjs": $id_96d15167,
  "/assets/css/main.css": $id_f8b2993b,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/plugins/server.mjs": $id_d89cfd50,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/components.plugin.mjs": $id_50656c08,
  "/components/content/InfoBox.vue": $id_e10e5808,
  "/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs": $id_f4cbbc2c,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/imports.mjs": $id_8e1dca9a,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/composables/useComment.ts": $id_662ffe6f,
  "/composables/useLike.ts": $id_6dd93210,
  "/composables/useAuth.ts": $id_ba05bb26,
  "/node_modules/@nuxt/content/dist/runtime/composables/query.mjs": $id_47535763,
  "/node_modules/@nuxt/content/dist/runtime/query/query.mjs": $id_7961d5dc,
  "/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs": $id_e943acfb,
  "/node_modules/@nuxt/content/dist/runtime/utils/json.mjs": $id_45454526,
  "/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs": $id_3db3e041,
  "/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs": $id_eacbabc5,
  "/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs": $id_e209d000,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@heroicons/vue/solid/index.js": $id_a0bb35af,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/components/content/InfoBox.vue?vue&type=style&index=0&scoped=true&lang.css": $id_003dffd4,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs": $id_12ce52f3,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs": $id_8f3d0953,
  "/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs": $id_4c793316,
  "/node_modules/scule/dist/index.mjs": $id_ff332d11,
  "/node_modules/property-information/index.js": $id_882dd793,
  "/node_modules/html-tags/index.js": $id_4503b399,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs": $id_3f801a38,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs": $id_9fab5abb,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs": $id_d2da4ccd,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue": $id_558bf79f,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue": $id_01e2b479,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": $id_19429b58,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css": $id_d7e7fe44,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue": $id_fab9e310,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue": $id_840411f2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue": $id_b479ada6,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue": $id_9c1df7ff,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue": $id_f86082f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue": $id_7f627a67,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue": $id_caec80eb,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue": $id_26303ae9,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue": $id_6f4fac0c,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue": $id_f72b4351,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue": $id_1b78ec5d,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue": $id_2e24a6f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue": $id_0990778f,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue": $id_6d4c23c7,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue": $id_10f5aef2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue": $id_faffa2d8,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue": $id_b51a8b09,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue": $id_07608f57,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue": $id_17b6f147,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue": $id_16f58501,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue": $id_7728c86d,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/meta.config.mjs": $id_228b9c10,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/routes.mjs": $id_8b52cc6c,
  "/pages/blog/[...slug].vue?macro=true": $id_23ff3f9c,
  "/components/Toc.vue": $id_5cbfb66a,
  "/components/Toc.vue?vue&type=style&index=0&scoped=true&lang.css": $id_c6ac83bd,
  "/components/Form.vue": $id_ce31a1a0,
  "/components/PrevNext.vue": $id_fca51e5c,
  "/components/PrevNext.vue?vue&type=style&index=0&scoped=true&lang.css": $id_4be36c1f,
  "/pages/blog/[...slug].vue?vue&type=style&index=0&scoped=true&lang.css": $id_f86f35dd,
  "/pages/blog/index.vue?macro=true": $id_381d5fdd,
  "/components/Tags.vue": $id_3a31b237,
  "/components/Tags.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a21c26c9,
  "/pages/blog/tags/[slug].vue?macro=true": $id_23cb5fd2,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css": $id_4aa9e65e,
  "/pages/login.vue?macro=true": $id_213baa8a,
  "/node_modules/@vue/reactivity/dist/reactivity.cjs.js": $id_85c34493,
  "/pages/register.vue?macro=true": $id_222c4ecc,
  "/pages/teams/[id]/index.vue?macro=true": $id_4d404a17,
  "/components/PlayerCard.vue": $id_89df6488,
  "/pages/teams/[id]/player/[player].vue?macro=true": $id_5609f4a1,
  "/components/Comments.vue": $id_04072223,
  "/pages/teams/index.vue?macro=true": $id_a0b1a380,
  "/components/TeamCard.vue": $id_5e2e1b2d,
  "/pages/blog/[...slug].vue": $id_b8f35669,
  "/pages/blog/index.vue": $id_83c2b1d1,
  "/pages/blog/tags/[slug].vue": $id_399653d9,
  "/pages/index.vue": $id_cca58e97,
  "/pages/login.vue": $id_b0922173,
  "/pages/register.vue": $id_a0bf5dce,
  "/pages/teams/[id]/index.vue": $id_aeed9c79,
  "/pages/teams/[id]/player/[player].vue": $id_b85564a3,
  "/pages/teams/index.vue": $id_9644598b,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/router.options.mjs": $id_1ce20c25,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/middleware.mjs": $id_c4b3f06e,
  "/middleware/auth.ts": $id_7b92aa86,
  "/middleware/guest.ts": $id_c862a572,
  "/node_modules/@nuxt/content/dist/runtime/plugin.mjs": $id_a4132d07,
  "/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs": $id_575fe152,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/root-component.mjs": $id_ff981dfb,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/error-component.mjs": $id_22d03b9f,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/Users/edwardz_8/vue-projects/nuxt3-zero/.nuxt/app-component.mjs": $id_170882f6,
  "/app.vue": $id_2b46e842,
  "/components/SiteHeader.vue": $id_01340d67,
  "/components/User.vue": $id_ce2e00d8,
  "/node_modules/@vueuse/core/index.mjs": $id_e8934cdc,
  "/components/SiteHeader.vue?vue&type=style&index=0&scoped=true&lang.css": $id_069b350e
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/app/entry")