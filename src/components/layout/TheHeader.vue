<template>
	<header class="w-full flex items-center justify-between py-8">
		<div>
			<router-link to="/">
				<img :src="Logo" alt="RJ Logo" class="w-6" />
			</router-link>
		</div>

		<div class="flex justify-end items-center gap-6">
			<div class="hidden lg:block">
				<ul class="flex justify-end items-center gap-4">
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

			<div class="cursor-pointer">
				<i class="fa-solid fa-moon fa-lg"></i>
				<!-- <i class="fa-solid fa-sun fa-lg"></i> -->
			</div>

			<div class="block lg:hidden cursor-pointer">
				<i
					class="fa-solid text-dark fa-bars-staggered fa-xl rotate-180"
				></i>
			</div>
		</div>
	</header>
</template>

<script setup>
	import Logo from "../../assets/logo.webp";
</script>
