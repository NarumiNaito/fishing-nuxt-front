// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000",
    },
  },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/scripts", "@pinia/nuxt", "@nuxt/test-utils"],
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "~/plugins/vuetify.ts" }, { src: "~/plugins/pinia.ts" }],
  content: {
    watch: { enabled: false },
  },
});
