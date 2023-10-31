<template>
  <div class="px-12 md:px-40 xl:px-[530px]">
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    font-family: "Inter", sans-serif;
    background: #f9f9f9;
    color: #212121;
  }
</style>

<script setup>
  import TheHeader from "./components/layout/TheHeader.vue";
  import TheFooter from "./components/layout/TheFooter.vue";
</script>
