// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ['@element-plus/nuxt', '@vueuse/nuxt'],
   css: ['~/assets/css/main.css'],
   devtools: { enabled: true }
})
