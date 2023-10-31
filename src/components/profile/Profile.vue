<template>
	<section class="py-12 flex flex-col gap-16">
		<div>
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
			<div class="flex justify-between items-center gap-12 flex-wrap">
				<div>
					<h3 class="text-2xl font-bold mb-4">Tech</h3>
					<ul class="list-disc ml-4 text-base md:text-lg">
						<li>HTML/CSS</li>
						<li>Tailwind</li>
						<li>React</li>
						<li>Vue</li>
					</ul>
				</div>

				<div>
					<h3 class="text-2xl font-bold mb-4">Software</h3>
					<ul class="list-disc ml-4 text-base md:text-lg">
						<li>Adobe illustrator</li>
						<li>Adobe Photoshop</li>
						<li>Artpro</li>
						<li>Packedge</li>
					</ul>
				</div>

				<div>
					<h3 class="text-2xl font-bold mb-4">Language</h3>
					<ul class="list-disc ml-4 text-base md:text-lg">
						<li>German (native)</li>
						<li>English(fluent)</li>
						<li>Japanese (N3)</li>
						<li>Spanish (A1)</li>
					</ul>
				</div>
			</div>
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
