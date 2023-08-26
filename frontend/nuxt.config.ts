
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css",
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',],

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  


  ],

  devtools: {
    enabled: true
  }
})