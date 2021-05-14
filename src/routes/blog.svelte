<script context="module">
	// Use load function to get the current trip posts
	export async function load({ _page, fetch }) {
		const req = await fetch(`/blog.json`);

		return {
			props: { posts: await req.json() }
		};
	}
</script>

<script>
	export let posts = [];
  import PostList from '$lib/PostList.svelte'
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<div class="mx-auto container my-24 text-center">
	<h1
		class="font-extrabold tracking-snug leading-8 text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8"
	>
		Blog
	</h1>
	<p class="text-lg text-gray-600 dark:text-gray-400">Opinions are mine.</p>
	<hr class="mx-auto w-64 mt-4 dark:border-gray-600" />
</div>

<div class="mx-auto max-w-lg">
  <PostList posts={posts} />
</div>
