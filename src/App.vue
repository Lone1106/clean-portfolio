<template>
  <div
    :class="{ lightMode: !isDarkMode, darkMode: isDarkMode }"
    class="transition-colors duration-500"
  >
    <div class="px-10 max-w-[650px] mx-auto relative bg-inherit">
      <the-header></the-header>
      <the-mobile-nav></the-mobile-nav>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="route-change" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <the-footer></the-footer>
    </div>
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
    background: #121212;
    color: #f5f5f5;
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
  import TheMobileNav from "./components/layout/TheMobileNav.vue";

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
