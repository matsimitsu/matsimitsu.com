<script>
	import { page } from '$app/stores';
	import Date from '$lib/Date.svelte';

	export let title, subtitle, startDate, image;
	export let endDate = null;

	const headerImage = image.src.replace('.jpg', '-720.jpg');
</script>

<svelte:head>
	<meta name="description" content={subtitle} />
	<meta property="og:title" content="{title} - Matsimitsu.com" />
	<meta property="og:description" content={subtitle} />
	<meta property="og:image" content={headerImage} />
	<meta property="og:image:alt" content={image.alt} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:url" content="https://matsimitsu.com{$page.path}" />
	<link rel="canonical" href="https://matsimitsu.com{$page.path}" />
</svelte:head>

<div class="mx-auto container my-24 text-center">
	<p class="mx-auto text-sm text-gray-400 mb-4">
		<Date date={startDate} />
		{#if endDate}
			<span>-</span>
			<Date date={endDate} />
		{/if}
	</p>
	<h1
		class="font-extrabold tracking-snug leading-8 text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8"
	>
		{title}
	</h1>
	<p class="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
	<hr class="mx-auto w-64 mt-4 dark:border-gray-600" />
</div>
