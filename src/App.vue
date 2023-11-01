<template>
  <div
    class="px-12 md:px-40 xl:px-[530px] lightMode transition-colors duration-500"
    :class="{ darkMode: isDarkMode }"
  >
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
  }

  .lightMode {
    background: #f9f9f9;
    color: #212121;
  }

  .darkMode {
    background: #212121;
    color: #f9f9f9;
  }
</style>

<script setup>
  import { useStore } from "vuex";
  import { computed } from "vue";

  import TheHeader from "./components/layout/TheHeader.vue";
  import TheFooter from "./components/layout/TheFooter.vue";

  const store = useStore();

  const isDarkMode = computed(() => store.getters.getMode);
</script>
