// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/scripts", "@nuxt/test-utils"],
  css: [
    "vuetify/styles", // Vuetifyのスタイルをインポート
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "~/plugins/vuetify.ts" }],
  content: {
    watch: { enabled: false },
  },
});
