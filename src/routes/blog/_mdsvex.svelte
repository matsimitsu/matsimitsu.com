<script>
	import { page } from '$app/stores';
	import FormattedDate from '$lib/FormattedDate.svelte';

	export let title;
	export let summary;
	export let date;
	export let image = null;

	const headerImage = image ? image.src.replace('.jpg', '-720.jpg') : null
</script>

<svelte:head>
	<meta name="description" content={summary} />
	<meta property="og:title" content="{title} - Matsimitsu.com" />
	<meta property="og:description" content={summary} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com{$page.path}" />
	<link rel="canonical" href="https://matsimitsu.com{$page.path}" />
	{#if image }
		<meta property="og:image" content={headerImage} />
		<meta property="og:image:alt" content={image.alt} />
		<meta name="twitter:card" content="summary_large_image" />
	{:else }
		<meta name="twitter:card" content="summary" />
	{/if}
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Blog RSS Feed"
		href="/feeds/blog.xml"
	/>
</svelte:head>

<div class="mx-auto container my-24 text-center max-w-4xl">
	<p class="mx-auto text-sm text-gray-400 mb-4">
		<FormattedDate date={date} />
	</p>
	<h1
		class="font-extrabold tracking-snug text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8"
	>
		{title}
	</h1>
	<hr class="mx-auto w-64 mt-4 dark:border-gray-600" />
</div>
<div class="mx-auto prose prose-lg px-4 dark:prose-dark my-24">
	<slot />
</div>
