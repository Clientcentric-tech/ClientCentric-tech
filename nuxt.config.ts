// @ts-ignore
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// @ts-ignore
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options: any, nuxt: { hooks: { hook: (arg0: string, arg1: (config: { plugins: any[] }) => void) => void } }) => {
      nuxt.hooks.hook('vite:extendConfig', (config: { plugins: any[] }) => {
        config.plugins?.push(vuetify({autoImport: true}))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true}
})
