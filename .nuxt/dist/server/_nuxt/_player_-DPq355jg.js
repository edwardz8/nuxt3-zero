import { H as Head } from "./components-xb_NwH6n.js";
import { ref, withAsyncContext, computed, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { m as matchPlayerImage } from "./methods-Dr2_CXld.js";
import { g as getUserLikes } from "./useLike-C3EBfnqv.js";
import { b as useRoute, e as useState, d as useNuxtApp } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "hookable";
import "./index-BkN0T-RA.js";
import "@unhead/shared";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "ufo";
import "@vue/reactivity";
import "@vueuse/core";
import "ohash";
import "cookie-es";
const _imports_0 = publicAssetsURL("/img/footballguy2.jpg");
async function getPlayerComments(playerId) {
  const comment = await $fetch("/api/comment/getComments?playerId=" + playerId, { method: "GET" });
  return comment;
}
const _sfc_main$1 = {
  __name: "Comments",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const playerComments = ref([]);
    const comment = ref("");
    const commenting = ref(false);
    const user = useState("user");
    playerComments.value = ([__temp, __restore] = withAsyncContext(() => getPlayerComments(route.params.player)), __temp = await __temp, __restore(), __temp);
    const userComment = computed(() => {
      if (!user.value) return false;
      const index = playerComments.value.findIndex((comment2) => comment2.userId === user.value.id);
      return index > -1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "p-4 bg-white border-t rounded-none rounded-md dark:bg-gray-800 dark:border-gray-700",
        role: "alert"
      }, _attrs))}><h3 class="ml-3 font-bold mb-3 text-white">Comments</h3><form class="w-full d-flex flex-col"><input${ssrRenderAttr("value", unref(comment))} required type="text" placeholder="Enter Comment" class="py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"><button class="ml-auto block w-20 mt-2 py-2 px-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">`);
      if (unref(commenting)) {
        _push(`<div class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading"><span class="sr-only">Loading...</span></div>`);
      } else {
        _push(`<!--[--> Submit <!--]-->`);
      }
      _push(`</button></form><div class="flex flex-col pt-3"><!--[-->`);
      ssrRenderList(unref(playerComments), (comment2, i) => {
        _push(`<div class="ml-3 mb-2 py-2 border-t border-gray-200"><div class="flex gap-3 items-center"><img${ssrRenderAttr("src", _imports_0)} class="rounded-full w-10 h-10" alt="avatar"><div><h4 class="text-base m-0 leading-3">${ssrInterpolate(comment2.user.name)}</h4><span class="text-xs leading-3">@${ssrInterpolate(comment2.user.username)}</span></div>`);
        if (unref(userComment)) {
          _push(`<button class="p-2 ml-auto"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9C7.897 2 7 2.897 7 4V5H3V7H5V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V7H21V5H17V4C17 2.897 16.103 2 15 2ZM9 4H15V5H9V4ZM17 20H7V7H17V20Z" fill="#192038"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-base mt-2 text-gray-700 dark:text-gray-400 ml-12">${ssrInterpolate(comment2.comment)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[player]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const player = ref(null);
    ref(null);
    ref(false);
    const playerLikes = ref([]);
    const user = useState("user");
    const nuxtApp = useNuxtApp();
    const likes = ([__temp, __restore] = withAsyncContext(() => getUserLikes(route.params.player)), __temp = await __temp, __restore(), __temp);
    playerLikes.value = likes[+route.params.player] ? likes[+route.params.player] : [];
    const isLiked = computed(() => {
      if (!user.value) return false;
      return playerLikes.value.find((like) => like.userId == user.value.id) ? true : false;
    });
    computed(() => {
      return playerLikes.value.find((like) => like.userId == user.value.id);
    });
    const currentSeasonStats = computed(() => {
      var _a;
      return (_a = player.value) == null ? void 0 : _a.seasonTotals.find((season) => {
        return season.season === +nuxtApp.$config.public.SEASON;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Head = Head;
      const _component_Script = resolveComponent("Script");
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
      _push(`<section>`);
      if (unref(player)) {
        _push(`<div class="md:w-1/2 md:mx-auto mt-4 mx-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h2 class="text-2xl font-bold text-gray-800 dark:text-white text-center">${ssrInterpolate(unref(player).firstName.default + " " + unref(player).lastName.default)}</h2><img class="mx-auto rounded-t-xl w-32"${ssrRenderAttr("src", unref(player).headshot || unref(matchPlayerImage)(unref(player).firstName.default + " " + unref(player).lastName.default))} alt="Player Profile"><h5 class="text-md font-bold text-gray-800 dark:text-white text-center">${ssrInterpolate((_b = (_a = unref(player)) == null ? void 0 : _a.fullTeamName) == null ? void 0 : _b.default)}</h5><div class="mt-4 flex justify-center space-between"><div class="mr-2"><p class="mb-4 text-gray-800 dark:text-gray-400"> Height: ${ssrInterpolate((_c = unref(player)) == null ? void 0 : _c.heightInCentimeters)} cm </p>`);
        if (unref(currentSeasonStats)) {
          _push(`<!--[--><p class="mt-4 mb-4 font-bold text-white"> SPG: <span class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md">${ssrInterpolate((unref(currentSeasonStats).shots / unref(currentSeasonStats).gamesPlayed).toFixed(2))}</span></p><p class="mt-4 mb-4 font-bold text-white"> Goals Against: <span class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md">${ssrInterpolate(unref(currentSeasonStats).goalsAgainst)}</span></p><p class="mt-4 mb-4 font-bold text-white"> Saves: ${ssrInterpolate(unref(currentSeasonStats).saves)}</p><p class="mt-4 mb-4 text-white font-bold"> Games: ${ssrInterpolate(unref(currentSeasonStats).gamesPlayed)}</p><p class="mt-4 mb-4 font-bold text-white"> GPG: <span class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md">${ssrInterpolate((unref(currentSeasonStats).goals / unref(currentSeasonStats).gamesPlayed).toFixed(2))}</span></p><p class="font-bold text-white"> Assists: ${ssrInterpolate(unref(currentSeasonStats).assists)}</p><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(currentSeasonStats)) {
          _push(`<div class="ml-2"><p class="mb-4 text-gray-800 dark:text-gray-400"> Season: ${ssrInterpolate(unref(currentSeasonStats).season)}</p><p class="font-bold mt-4 mb-4 text-white"><span> Shots: ${ssrInterpolate(unref(currentSeasonStats).shots)}</span></p><p class="font-bold mt-4 mb-4 text-white"> Games Started: <span class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md">${ssrInterpolate(unref(currentSeasonStats).gamesStarted)}</span></p><p class="font-bold mt-4 mb-4 text-white"> Shots Against: ${ssrInterpolate(unref(currentSeasonStats).shotsAgainst)}</p><p class="mt-4 mb-4 text-white font-bold"> Hits: ${ssrInterpolate(unref(currentSeasonStats).hits)}</p><p class="text-white font-bold">Goals: ${ssrInterpolate(unref(currentSeasonStats).goals)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(isLiked)) {
          _push(`<button class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-500 font-semibold text-blue-500 focus:outline-none transition-all text-sm"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z" fill="#2F80ED"></path></svg><span>${ssrInterpolate(unref(playerLikes).length)} Likes</span></button>`);
        } else {
          _push(`<button type="button" class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z" fill="#222B45"></path></svg><span>${ssrInterpolate(unref(playerLikes).length)} Likes</span></button>`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teams/[id]/player/[player].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_player_-DPq355jg.js.map
