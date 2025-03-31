// plugins/pinia.js
import piniaPersist from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = usePinia();
  pinia.use(piniaPersist);
  nuxtApp.vueApp.use(pinia);
});
