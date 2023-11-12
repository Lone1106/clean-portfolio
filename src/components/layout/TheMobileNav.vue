<template>
	<nav
		class="w-full py-4 px-6 fixed bottom-0 left-0 z-50 flex items-center justify-center block lg:hidden transition-colors duration-300 border-t gap-8"
		:class="{
			'bg-light': !isDarkMode,
			'bg-dark': isDarkMode,
			'text-light': isDarkMode,
			'text-dark': !isDarkMode,
			'border-dark': !isDarkMode,
			'border-light': isDarkMode,
		}"
	>
		<ul
			class="flex justify-center items-center text-base md:text-lg gap-6"
		>
			<li class="text-center">
				<router-link to="/"
					><i class="fa-solid fa-house mr-2"></i>Home</router-link
				>
			</li>
			<li class="text-center">
				<router-link to="/profile"
					><i class="fa-solid fa-user mr-2"></i>Profile</router-link
				>
			</li>
			<li class="text-center">
				<router-link :to="{ path: '/', hash: '#projects' }"
					><i class="fa-solid fa-file-code mr-2"></i>Projects</router-link
				>
			</li>
		</ul>

		<div class="cursor-pointer w-6 text-center" @click="toggleDarkMode">
			<transition name="toggle-mode" mode="out-in">
				<i v-if="!isDarkMode" class="fa-solid fa-moon fa-lg"></i>
				<i v-else class="fa-solid fa-sun fa-lg"></i>
			</transition>
		</div>
	</nav>
</template>

<style scoped>
	.toggle-mode-enter-from,
	.toggle-mode-leave-to {
		transform: translateY(10px);
		opacity: 0;
	}

	.toggle-mode-enter-active,
	.toggle-mode-leave-active {
		transition: all 0.25s ease;
	}

	.toggle-mode-enter-to,
	.toggle-mode-leave-from {
		transform: translateY(0);
		opacity: 1;
	}
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();

	const toggleDarkMode = () => store.dispatch("setMode");

	const isDarkMode = computed(() => store.getters.getMode);
</script>
