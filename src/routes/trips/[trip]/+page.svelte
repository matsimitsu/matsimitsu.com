<script>
	import TripPostCard from '$lib/TripPostCard.svelte';
	import MoreHeader from '$lib/MoreHeader.svelte';
	import Content from '$lib/content/Content.svelte';
	import Trip from '$lib/Trip.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Map from '$lib/Map.svelte';

	export let data = {};
	$: ({ trip, nextPost=null, posts=[], seenPosts=[] } = data);
</script>

<svelte:head>
	<title>{trip.title} - Matsimitsu</title>
	<meta name="description" content={trip.subtitle} />
	<meta property="og:title" content="{trip.title} - Matsimitsu" />
	<meta property="og:description" content={trip.subtitle} />
	<meta property="og:image" content={`https://cdn.matsimitsu.dev${trip.cover.versions.jpg[720]}`} />
	<meta property="og:image:alt" content={trip.cover.alt} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{trip.url}" />
	<link rel="canonical" href="https://matsimitsu.com{trip.url}" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Trips RSS Feed"
		href="/feeds/trips.xml"
	/>
</svelte:head>
<div class="mx-auto">
	<div>
    <TripHeader {...trip} />
    <div class="max-w-screen-xl mx-auto">
      <Map highlight={trip.locations.map(l => l.country.toLowerCase())} height={800} zoom={250} center={[0, 10]} />
    </div>

    <div class="prose prose-lg dark:prose-dark my-24 mx-auto max-w-2xl px-2 2xl:px-0 ">
      <Content content={trip.content} id={trip.id}/>
    </div>
	</div>
	{#if nextPost}
		<div
			class="mt-24 border-t dark:border-gray-600 border-gray-200 py-24 px-4 bg-gray-100"
			class:-mb-24={posts.length == 1}
		>
			<MoreHeader>Next in this trip</MoreHeader>
			{#each [nextPost] as post (post.id)}
				<Trip trip={post} />
			{/each}
		</div>
	{/if}
	{#if posts.length > 1}
		<div class="border-t dark:border-gray-600 border-gray-200 pt-24 px-4" class:mt-24={!nextPost}>
			<MoreHeader>More posts in this trip</MoreHeader>
			{#each posts as post (post.id)}
				<TripPostCard {post} {seenPosts} />
			{/each}
		</div>
	{/if}
</div>
