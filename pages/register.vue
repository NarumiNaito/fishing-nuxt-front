<script setup lang="ts">
import RegisterForm from "~/components/auth/RegisterForm.vue";
import "./assets/index.scss";
import "./assets/reset.scss";
</script>

<template>
  <div class="form-area">
    <div class="title">
      <i class="ri-mail-line" />
      新規登録
    </div>
    <RegisterForm />
  </div>
</template>
