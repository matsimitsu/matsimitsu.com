<script>
	export let block = {};
	const {
		attrs: { src: originalSrc, width, caption }
	} = block;

	let w = width;
	$: h = Math.round((w * 9) / 16);

	const src = originalSrc.replace(
		'https://www.youtube.com/watch?v=',
		'https://www.youtube.com/embed/'
	);
</script>

<div bind:clientWidth={w} class="text-center">
	<iframe width={w} height={h} {src} title="Youtube video" allow="fullscreen" />
	{#if caption}
		<p class="text-gray-400 mt-1 text-sm">{caption}</p>
	{/if}
</div>
