<script setup lang="ts">
import { useForm } from "vee-validate";
import Input from "../Input.vue";
import { LoginSchema } from "@/composable/schema/schema";

const { handleSubmit } = useForm({
  validationSchema: LoginSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
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
