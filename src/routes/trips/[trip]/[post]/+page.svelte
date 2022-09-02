<script>
	import Content from '$lib/content/Content.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import MoreHeader from '$lib/MoreHeader.svelte';
	import Trip from '$lib/Trip.svelte';
	import TripPostCard from '$lib/TripPostCard.svelte';

	export let data = {};
	$: ({
		seenPosts,
		posts,
		prevPost,
		nextPost,
		post: { id, cover, subtitle, url, title, content = [] }
	} = data);
</script>

<svelte:head>
	<title>{title} - Matsimitsu</title>
	<meta name="description" content={subtitle} />
	<meta property="og:title" content="{title} - Matsimitsu" />
	<meta property="og:description" content={subtitle} />
	<meta property="og:image" content={`https://cdn.matsimitsu.dev${cover.versions.jpg[720]}`} />
	<meta property="og:image:alt" content={cover.alt} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{url}" />
	<link rel="canonical" href="https://matsimitsu.com{url}" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Trips RSS Feed"
		href="/feeds/trips.xml"
	/>
</svelte:head>

<TripHeader {...data.post} />

<div class="prose prose-lg dark:prose-dark my-24 mx-auto px-2 2xl:px-0">
	<Content {content} {id} renderStyle="wide" />
</div>

{#if nextPost}
	<div
		class="mt-24 border-t dark:border-gray-600 border-gray-200 py-24 px-4 bg-gray-100"
		class:-mb-24={posts.length == 1}
	>
		<MoreHeader>Next in this trip</MoreHeader>
		<Trip trip={nextPost} />
	</div>
{/if}
{#if posts.length > 1}
	<div class="border-t dark:border-gray-600 border-gray-200 pt-24 px-4" class:mt-24={!nextPost}>
		<MoreHeader>More posts in this trip</MoreHeader>
		{#each posts as post (post.url)}
			<TripPostCard {post} {seenPosts} />
		{/each}
	</div>
{/if}
