<template>
	<header
		id="mainNav"
		class="w-full flex items-center justify-between py-8 lg:fixed lg:top-0 lg:left-1/2 lg:-translate-x-1/2 max-w-[650px] lg:px-10 z-50 transition-colors duration-300"
		:class="{
			'bg-light': !isDarkMode,
			'bg-dark': isDarkMode,
			'text-light': isDarkMode,
			'text-dark': !isDarkMode,
		}"
	>
		<div>
			<router-link to="/">
				<transition name="logo-fade" mode="out-in">
					<img :src="Logo" alt="RJ Logo" class="w-6" v-if="!isDarkMode" />
					<img :src="LogoWhite" alt="RJ Logo" class="w-6" v-else />
				</transition>
			</router-link>
		</div>

		<div class="flex justify-end items-center gap-6">
			<nav class="hidden lg:block">
				<ul class="flex justify-end items-center gap-4 text-lg">
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li>
						<router-link to="/profile">Profile</router-link>
					</li>
					<li>
						<router-link :to="{ path: '/', hash: '#projects' }"
							>Projects</router-link
						>
					</li>
				</ul>
			</nav>

			<div
				class="cursor-pointer w-6 text-center hidden lg:block"
				@click="toggleDarkMode"
			>
				<transition name="toggle-mode" mode="out-in">
					<i v-if="!isDarkMode" class="fa-solid fa-moon fa-lg"></i>
					<i v-else class="fa-solid fa-sun fa-lg"></i>
				</transition>
			</div>
		</div>
	</header>
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

	.logo-fade-enter-from,
	.logo-fade-leave-to {
		opacity: 0;
	}

	.logo-fade-enter-active,
	.logo-fade-leave-active {
		transition: all 0.3s ease;
	}

	.logo-fade-enter-to,
	.logo-fade-leave-from {
		opacity: 1;
	}
</style>

<script setup>
	import { useStore } from "vuex";
	import { computed, ref } from "vue";
	import Logo from "../../assets/logo.webp";
	import LogoWhite from "../../assets/logo-white.webp";

	const store = useStore();

	const toggleDarkMode = () => store.dispatch("setMode");

	const isDarkMode = computed(() => store.getters.getMode);
</script>
