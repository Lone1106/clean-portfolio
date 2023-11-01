<template>
	<section class="py-12">
		<div class="w-full mb-12">
			<img
				:src="currentProject.image"
				:alt="currentProject.altText"
				class="w-full"
			/>
		</div>

		<div class="flex flex-col gap-16">
			<div>
				<h2 class="font-bold text-4xl mb-10">
					{{ currentProject.title }}
				</h2>
				<a :href="currentProject.link" target="_blank" class="text-xl">
					{{
						currentProject.linkType === "web" ? "Live preview" : "Behance"
					}}
					<i class="fa-solid fa-arrow-right-long"></i>
				</a>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Description</h3>
				<p class="text-base md:text-lg">
					{{ currentProject.description }}
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Project goals</h3>
				<p class="text-base md:text-lg">
					{{ currentProject.goals }}
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Technical info</h3>
				<ul class="list-disc ml-4">
					<li v-for="t in currentProject.techInfo">{{ t }}</li>
				</ul>
			</div>
		</div>
	</section>

	<cta></cta>
</template>

<script setup>
	import { useStore } from "vuex";

	import Cta from "../cta/CTA.vue";

	const props = defineProps(["projectId"]);

	const store = useStore();

	const allProjects = store.getters["projects/getAllProjects"];
	const currentProject = allProjects.filter(
		(p) => p.slug === props.projectId,
	)[0];
</script>
