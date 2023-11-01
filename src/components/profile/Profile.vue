<template>
	<section class="py-12 flex flex-col gap-16">
		<div>
			<h2 class="font-bold text-4xl mb-10">Profile</h2>
			<p class="text-base md:text-lg">
				Hi, my name is Jan. I'm currently working as a prepress operator.
				In my free time I enjoy learning about new stuff. Thats why I'm
				currently learning japanese and spanish as my 3rd and 4th foreign
				languages. On top of that I am trying to learn more about ui design
				and web development while also practicing designing and building
				website with the current popular tech.
			</p>
		</div>

		<div>
			<div class="flex justify-between items-start gap-12 flex-wrap">
				<div>
					<h3 class="text-2xl font-bold mb-4">Tech</h3>
					<ul class="list-disc ml-4 text-base md:text-lg">
						<li>HTML/CSS</li>
						<li>SASS</li>
						<li>Tailwind</li>
						<li>React</li>
						<li>Vue</li>
						<li>Git</li>
					</ul>
				</div>

				<div>
					<h3 class="text-2xl font-bold mb-4">Software</h3>
					<ul class="list-disc ml-4 text-base md:text-lg">
						<li>Adobe illustrator</li>
						<li>Adobe Photoshop</li>
						<li>Figma</li>
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
				<figure>
					<p class="font-bold text-base">03/2021 - current</p>
					<p class="text-base md:text-lg">
						Currently employed as prepress operator focusing on label and
						packacking in the offset printing process. My current
						responsibilities include: checking data for printability,
						adjusting data for the offset print process, color correction
						according to proof, proof reading.
					</p>
				</figure>

				<figure>
					<p class="font-bold text-base">09/2017 - 08/2020</p>
					<p class="text-base md:text-lg">
						Three year apprenticeship as media designer, focusing mainly on
						prepress and label offset printing.
					</p>
				</figure>
			</div>
		</div>
	</section>
	<cta></cta>
</template>

<script setup>
	import Cta from "../cta/CTA.vue";
</script>
