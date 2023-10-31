<template>
	<section class="py-12" id="projects">
		<h2 class="font-bold text-4xl mb-10">My recent projects</h2>
		<div class="flex flex-col gap-16">
			<project-item></project-item>
			<project-item></project-item>
			<project-item></project-item>
		</div>
	</section>
</template>

<script setup>
	import ProjectItem from "./ProjectItem.vue";
</script>
