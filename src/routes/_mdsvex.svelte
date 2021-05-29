<script>
  import PageHeader from '$lib/PageHeader.svelte';
	import { page } from '$app/stores';

	export let title;
	export let subtitle;
</script>

<svelte:head>
	<title>{title} - Matsimitsu.com</title>
	<meta name="description" content={subtitle} />
	<meta property="og:title" content="Matsimitsu" />
	<meta property="og:description" content={subtitle} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{$page.path}" />
	<link rel="canonical" href="https://matsimitsu.com{$page.path}" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<PageHeader title={title}>
	<span slot="subtitle">
		<p>
			{@html subtitle}
		</p>
	</span>
</PageHeader>

<div class="mx-auto prose prose-lg px-4 dark:prose-dark my-24">
  <slot/>
</div>
