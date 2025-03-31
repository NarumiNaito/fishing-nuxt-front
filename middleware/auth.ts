import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuthStore } from "@/stores/auth";
import { useCookie } from "#app";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const authCookie = useCookie("auth");

  // ログイン状態をチェック (Pinia または クッキー)
  const isAuthenticated = authStore.isLogin || !!authCookie.value;

  if (!isAuthenticated) {
    return navigateTo("/login"); // 未ログインならログインページへリダイレクト
  }
});
