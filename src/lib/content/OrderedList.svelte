<script>
	import ListItem from './ListItem.svelte';
	export let block = {};
</script>

<ol>
	{#each block.content as listItem}
		<ListItem block={listItem} />
	{/each}
</ol>
