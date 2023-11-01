<template>
  <div
    class="px-12 md:px-40 xl:px-[400px] 2xl:px-[530px] lightMode transition-colors duration-500"
    :class="{ darkMode: isDarkMode }"
  >
    <the-header></the-header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="route-change" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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

  .route-change-enter-from,
  .route-change-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  .route-change-enter-active {
    transition: all 0.3s ease-in;
  }

  .route-change-leave-active {
    transition: all 0.3s ease-out;
  }

  .route-change-enter-to,
  .route-change-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<script setup>
  import { useStore } from "vuex";
  import { computed } from "vue";

  import TheHeader from "./components/layout/TheHeader.vue";
  import TheFooter from "./components/layout/TheFooter.vue";

  const store = useStore();

  const isDarkMode = computed(() => store.getters.getMode);
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    store.dispatch("setDarkModeActive");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        store.dispatch("setDarkModeActive");
      } else {
        store.dispatch("setDarkModeInactive");
      }
    });
</script>
