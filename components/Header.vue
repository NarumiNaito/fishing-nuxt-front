<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const { $axios } = useNuxtApp();
const authStore = useAuthStore();

const isLogin = authStore.isLogin;
const isLogout = authStore.logout;

const handleLogout = async () => {
  const confirmLogout = window.confirm("本当にログアウトしますか？");

  if (confirmLogout) {
    try {
      await $axios.get("sanctum/csrf-cookie");

      await $axios.post("api/user/logout");

      isLogout();
      navigateTo("/");
    } catch (error: any) {
      console.log(error);
    }
  }
};
</script>

<template>
  <v-app-bar :elevation="12" class="d-flex align-center px-4">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <div class="d-flex align-center">
      <v-app-bar-title class="mr-4">App Bar</v-app-bar-title>
      <div class="d-flex">
        <div v-if="!isLogin">
          <NuxtLink to="/" class="mx-2 text-primary">ホーム</NuxtLink>
          <NuxtLink to="/page1" class="mx-2 text-primary">サービス</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/dashboard" class="mx-2 text-primary">ダッシュボード</NuxtLink>
        </div>
      </div>
    </div>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <div class="d-flex">
        <div v-if="!isLogin">
          <NuxtLink to="/login" class="mx-2 text-primary">ログイン</NuxtLink>
          <NuxtLink to="/register" class="mx-2 text-primary">新規登録</NuxtLink>
        </div>
        <div v-else>
          <v-btn @click="handleLogout" class="mx-2 text-primary">ログアウト</v-btn>
        </div>
      </div>
    </template>
  </v-app-bar>
</template>
