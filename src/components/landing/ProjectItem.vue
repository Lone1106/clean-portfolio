<template>
	<figure class="flex items-strech justify-between w-full">
		<div class="w-2/4">
			<img :src="Dummy" alt="dummy image" class="-translate-x-8" />
		</div>

		<div class="w-2/3 flex flex-col justify-between">
			<div>
				<h4 class="text-lg font-bold mb-2">jBlog</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur. Ultrices facilisis
					convallis pellentesque mauris nec tristique. Ultrices id semper
					vel mattis.
				</p>
			</div>

			<a href="" class="text-xs"
				>Read more <i class="fa-solid fa-arrow-right-long"></i
			></a>
		</div>
	</figure>
</template>

<script setup>
	import Dummy from "../../assets/jBlog.webp";
</script>
