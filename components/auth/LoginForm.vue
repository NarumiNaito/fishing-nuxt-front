<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { useLoginSchema } from "@/composable/schema/useFormSchema";
import { useAuthStore } from "~/stores/auth";

const { $axios } = useNuxtApp();
const authStore = useAuthStore();
const { handleSubmit } = useForm({
  validationSchema: useLoginSchema,
});

const onSubmit = handleSubmit(async (data) => {
  const requestUser = {
    email: data.email,
    password: data.password,
  };
  try {
    await $axios.get("sanctum/csrf-cookie");

    await $axios.post("api/login", requestUser);

    const response = await $axios.get("api/user");
    console.log(response);
    const { name, email } = response.data[0];
    authStore.setUser({ name, email });

    navigateTo("/dashboard");
  } catch (error: any) {
    console.log(error);
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>メールアドレス</h2>
    <Input name="email" :schema="useLoginSchema" />
    <h2>パスワード</h2>
    <Input name="password" :schema="useLoginSchema" />
    <button class="button">送信</button>
  </form>
</template>
