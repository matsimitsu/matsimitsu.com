<script context="module">
	// Use load function to get the current trip posts
	export async function load({ page, fetch }) {
		const [_root, _trips, trip, _post] = page.path.split('/');
		const req = await fetch(`/trips/posts.json?trip=${trip}`);
		return {
			props: { tripPosts: await req.json() }
		};
	}
</script>

<script>
	import Date from '$lib/Date.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	export let tripPosts = [];
</script>

<div class="mx-auto">
	<div>
		<slot />
	</div>
	{#if tripPosts.length > 1}
		<div class="mt-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
			{#each tripPosts as post (post.title)}
				<a sveltekit:prefetch href={post.url} class="flex max-w-4xl mx-auto mb-8 transform hover:scale-105 duration-300 transition transition-transform">
					<div class="flex-1">
						<ResponsiveImage {...post.image} />
					</div>
					<div class="flex-1 p-4 lg:p-8">
						<p class="mx-auto text-sm text-gray-400 mb-4">
							<Date date={post.startDate} />
							{#if post.endDate}
								<span>-</span>
								<Date date={post.endDate} />
							{/if}
						</p>
						<h3 class="font-extrabold tracking-snug leading-8 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-2 lg:mb-4">{post.title}</h3>
						<p class="text-lg text-gray-600 dark:text-gray-400">{post.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
	<div class="mt-24 border-t border-b dark:border-gray-600 border-gray-200 py-8 px-4">
		<div class="mx-auto container">
			<a
			sveltekit:prefetch
			href="/trips"
			class="flex mr-auto items-center px-2 2xl:px-0 overflow-hidden text-gray-600 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-800"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="arrow-left"
				class="w-12 h-12 p-3 rounded-full border border-gray-600 dark:border-gray-600"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				><path
					fill="currentColor"
					d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
				/></svg
			>
			<span
				class="ml-4 mr-auto font-extrabold leading-8 text-2xl font-bold"
				>Return to trips</span
			>
		</a>
		</div>
	</div>
</div>
