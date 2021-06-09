<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';

	export let post;
  export let seenPosts = []

</script>

<a
	sveltekit:prefetch
	href={post.url}
	class="flex max-w-4xl mx-auto mb-8 transform hover:scale-105 duration-300 transition transition-transform"
>
	<div class="flex-1">
		<ResponsiveImage rounded {...post.image} />
	</div>
	<div class="flex-1 p-2 md:p-4 lg:p-8">
		<p class="hidden md:block mx-auto text-sm text-gray-400 mb md:mb-4">
			<FormattedDate date={post.startDate} />
			{#if post.endDate}
				<span>-</span>
				<FormattedDate date={post.endDate} />
			{/if}
			{#if seenPosts.includes(post.url)}
				<span class="inline-block border rounded px-1 bg-green-500 text-white">seen</span>
			{/if}
		</p>
		<h3
			class="font-extrabold tracking-snug text-xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb md:mb-2 lg:mb-4"
		>
			{post.title}
		</h3>
		<p class="text-sm md:text-xl text-gray-500 line-clamp-3 md:line-clamp-none">{@html post.subtitle}</p>
	</div>
</a>
