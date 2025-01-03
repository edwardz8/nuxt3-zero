// ./nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // meta: { title: 'rotorink' },
  app: { head: { link: [{ rel: 'icon', type: "image/x-icon", href: '/favicon.ico?v2' }] } },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  runtimeConfig: {
    bdlApiKey: process.env.BDL_API_KEY,
    public: {
      SEASON: process.env.SEASON,
    }
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-theme-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  build: {
    transpile: ['chart.js']
  },

  compatibilityDate: '2024-12-28'
})
