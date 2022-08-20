<script>
	import Text from './Text.svelte';
	export let block = {};

	$: ({ content = [] } = block);
</script>

<p>
	{#each content as text}
		<Text {text} />
	{/each}
</p>
