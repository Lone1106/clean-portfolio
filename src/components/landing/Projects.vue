<template>
	<section class="py-12" id="projects">
		<h2 class="font-bold text-4xl mb-10">My recent projects</h2>
		<div class="flex flex-col gap-16">
			<project-item
				v-for="p in projects"
				:title="p.title"
				:shortDescr="p.shortDescr"
				:image="p.image"
				:alt="p.altText"
				:slug="p.slug"
			></project-item>
		</div>
	</section>
</template>

<script setup>
	import { useStore } from "vuex";
	import ProjectItem from "./ProjectItem.vue";

	const store = useStore();

	const projects = store.getters["projects/getAllProjects"];
</script>
