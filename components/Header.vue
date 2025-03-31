<template>
  <v-app-bar :elevation="12" class="d-flex align-center px-4">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <div class="d-flex align-center">
      <v-app-bar-title class="mr-4">App Bar</v-app-bar-title>
      <div class="d-flex">
        <NuxtLink to="/" class="mx-2 text-primary">ホーム</NuxtLink>
        <NuxtLink to="/page1" class="mx-2 text-primary">サービス</NuxtLink>
      </div>
    </div>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <div class="d-flex">
        <NuxtLink to="/login" class="mx-2 text-primary">ログイン</NuxtLink>
        <NuxtLink to="/register" class="mx-2 text-primary">新規登録</NuxtLink>
      </div>
    </template>
  </v-app-bar>
</template>
