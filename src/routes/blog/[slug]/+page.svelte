<script>
	import { readingTimeInMinutes } from '$lib/utils/content';
	import Content from '$lib/content/Content.svelte';
	import FormattedDate from '$lib/FormattedDate.svelte';
	export let data = {};
	$: ({ post } = data);
</script>

<div class="prose prose-lg dark:prose-dark my-24 mx-auto max-w-2xl px-2 2xl:px-0">
	<h1 class="font-mono text-4xl mb-2 pb-0"># {post.title}</h1>
	<p class="meta p-0 m-0 font-mono text-base text-gray-400"><FormattedDate date={post.date} /> - {readingTimeInMinutes(post.content)} minutes</p>
	<Content content={post.content} />
</div>
