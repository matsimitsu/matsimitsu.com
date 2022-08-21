<script>
	import { readingTimeInMinutes } from '$lib/utils/content';
	import Content from '$lib/content/Content.svelte';
	import FormattedDate from '$lib/FormattedDate.svelte';
	export let data = {};
	$: ({
		post: { id, summary, url, title, date, content = [] }
	} = data);
</script>

<svelte:head>
	<meta name="description" content={summary} />
	<meta property="og:title" content="{title} - Matsimitsu.com" />
	<meta property="og:description" content={summary} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{url}" />
	<link rel="canonical" href="https://matsimitsu.com{url}" />
	<meta name="twitter:card" content="summary" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<div class="prose prose-lg dark:prose-dark my-24 mx-auto max-w-2xl px-2 2xl:px-0 font-mono">
	<h1 class="font-mono text-4xl mb-2 pb-0"># {title}</h1>
	<p class="meta p-0 m-0 font-mono text-base text-gray-400">
		<FormattedDate {date} /> - {readingTimeInMinutes(content)} minutes
	</p>
	<Content {content} id={id} />
</div>
