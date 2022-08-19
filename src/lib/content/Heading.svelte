<script>
	import Text from './Text.svelte';
	export let block = {};

	const {
		attrs: { level },
		content = []
	} = block;
</script>

<svelte:element this={`h${level}`}>
	{#each Array(level) as _}#{/each}
	{#each content as text}
		<Text {text} />
	{/each}
</svelte:element>
