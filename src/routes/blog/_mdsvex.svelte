<script>
	export let title;
	export let summary;
	export let url;
</script>

<svelte:head>
	<meta name="description" content={summary} />
	<meta property="og:title" content="{title} - Matsimitsu.com" />
	<meta property="og:description" content={summary} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{$url}" />
	<link rel="canonical" href="https://matsimitsu.com{$url}" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<div class="mx-auto prose prose-lg px-4 dark:prose-dark my-24">
	<h1>{title}</h1>
	<slot />
</div>
