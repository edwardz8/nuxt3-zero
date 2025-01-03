import { f as defineNuxtRouteMiddleware, g as executeAsync, h as useUser } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "vue/server-renderer";
import "@vue/reactivity";
import "@vueuse/core";
import "ohash";
import "cookie-es";
const guest = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const user = ([__temp, __restore] = executeAsync(() => useUser()), __temp = await __temp, __restore(), __temp);
  if (user !== null && user !== void 0) {
    return "/";
  }
});
export {
  guest as default
};
//# sourceMappingURL=guest-BnyFTWeS.js.map
