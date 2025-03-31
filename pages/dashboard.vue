<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const user = authStore.user;
const isLogin = authStore.isLogin;
</script>
<template>
  <h1>dashboard page</h1>
  <div v-if="isLogin">
    <p>ようこそ、{{ user?.name }}さん！</p>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
