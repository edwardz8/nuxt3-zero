import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     SEASON: string,

    bdlApiKey: string,

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    content: {
        cacheVersion: number,

        cacheIntegrity: string,

        transformers: Array<string>,

        base: string,

        watch: {
             ws: {
                   port: number,

                   showURL: boolean,
             },
        },

        sources: Array<string>,

        ignores: Array<string>,

        locales: Array<any>,

        defaultLocale: any,

        highlight: {
             theme: {
                   default: string,

                   dark: string,
             },
        },

        markdown: {
             tags: {
                   p: string,

                   a: string,

                   blockquote: string,

                   "code-inline": string,

                   code: string,

                   em: string,

                   h1: string,

                   h2: string,

                   h3: string,

                   h4: string,

                   h5: string,

                   h6: string,

                   hr: string,

                   img: string,

                   ul: string,

                   ol: string,

                   li: string,

                   strong: string,

                   table: string,

                   thead: string,

                   tbody: string,

                   td: string,

                   th: string,

                   tr: string,
             },

             toc: {
                   depth: number,

                   searchDepth: number,
             },

             remarkPlugins: any,

             rehypePlugins: any,
        },

        yaml: any,

        csv: any,

        navigation: {
             fields: Array<any>,
        },
    },
  }
  interface PublicRuntimeConfig {
     SEASON: string,

    bdlApiKey: string,

    content: {
        base: string,

        tags: {
             p: string,

             a: string,

             blockquote: string,

             "code-inline": string,

             code: string,

             em: string,

             h1: string,

             h2: string,

             h3: string,

             h4: string,

             h5: string,

             h6: string,

             hr: string,

             img: string,

             ul: string,

             ol: string,

             li: string,

             strong: string,

             table: string,

             thead: string,

             tbody: string,

             td: string,

             th: string,

             tr: string,
        },

        highlight: {
             theme: {
                   default: string,

                   dark: string,
             },
        },

        wsUrl: string,
    },
  }
}