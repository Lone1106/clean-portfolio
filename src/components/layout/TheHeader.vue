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

				<div
					class="cursor-pointer w-6 text-center"
					@click="toggleDarkMode"
				>
					<transition name="toggle-mode" mode="out-in">
						<i v-if="!isDarkMode" class="fa-solid fa-moon fa-lg"></i>
						<i v-else class="fa-solid fa-sun fa-lg"></i>
					</transition>
				</div>
			</div>
		</header>
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
