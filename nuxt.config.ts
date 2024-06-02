// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-feather-icons",
    "@vueuse/motion/nuxt",
  ],
});
