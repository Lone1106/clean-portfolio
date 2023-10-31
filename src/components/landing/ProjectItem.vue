<template>
	<figure
		class="flex flex-col md:flex-row items-center justify-between w-full"
	>
		<div class="w-full mb-4 md:mb-0 md:w-2/4">
			<img :src="image" :alt="alt" class="-translate-x-8" />
		</div>

		<div class="w-full md:w-2/3 flex flex-col justify-between">
			<div class="mb-4">
				<h4 class="text-lg font-bold mb-2">{{ title }}</h4>
				<p class="text-base md:text-lg">
					{{ shortDescr }}
				</p>
			</div>

			<router-link :to="link" class="text-xs"
				>Read more <i class="fa-solid fa-arrow-right-long"></i
			></router-link>
		</div>
	</figure>
</template>

<script setup>
	const props = defineProps([
		"id",
		"slug",
		"title",
		"shortDescr",
		"image",
		"alt",
	]);

	const link = `/project/${props.slug}`;
</script>
