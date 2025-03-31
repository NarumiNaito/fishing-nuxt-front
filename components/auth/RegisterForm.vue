<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { RegisterSchema } from "@/composable/schema/schema";

const { $axios } = useNuxtApp();
console.log($axios);
const { handleSubmit } = useForm({
  validationSchema: RegisterSchema,
});

const onSubmit = handleSubmit(async (data) => {
  const requestUser = {
    name: data.name,
    email: data.email,
    password: data.formPassword.password,
  };
  try {
    await $axios.get("sanctum/csrf-cookie");

    await $axios.post("api/register", requestUser);

    navigateTo("/dashboard");
  } catch (error: any) {
    console.log(error);
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>お名前</h2>
    <Input name="name" :schema="RegisterSchema" />
    <h2>メールアドレス</h2>
    <Input name="email" :schema="RegisterSchema" />
    <h2>パスワード</h2>
    <Input name="formPassword.password" :schema="RegisterSchema" />
    <h2>パスワード（確認）</h2>
    <Input name="formPassword.passwordConfirm" :schema="RegisterSchema" />
    <button class="button">送信</button>
  </form>
</template>
