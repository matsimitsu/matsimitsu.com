<script>
	import TripPostCard from '$lib/TripPostCard.svelte';
	import Post from '$lib/Post.svelte';
	import Note from '$lib/Note.svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	export let data = {};

	const { posts, notes, trips} = data;

	const description =
		'Hi there! My name is Robert Beekman, developer, photographer and longboarder.';
</script>

<svelte:head>
	<title>Matsimitsu.com</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Matsimitsu" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://cdn.matsimitsu.com/site/me-zhanjiejie-720.jpg" />
	<meta property="og:image:alt" content="Me at Zhangjiajie National Park in China." />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com" />
	<link rel="canonical" href="https://matsimitsu.com" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<PageHeader title={description} align="left">
	<span slot="hat">
		<div class="text-4xl mb-2">👋</div>
	</span>
	<span slot="subtitle">
		<p>
			I love creating scalable webapplications, created pragmatically, with both "boring" and new
			technologies, whatever is best suited for the job. I made the first commit to <a
				href="https://appsignal.com">AppSignal</a
			>, where I'm still happily employed. In my free time I like to travel, mainly to Asia and when
			I'm not abroad I regularly take my longboard out for a spin.
		</p>
	</span>
</PageHeader>

<PageHeader title="From the blog" align="left" />
<div class="mx-auto max-w-4xl mb-24 px-4 -mt-12">
	<div class="max-w-xl ml-0">
		{#each posts.slice(0, 3) as post (post.url)}
			<Post {post} />
		{/each}
	</div>
</div>

<PageHeader title="From my trips" align="left" />

<div class="mx-auto max-w-4xl px-4 mb-24 -mt-12">
	{#each trips.slice(0, 3) as trip (trip.trip)}
		<TripPostCard post={trip} />
	{/each}
</div>

<PageHeader title="Notes" align="left" />

<div class="mx-auto max-w-4xl mb-24 px-4 -mt-12">
	<div class="max-w-xl ml-0">
		{#each notes.slice(0, 3) as note (note.url)}
			<Note {note} />
		{/each}
	</div>
</div>
