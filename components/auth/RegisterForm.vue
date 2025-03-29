<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { RegisterSchema } from "@/composable/schema/schema";

const { handleSubmit } = useForm({
  validationSchema: RegisterSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
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
