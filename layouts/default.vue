<template>
  <div>
    <h2>Defaultのレイアウト</h2>
    <NuxtLink v-bind:to="{ name: 'index' }">Home</NuxtLink>
    <NuxtLink v-bind:to="{ name: 'page1' }">Page1</NuxtLink>
    <slot />
  </div>
</template>
