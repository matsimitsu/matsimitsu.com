<script context="module">
	import { getNeighbours } from '$lib/utils/neighbours';

	// Use load function to get the current trip posts
	export async function load({ page, fetch }) {
		const [_root, _trips, trip, _post] = page.path.split('/');
		const postsReq = await fetch(`/trips/posts.json?trip=${trip}`);
		const tripReq = await fetch('/trips.json');

		const tripPosts = await postsReq.json();
		const trips = await tripReq.json();

		const currentTrip = trips.find(t => t.trip == trip)
		const currentPost = tripPosts.find(p => p.url == page.path)

		const [prevPost, nextPost] =
			tripPosts.length > 1 ? getNeighbours(page, tripPosts) : [null, null];

		return {
			props: { tripPosts, prevPost, nextPost, currentTrip, currentPost }
		};
	}
</script>

<script>
	import { getSeenPosts, setSeenPost } from '$lib/utils/seenPosts.js';
	import FormattedDate from '$lib/FormattedDate.svelte';
	import MoreHeader from '$lib/MoreHeader.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';
	import Trip from '$lib/Trip.svelte';
	import { onMount } from 'svelte';

	export let tripPosts = [];
	export let nextPost = null;
	export let currentPost = null
	export let currentTrip = null;

	let seenPosts = [];

	onMount(() => {
		seenPosts = currentPost ? setSeenPost(currentPost.url) : getSeenPosts();
	})
</script>

<svelte:head>
	{#if currentPost && currentTrip}
		<title>{currentPost.title} - {currentTrip.title} - Matsimitsu</title>
		<meta name="description" content={currentPost.subtitle} />
		<meta property="og:title" content="{currentPost.title} - {currentTrip.title} - Matsimitsu" />
		<meta property="og:description" content={currentPost.subtitle} />
		<meta property="og:image" content={currentPost.image.src.replace('.jpg', '-720.jpg')} />
		<meta property="og:image:alt" content={currentPost.image.alt} />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:creator" content="@matsimitsu" />
		<meta property="og:url" content="https://matsimitsu.com{currentPost.url}" />
		<link rel="canonical" href="https://matsimitsu.com{currentPost.url}" />
	{:else if currentTrip}
	<title>{currentTrip.title} - Matsimitsu</title>
	<meta name="description" content={currentTrip.subtitle} />
	<meta property="og:title" content="{currentTrip.title} - Matsimitsu" />
	<meta property="og:description" content={currentTrip.subtitle} />
	<meta property="og:image" content={currentTrip.image.src.replace('.jpg', '-720.jpg')} />
	<meta property="og:image:alt" content={currentTrip.image.alt} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{currentTrip.url}" />
	<link rel="canonical" href="https://matsimitsu.com{currentTrip.url}" />
	{/if}

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
							{#if seenPosts.includes(post.url)}
								<span class="inline-block border rounded px-1 bg-green-500 text-white">seen</span>
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
