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
	import FormattedDate from '$lib/FormattedDate.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let tripPosts = [];
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Trips RSS Feed"
		href="/feeds/trips.xml"
	/>
</svelte:head>

<div class="mx-auto">
	<div>
		<slot />
	</div>
	{#if tripPosts.length > 1}
		<div class="mt-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
			{#each tripPosts as post (post.title)}
				<a
					sveltekit:prefetch
					href={post.url}
					class="flex max-w-4xl mx-auto mb-8 transform hover:scale-105 duration-300 transition transition-transform"
				>
					<div class="flex-1">
						<ResponsiveImage {...post.image} />
					</div>
					<div class="flex-1 p-4 lg:p-8">
						<p class="mx-auto text-sm text-gray-400 mb-4">
							<FormattedDate date={post.startDate} />
							{#if post.endDate}
								<span>-</span>
								<FormattedDate date={post.endDate} />
							{/if}
						</p>
						<h3
							class="font-extrabold tracking-snug leading-8 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-2 lg:mb-4"
						>
							{post.title}
						</h3>
						<p class="text-lg text-gray-600 dark:text-gray-400">{post.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
	<ReturnToCategory path="/trips" text="Return to trips" />
</div>
