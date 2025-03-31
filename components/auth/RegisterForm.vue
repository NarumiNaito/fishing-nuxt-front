<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { useRegisterSchema } from "@/composable/schema/useFormSchema";

const { $axios } = useNuxtApp();
const authStore = useAuthStore();
const { handleSubmit } = useForm({
  validationSchema: useRegisterSchema,
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

    const { name, email } = requestUser;
    authStore.setUser({ name, email });

    navigateTo("/dashboard");
  } catch (error: any) {
    console.log(error);
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2>お名前</h2>
    <Input name="name" :schema="useRegisterSchema" />
    <h2>メールアドレス</h2>
    <Input name="email" :schema="useRegisterSchema" />
    <h2>パスワード</h2>
    <Input name="formPassword.password" :schema="useRegisterSchema" />
    <h2>パスワード（確認）</h2>
    <Input name="formPassword.passwordConfirm" :schema="useRegisterSchema" />
    <button class="button">送信</button>
  </form>
</template>
