<template>
	<section class="py-12">
		<div class="w-full mb-12">
			<img :src="Dummy" alt="dummy image" class="w-full" />
		</div>

		<div class="flex flex-col gap-16">
			<div>
				<h2 class="font-bold text-4xl mb-10">jBlog - Blog website</h2>
				<a href="" class="text-xl">
					Live preview <i class="fa-solid fa-arrow-right-long"></i>
				</a>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Description</h3>
				<p class="text-base md:text-lg">
					Lorem ipsum dolor sit amet consectetur. Ipsum orci mattis sit sed
					lorem. Ultrices placerat pulvinar lectus vestibulum adipiscing
					pellentesque phasellus. Ipsum nullam in at blandit molestie
					mollis ullamcorper. Suspendisse aliquam orci neque fusce in
					aliquet odio gravida. Non nulla tortor ut scelerisque. Lorem
					ipsum dolor sit amet consectetur. Ipsum orci mattis sit sed
					lorem. Ultrices placerat pulvinar lectus vestibulum adipiscing
					pellentesque phasellus. Ipsum nullam in at blandit molestie
					mollis ullamcorper. Suspendisse aliquam orci neque fusce in
					aliquet odio gravida. Non nulla tortor ut scelerisque.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Project goals</h3>
				<p class="text-base md:text-lg">
					Lorem ipsum dolor sit amet consectetur. Ipsum orci mattis sit sed
					lorem. Ultrices placerat pulvinar lectus vestibulum adipiscing
					pellentesque phasellus. Ipsum nullam in at blandit molestie
					mollis ullamcorper. Suspendisse aliquam orci neque fusce in
					aliquet odio gravida. Non nulla tortor ut scelerisque. Lorem
					ipsum dolor sit amet consectetur. Ipsum orci mattis sit sed
					lorem. Ultrices placerat pulvinar lectus vestibulum adipiscing
					pellentesque phasellus. Ipsum nullam in at blandit molestie
					mollis ullamcorper. Suspendisse aliquam orci neque fusce in
					aliquet odio gravida. Non nulla tortor ut scelerisque.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-bold mb-4">Technical info</h3>
				<ul class="list-disc ml-4">
					<li>Tailwind CSS</li>
					<li>Vue</li>
				</ul>
			</div>
		</div>
	</section>

	<cta></cta>
</template>

<script setup>
	import Dummy from "../../assets/jBlog.webp";
	import Cta from "../cta/CTA.vue";
</script>
