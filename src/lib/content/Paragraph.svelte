<script>
	import Text from './Text.svelte';
	export let block = {};

	const { content = [] } = block;
</script>

<p>
	{#each content as block}
		<Text text={block} />
	{/each}
</p>
