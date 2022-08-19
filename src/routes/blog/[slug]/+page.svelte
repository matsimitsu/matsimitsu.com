<script>
	import Content from '$lib/content/Content.svelte';

	export let data = {};
	const { post } = data;
</script>

<div class="prose prose-lg dark:prose-dark my-24 mx-auto max-w-2xl px-2 2xl:px-0">
	<h1>{post.title}</h1>
	<Content content={post.content} />
</div>
