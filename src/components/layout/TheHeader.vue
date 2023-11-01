<template>
	<div class="relative">
		<header class="w-full flex items-center justify-between py-8">
			<div>
				<router-link to="/">
					<img :src="Logo" alt="RJ Logo" class="w-6" v-if="!isDarkMode" />
					<img :src="LogoWhite" alt="RJ Logo" class="w-6" v-else />
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
					</ul>
				</nav>

				<div class="cursor-pointer w-6 text-center">
					<transition name="toggle-mode" mode="out-in">
						<i
							v-if="!isDarkMode"
							class="fa-solid fa-moon fa-lg"
							@click="toggleDarkMode"
						></i>
						<i
							v-else
							class="fa-solid fa-sun fa-lg"
							@click="toggleDarkMode"
						></i>
					</transition>
				</div>

				<div class="block lg:hidden" @click="toggleMenu">
					<i
						class="fa-solid text-dark fa-bars-staggered fa-xl rotate-180 cursor-pointer"
						:class="{ 'text-light': isDarkMode }"
					></i>
				</div>
			</div>
		</header>

		<nav
			class="lg:hidden fixed w-full h-screen inset-0 z-50 flex items-center justify-center transition-all duration-500"
			:class="{
				isHidden: !isMenuOpen,
				isVisible: isMenuOpen,
				'bg-light': !isDarkMode,
				'bg-dark': isDarkMode,
			}"
		>
			<div
				class="absolute top-8 right-12 md:right-40 cursor-pointer"
				@click="toggleMenu"
			>
				<i class="fa-solid fa-xmark fa-2xl"></i>
			</div>

			<ul class="flex flex-col justify-center items-center gap-8 text-2xl">
				<li @click="toggleMenu">
					<router-link to="/">Home</router-link>
				</li>
				<li @click="toggleMenu">
					<router-link to="/profile">Profile</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
	import { useStore } from "vuex";
	import { computed, ref } from "vue";
	import Logo from "../../assets/logo.webp";
	import LogoWhite from "../../assets/logo-white.webp";

	const store = useStore();

	const toggleDarkMode = () => store.dispatch("setMode");

	const isDarkMode = computed(() => store.getters.getMode);

	const isMenuOpen = ref(false);
	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value;
	};
</script>

<style scoped>
	.isHidden {
		visibility: hidden;
		opacity: 0;
	}

	.isVisible {
		visibility: visible;
		opacity: 1;
	}

	.toggle-mode-enter-from,
	.toggle-mode-leave-to {
		transform: translateY(30px);
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
