import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}