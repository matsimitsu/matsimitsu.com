<script>
	import TripPostCard from '$lib/TripPostCard.svelte';
	import MoreHeader from '$lib/MoreHeader.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';
	import Trip from '$lib/Trip.svelte';

	export let data = {};

	$: ({ tripPosts = [], nextPost, currentPost, currentTrip, seenPosts = [] } = data);
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
		<div
			class="mt-24 border-t dark:border-gray-600 border-gray-200 py-24 px-4 bg-gray-100"
			class:-mb-24={tripPosts.length == 1}
		>
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
				<TripPostCard {post} {seenPosts} />
			{/each}
		</div>
	{/if}
	<ReturnToCategory path="/trips" text="Return to trips" />
</div>
