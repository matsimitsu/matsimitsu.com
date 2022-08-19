<script>
	import { readingTimeInMinutes } from '$lib/utils/content';
	import Content from '$lib/content/Content.svelte';
	import FormattedDate from '$lib/FormattedDate.svelte';
	export let data = {};
	$: ({ post } = data);
</script>

<svelte:head>
	<meta name="description" content={post.summary} />
	<meta property="og:title" content="{post.title} - Matsimitsu.com" />
	<meta property="og:description" content={post.summary} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{post.url}" />
	<link rel="canonical" href="https://matsimitsu.com{post.url}" />
	<meta name="twitter:card" content="summary" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>
<div class="prose prose-lg dark:prose-dark my-24 mx-auto max-w-2xl px-2 2xl:px-0">
	<h1 class="font-mono text-4xl mb-2 pb-0"># {post.title}</h1>
	<p class="meta p-0 m-0 font-mono text-base text-gray-400">
		<FormattedDate date={post.date} /> - {readingTimeInMinutes(post.content)} minutes
	</p>
	<Content content={post.content} />
</div>
