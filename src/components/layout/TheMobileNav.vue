<template>
	<nav
		class="w-full py-4 fixed bottom-0 left-0 z-50 flex items-center justify-between block lg:hidden transition-colors duration-300"
		:class="{
			'bg-light': !isDarkMode,
			'bg-dark': isDarkMode,
			'text-light': isDarkMode,
			'text-dark': !isDarkMode,
		}"
	>
		<ul
			class="w-full flex justify-center items-center text-base md:text-lg"
		>
			<li class="w-1/3 text-center">
				<router-link to="/"
					><i class="fa-solid fa-house mr-2"></i>Home</router-link
				>
			</li>
			<li class="w-1/3 text-center">
				<router-link to="/profile"
					><i class="fa-solid fa-user mr-2"></i>Profile</router-link
				>
			</li>
			<li class="w-1/3 text-center">
				<router-link :to="{ path: '/', hash: '#projects' }"
					><i class="fa-solid fa-file-code mr-2"></i>Projects</router-link
				>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();

	const isDarkMode = computed(() => store.getters.getMode);
</script>
