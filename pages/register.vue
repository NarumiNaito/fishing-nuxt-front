<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  console.log("ログイン情報:", email.value, password.value);
  alert("ログインボタンが押されました！");
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">ログイン</h2>
      </template>

      <form @submit.prevent="handleRegister" class="space-y-2">
        <div>名前</div>
        <UInput v-model="name" type="name" placeholder="名前" required />
        <div>メールアドレス</div>
        <UInput v-model="email" type="email" placeholder="メールアドレス" required />
        <div>パスワード</div>
        <UInput v-model="password" type="password" placeholder="パスワード" required />
        <div>パスワード再入力</div>
        <UInput v-model="confirmPassword" type="password" placeholder="パスワード再入力" required />

        <UButton type="submit" color="primary" block>ログイン</UButton>
      </form>

      <template #footer>
        <p class="text-center text-sm">
          ログインはこちら
          <NuxtLink to="/login" class="text-primary hover:underline">ログイン</NuxtLink>
        </p>
      </template>
    </UCard>
  </div>
</template>
