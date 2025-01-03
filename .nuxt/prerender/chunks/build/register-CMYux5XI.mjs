import { _ as __nuxt_component_0 } from './Features-BwLxzWem.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './virtual_public-BzpJCmQC.mjs';
import { ref } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js';
import '../nitro/nitro.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ufo/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unified/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-parse/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-rehype/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/defu/dist/defu.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/remark-gfm/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-external-links/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/rehype-raw/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/detab/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/scule/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hast-util-to-string/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/github-slugger/index.js';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/destr/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/hookable/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/klona/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/radix3/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/pathe/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/ohash/dist/index.mjs';
import './server.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/unhead/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref(null);
    const password = ref(null);
    const username = ref(null);
    const name = ref(null);
    const errors = ref(/* @__PURE__ */ new Map());
    let response = ref({ hasErrors: false });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Features = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full"><div class="flex"><img class="mx-auto h-24 w-auto"${ssrRenderAttr("src", _imports_0)} alt="rotorink logo"></div><div><h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900">Sign Up</h2></div>`);
      if (unref(response).hasErrors && unref(errors)) {
        _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert"><strong class="font-bold">Oops, try again! </strong><ul class="block sm:inline"><!--[-->`);
        ssrRenderList(unref(errors), ([key, value]) => {
          _push(`<li>${ssrInterpolate(value.check.errorMessage)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="mt-8 space-y-6" action="#" method="POST"><input type="hidden" name="remember" value="true"><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="name" class="sr-only">name</label><input${ssrRenderAttr("value", unref(name))} id="name" name="name" required class="${ssrRenderClass([unref(errors).has("name") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="name"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">username</label><input type="email"${ssrRenderAttr("value", unref(username))} id="username" name="username" required class="${ssrRenderClass([unref(errors).has("username") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="username"></div></div><div class="rounded-md shadow-sm -space-y-px mb-1"><div><label for="email-address" class="sr-only">email</label><input${ssrRenderAttr("value", unref(email))} id="email-address" name="email" type="email" autocomplete="email" required class="${ssrRenderClass([unref(errors).has("email") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="email address"></div></div><div><label for="password" class="sr-only">password</label><input${ssrRenderAttr("value", unref(password))} id="password" name="password" type="password" autocomplete="current-password" required class="${ssrRenderClass([unref(errors).has("password") ? " border-red-500" : "", "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"])}" placeholder="password"></div><div class="flex items-center justify-between"><div class="text-sm"><a href="#" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a></div></div></form><button class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> register </button></div></div>`);
      _push(ssrRenderComponent(_component_Features, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-CMYux5XI.mjs.map
