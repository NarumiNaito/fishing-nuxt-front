<template>
  <div class="d-flex flex-column min-h-screen">
    <Header />

    <div class="bg-gray-100 pb-16" style="padding-top: 150px">
      <slot />
    </div>

    <Footer />
  </div>
</template>
