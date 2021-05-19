<script context="module">
	import { getNeighbours } from '$lib/utils/neighbours';

	// Use load function to get the current trip posts
	export async function load({ page, fetch }) {
		const req = await fetch(`/blog.json`);
		const posts = await req.json();

		const [nextPost, prevPost] = getNeighbours(page, posts);
		return {
			props: { posts, nextPost, prevPost }
		};
	}
</script>

<script>
	import MoreHeader from '$lib/MoreHeader.svelte';
	import Post from '$lib/Post.svelte';
	import PrevNextPost from '$lib/PrevNextPost.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let posts = [];
	export let prevPost = null;
	export let nextPost = null;
</script>

<slot />

<PrevNextPost {prevPost} {nextPost} />
<div class="mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
	<MoreHeader>More posts</MoreHeader>

	{#each posts.slice(0, 5) as post (post.url)}
		<Post {post} />
	{/each}
</div>
<ReturnToCategory path="/blog" text="Return to blog" />
