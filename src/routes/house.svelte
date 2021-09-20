<script context="module">
	// Use load function to get the current posts
	export async function load({ _page, fetch }) {
		const req = await fetch(`/house.json`);

		return {
			props: { posts: await req.json() }
		};
	}
</script>

<script>
	import Note from '$lib/Note.svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	export let posts = [];

	const description = "Tracking the progress of my newly built house"
</script>

<svelte:head>
	<title>House - Matsimitsu.com</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Matsimitsu" />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com/house" />
	<link rel="canonical" href="https://matsimitsu.com/house" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - house RSS Feed"
		href="/feeds/house.xml"
	/>
</svelte:head>

<PageHeader title="House">
	<span slot="subtitle">
		<p>
			{description}
		</p>
	</span>
</PageHeader>

<div class="px-4 lg:px-0 max-w-xl mb-24 mx-auto">
	{#each posts as note (note.url)}
		<Note {note} />
	{/each}
</div>
