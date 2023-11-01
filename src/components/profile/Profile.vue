<template>
	<div>
		<section class="py-12 flex flex-col gap-16">
			<div>
				<h2 class="font-bold text-4xl mb-10">Profile</h2>
				<p class="text-base md:text-lg">
					{{ data.info }}
				</p>
			</div>

			<div>
				<div class="flex justify-between items-start gap-12 flex-wrap">
					<div v-for="i in data.skills">
						<h3 class="text-2xl font-bold mb-4">{{ i.title }}</h3>
						<ul class="list-disc ml-4 text-base md:text-lg">
							<li v-for="t in i.items">{{ t }}</li>
						</ul>
					</div>
				</div>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Experience</h3>

				<div class="flex flex-col gap-4">
					<figure v-for="i in data.experience">
						<p class="font-bold text-base">{{ i.title }}</p>
						<p class="text-base md:text-lg">
							{{ i.description }}
						</p>
					</figure>
				</div>
			</div>
		</section>
		<cta></cta>
	</div>
</template>

<script setup>
	import { useStore } from "vuex";
	import Cta from "../cta/CTA.vue";

	const store = useStore();

	const data = store.getters["about/getAboutContent"];
	console.log(data);
</script>
