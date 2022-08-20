<script>
	import ListItem from './ListItem.svelte';
	export let block = {};
</script>

<ul>
	{#each block.content as listItem}
		<ListItem block={listItem} />
	{/each}
</ul>
