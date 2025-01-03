import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"material-theme-palenight","dark":"github-dark"}}