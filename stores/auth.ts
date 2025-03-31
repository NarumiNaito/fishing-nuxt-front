import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useCookie } from "#app";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<{ name: string; email: string } | null>(null);
    const isLogin = ref(false);

    const setUser = (userData: { name: string; email: string }) => {
      user.value = userData;
      isLogin.value = true;
    };

    const logout = () => {
      user.value = null;
      isLogin.value = false;
    };

    const isAuthenticated = computed(() => isLogin.value);

    return {
      user,
      isLogin,
      setUser,
      logout,
      isAuthenticated,
    };
  },
  {
    persist: {
      key: "auth",
      storage: {
        getItem: (key) => useCookie(key).value || null,
        setItem: (key, value) => {
          useCookie(key, { maxAge: 60 * 60 * 24 * 7, sameSite: "strict" }).value = value;
        },
      },
    },
  }
);
