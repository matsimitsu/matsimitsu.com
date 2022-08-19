<script>
	import MoreHeader from '$lib/MoreHeader.svelte';
	import Post from '$lib/Post.svelte';
	import PrevNextPost from '$lib/PrevNextPost.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let data = {};
	const { posts, prevPost, nextPost} = data
</script>

<slot />

<PrevNextPost {prevPost} {nextPost} />
<div class="mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-8">
	<div class="max-w-4xl mx-auto">
		<MoreHeader>More posts</MoreHeader>

		{#each posts.slice(0, 5) as post (post.id)}
			<Post {post} />
		{/each}
	</div>
</div>
<ReturnToCategory path="/blog" text="Return to blog" />
