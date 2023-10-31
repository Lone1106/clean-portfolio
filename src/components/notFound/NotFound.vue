<template>
	<section
		class="h-[75vh] py-12 flex flex-col text-center justify-center items-center"
	>
		<h2 class="font-bold text-4xl mb-10">
			Seems like this page doesnt exist.
		</h2>
		<h4 class="text-lg font-bold mb-2">Maybe try one of these:</h4>
		<ul class="flex gap-4 justify-center items-center">
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/profile">Profile</router-link>
			</li>
		</ul>
	</section>
</template>
