<script context="module">
	// Use load function to get the current trip posts
	export async function load({ fetch }) {
		const req = await fetch(`/notes.json`);

		return {
			props: { posts: await req.json() }
		};
	}
</script>

<script>
	import Note from '$lib/Note.svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	export let posts = [];

	const description = "Another place to not post anything ;)"
</script>

<svelte:head>
	<title>Blog - Matsimitsu.com</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Matsimitsu" />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com/notes" />
	<link rel="canonical" href="https://matsimitsu.com/notes" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Notes RSS Feed"
		href="/feeds/notes.xml"
	/>
</svelte:head>

<PageHeader title="Notes">
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
