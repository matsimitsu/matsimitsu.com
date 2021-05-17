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
	import Post from '$lib/Post.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let posts = [];
</script>

<slot />

<div class="mt-24 mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
	{#each posts.slice(0, 5) as post (post.url)}
		<Post {post} />
	{/each}
</div>
<ReturnToCategory path="/notes" text="Return to notes" />
