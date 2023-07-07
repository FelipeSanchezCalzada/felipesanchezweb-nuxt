// https://nuxt.com/docs/api/configuration/nuxt-config
import {ConfigLayerMeta, InputConfig} from 'c12';
import {NuxtConfig} from '@nuxt/schema';
import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css"
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
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {},

} as InputConfig<NuxtConfig, ConfigLayerMeta>)
