<script>
	import FormattedDate from '$lib/FormattedDate.svelte';

	export let prevPost = null;
	export let nextPost = null;
  export let subject = "post";
</script>

<div class="mt-24 border-t dark:border-gray-600 border-gray-200 py-12 px-4 bg-gray-100">
	<div class="flex justify-between mx-auto ">
		{#if prevPost}
			<a
				href={prevPost.url}
				sveltekit:prefetch
				class="flex justify-end flex-1 text-right content-center transform hover:scale-105 duration-200 transition transition-transform"
			>
				<div class=" ml-4">
					<h3 class="text-md mb-2 lg:text-xl text-gray-600 dark:text-gray-400">Previous {subject}</h3>
					<p class="text-sm text-gray-400 dark:text-gray-600 w-30">
						<FormattedDate date={prevPost.date} />
					</p>
					<h2 class="text-lg lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
						{prevPost.title}
					</h2>
				</div>
			</a>
		{:else}
			<div class="flex-1"/>
		{/if}
		<div class="border-l mx-12"></div>
		{#if nextPost}
			<a
				href={nextPost.url}
				sveltekit:prefetch
				class="flex flex-1  content-center transform hover:scale-105 duration-200 transition transition-transform"
			>
				<div class="mr-4">
					<h3 class="text-md mb-2 lg:text-xl text-gray-600 dark:text-gray-400">Next {subject}</h3>
					<p class="text-sm text-gray-400 dark:text-gray-600 w-30">
						<FormattedDate date={nextPost.date} />
					</p>
					<h2 class="text-lg lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
						{nextPost.title}
					</h2>
				</div>
			</a>
		{:else}
		<div class="flex-1"/>
		{/if}
	</div>
</div>
