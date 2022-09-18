// ./nuxt.config.ts

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: { title: 'rosterprops' },
  app: { head: { link: [{ rel: 'icon', type: "image/x-icon", href: '/favicon.ico?v2' }] } },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  publicRuntimeConfig: {
    SEASON: process.env.SEASON
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
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
  }
})
