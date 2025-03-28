<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const schema = toTypedSchema(
  z.object({
    email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
    password: z.string().min(6, { message: "パスワードは6文字以上入力してください" }),
  })
);

const submit = (values: SubmitEventInit) => {
  console.log("ログイン情報:", values);
  alert("ログインボタンが押されました！");
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">ログイン</h2>
      </template>

      <Form :validation-schema="schema" @submit="submit" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium">メールアドレス</label>
          <Field
            name="email"
            placeholder="メールアドレスを入力してください
          "
            type="email"
            class="w-full border rounded"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium">パスワード</label>
          <Field
            name="password"
            placeholder="パスワードを入力してください
          "
            type="password"
            class="w-full border rounded"
          />
          <ErrorMessage name="password" class="text-red-500 text-sm" />
        </div>

        <UButton type="submit" color="primary" block>ログイン</UButton>
      </Form>

      <template #footer>
        <p class="text-center text-sm">
          アカウントをお持ちでないですか？
          <NuxtLink to="/register" class="text-primary hover:underline">新規登録</NuxtLink>
        </p>
      </template>
    </UCard>
  </div>
</template>
