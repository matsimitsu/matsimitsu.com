<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { setSeenPost } from '$lib/utils/seenPosts';

	export let title, subtitle, startDate;
	export let endDate = null;

	onMount(() => {
		setSeenPost($page.url.pathname);
	});
</script>

<div class="mx-auto container my-24 text-center px-4">
	<p class="mx-auto text-sm text-gray-400 mb-4">
		<FormattedDate date={startDate} />
		{#if typeof(endDate) === "string" && endDate.split(' ')[0] != startDate.split(' ')[0]}
			<span>-</span>
			<FormattedDate date={endDate} />
		{/if}
	</p>
	<h1 class="font-extrabold tracking-snug text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8">
		{title}
	</h1>
	<p class="text-lg text-gray-600 dark:text-gray-400">{@html subtitle}</p>
	<hr class="mx-auto w-64 mt-4 dark:border-gray-600" />
</div>
