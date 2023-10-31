<template>
	<section class="py-12">
		<div class="mb-16">
			<h2 class="font-bold text-4xl mb-10">Profile</h2>
			<p class="text-base md:text-lg">
				Lorem ipsum dolor sit amet consectetur. Sit sollicitudin justo odio
				sed. Eu faucibus mattis quis nunc. Porta lectus adipiscing enim
				posuere nulla mauris amet. Eget faucibus quam viverra augue.
				Viverra lorem interdum malesuada pellentesque vel. Lorem ipsum
				dolor sit amet consectetur. Sit sollicitudin justo odio sed. Eu
				faucibus mattis quis nunc. Porta lectus adipiscing enim posuere
				nulla mauris amet. Eget faucibus quam viverra augue. Viverra lorem
				interdum malesuada pellentesque vel.
			</p>
		</div>

		<div>
			<h3 class="text-2xl font-bold mb-4">Experience</h3>

			<div class="flex flex-col gap-4">
				<experience-item></experience-item>
				<experience-item></experience-item>
			</div>
		</div>
	</section>
	<cta></cta>
</template>

<script setup>
	import Cta from "../cta/CTA.vue";
	import ExperienceItem from "./ExperienceItem.vue";
</script>
