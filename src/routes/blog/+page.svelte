<script context="module">
	// Use load function to get the current trip posts
	export async function load({ fetch }) {
		const req = await fetch(`/blog.json`);

		return {
			props: { posts: await req.json() }
		};
	}
</script>

<script>
  import Post from '$lib/Post.svelte'
	import PageHeader from '$lib/PageHeader.svelte';
	export let posts = [];

	const description ="Stories on problems I encountered while writing code/using products and how I solved them."
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
	<meta property="og:url" content="https://matsimitsu.com/blog" />
	<link rel="canonical" href="https://matsimitsu.com/blog" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<PageHeader title="Posts I made">
	<span slot="subtitle">
		<p>
			{description}
		</p>
	</span>
</PageHeader>

<div class="mx-auto mb-24 px-4 max-w-4xl">
	{#each posts as post (post.url)}
		<Post post={post} />
	{/each}
</div>
