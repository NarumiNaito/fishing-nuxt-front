<template>
  <UContainer class="bg-teal-100">
    <nav class="flex items-center justify-between py-4">
      <div class="flex items-center space-x-4">
        <UIcon name="i-heroicons-home" class="w-8 h-8 text-primary" />
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="hover:text-primary">ホーム</NuxtLink></li>
          <li><NuxtLink to="/page1" class="hover:text-primary">サービス</NuxtLink></li>
          <!-- <li><NuxtLink to="/contact" class="hover:text-primary">お問い合わせ</NuxtLink></li> -->
        </ul>
      </div>
      <div class="flex space-x-2">
        <NuxtLink to="/login">
          <UButton color="primary" variant="outline">ログイン</UButton>
        </NuxtLink>
        <NuxtLink to="/register">
          <UButton color="primary">新規登録</UButton>
        </NuxtLink>
      </div>
    </nav>
  </UContainer>
</template>
