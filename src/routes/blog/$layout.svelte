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
	import PostList from '$lib/PostList.svelte';
</script>

<slot />

<div class="mt-24 mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
	<PostList posts={posts.slice(0, 10)} />
</div>
