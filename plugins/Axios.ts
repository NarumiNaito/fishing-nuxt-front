import { useRuntimeConfig } from "#imports";
import Axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const axios = Axios.create({
    baseURL: config.public.API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    withCredentials: true,
    withXSRFToken: true,
  });

  return {
    provide: {
      axios,
    },
  };
});
