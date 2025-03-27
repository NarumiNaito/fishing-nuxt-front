<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Header.vue";
</script>
<template>
  <div>
    <Header />
    <h2>Defaultのレイアウト</h2>
    <slot />
    <Footer />
  </div>
</template>
