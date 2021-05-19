<script context="module">
	import { getNeighbours } from '$lib/utils/neighbours';

	// Use load function to get the current trip posts
	export async function load({ page, fetch }) {
		const [_root, _trips, trip, _post] = page.path.split('/');
		const req = await fetch(`/trips/posts.json?trip=${trip}`);
		const tripPosts = await req.json();
		const [prevPost, nextPost] = getNeighbours(page, tripPosts);

		return {
			props: { tripPosts, prevPost, nextPost }
		};
	}
</script>

<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
	import MoreHeader from '$lib/MoreHeader.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';
	import Trip from '$lib/Trip.svelte';

	export let tripPosts = [];
	export let nextPost = null;
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
	{#if nextPost}
		<div class="mt-24 border-t dark:border-gray-600 border-gray-200 py-24 px-4 bg-gray-100">
			<MoreHeader>Next in this trip</MoreHeader>
			{#each [nextPost] as post (post.url)}
				<Trip trip={post} />
			{/each}
		</div>
	{/if}
	{#if tripPosts.length > 1}
		<div class="border-t dark:border-gray-600 border-gray-200 pt-24 px-4" class:mt-24={!nextPost}>
			<MoreHeader>More posts in this trip</MoreHeader>
			{#each tripPosts as post (post.url)}
				<a
					sveltekit:prefetch
					href={post.url}
					class="flex max-w-4xl mx-auto mb-8 transform hover:scale-105 duration-300 transition transition-transform"
				>
					<div class="flex-1">
						<ResponsiveImage rounded {...post.image} />
					</div>
					<div class="flex-1 p-2 md:p-4 lg:p-8">
						<p class="mx-auto text-sm text-gray-400 mb md:mb-4">
							<FormattedDate date={post.startDate} />
							{#if post.endDate}
								<span>-</span>
								<FormattedDate date={post.endDate} />
							{/if}
						</p>
						<h3
							class="font-extrabold tracking-snug md:leading-8 text-xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb md:mb-2 lg:mb-4"
						>
							{post.title}
						</h3>
						<p class="text-sm md:text-xl text-gray-500">{post.subtitle}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
	<ReturnToCategory path="/trips" text="Return to trips" />
</div>
