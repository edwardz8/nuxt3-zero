import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "guest"
declare module "/home/afzaal/Fiverr/nuxt3-zero/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}