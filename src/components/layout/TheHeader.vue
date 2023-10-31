<template>
	<header class="w-full flex items-center justify-between py-8">
		<div>
			<img :src="Logo" alt="RJ Logo" class="w-6" />
		</div>
		<div class="hidden lg:block">
			<ul class="flex justify-end items-center gap-4 text-dark">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/profile">Profile</router-link>
				</li>
				<li>
					<a href="/home/#projects">Projects</a>
				</li>
			</ul>
		</div>
		<div class="block lg:hidden cursor-pointer">
			<i class="fa-solid text-dark fa-bars-staggered fa-xl rotate-180"></i>
		</div>
	</header>
</template>

<script setup>
	import Logo from "../../assets/logo.webp";
</script>
