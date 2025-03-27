import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NUXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  withCredentials: true,
  withXSRFToken: true,
});
