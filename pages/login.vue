<script setup lang="ts">
import LoginForm from "~/components/auth/LoginForm.vue";
import "./assets/index.scss";
import "./assets/reset.scss";
</script>

<template>
  <div class="form-area">
    <div class="title">
      <i class="ri-mail-line" />
      ログイン
    </div>
    <LoginForm />
  </div>
</template>
