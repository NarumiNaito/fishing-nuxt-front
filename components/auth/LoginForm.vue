<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { LoginSchema } from "@/composable/schema/schema";

const { $axios } = useNuxtApp();

const { handleSubmit } = useForm({
  validationSchema: LoginSchema,
});

const onSubmit = handleSubmit(async (data) => {
  const requestUser = {
    email: data.email,
    password: data.password,
  };
  try {
    await $axios.get("sanctum/csrf-cookie");

    await $axios.post("api/login", requestUser);

    navigateTo("/dashboard");
  } catch (error: any) {
    console.log(error);
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>メールアドレス</h2>
    <Input name="email" :schema="LoginSchema" />
    <h2>パスワード</h2>
    <Input name="password" :schema="LoginSchema" />
    <button class="button">送信</button>
  </form>
</template>
