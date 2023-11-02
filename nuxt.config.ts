// https://nuxt.com/docs/api/configuration/nuxt-config
import {ConfigLayerMeta, InputConfig} from 'c12';
import {NuxtConfig} from '@nuxt/schema';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
          { rel: 'icon', type: 'image/svg+xml', href: "/favicon.svg" }
      ]
    }
  },
  routeRules: {
    '/': {redirect: '/home'}
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  build: {
    transpile: ["primevue"]
  },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  content: {
    highlight: {
      theme: 'dracula',
      preload: [
          'python'
      ]
    },
  },
} as InputConfig<NuxtConfig, ConfigLayerMeta>)
