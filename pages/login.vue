<script setup lang="ts">
import { ref } from "vue";

// ユーザーの入力値を管理するリアクティブな変数
const email = ref("");
const password = ref("");

// ログイン処理
const handleLogin = () => {
  console.log("ログイン情報:", email.value, password.value);
  alert("ログインボタンが押されました！");
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <UCard class="w-full max-w-md">
      <!-- ヘッダー部分 -->
      <template #header>
        <h2 class="text-xl font-bold text-center">ログイン</h2>
      </template>

      <!-- フォーム本体 -->
      <form @submit.prevent="handleLogin" class="space-y-2">
        <div>メールアドレス</div>
        <UInput v-model="email" type="email" placeholder="メールアドレス" required />
        <div>パスワード</div>
        <UInput v-model="password" type="password" placeholder="パスワード" required />

        <UButton type="submit" color="primary" block>ログイン</UButton>
      </form>

      <!-- フッター部分 -->
      <template #footer>
        <p class="text-center text-sm">
          アカウントをお持ちでないですか？
          <NuxtLink to="/register" class="text-primary hover:underline">新規登録</NuxtLink>
        </p>
      </template>
    </UCard>
  </div>
</template>
