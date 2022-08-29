<script>
	import Paragraph from './Paragraph.svelte';
	import Heading from './Heading.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import Img from './Img.svelte';
	import Youtube from './Youtube.svelte';
	import Panel from './Panel.svelte';
	import OrderedList from './OrderedList.svelte';
	import UnorderedList from './UnorderedList.svelte';
	import Map from './Map.svelte';

	export let content = [];
	export let id;
</script>

{#key id}
	{#each content as block}
		{#if block.type === 'paragraph'}
			<Paragraph {block} />
		{:else if block.type === 'heading'}
			<Heading {block} />
		{:else if block.type === 'codeBlock'}
			<CodeBlock {block} />
		{:else if block.type === 'img'}
			<Img {block} />
		{:else if block.type === 'youtube'}
			<Youtube {block} />
		{:else if block.type === 'panel'}
			<Panel {block} />
		{:else if block.type === 'orderedList'}
			<OrderedList {block} />
		{:else if block.type === 'unOrderedList'}
			<UnorderedList {block} />
		{:else if block.type === 'map'}
			<Map {block} />
		{:else}
			<pre>{JSON.stringify(block)}</pre>
		{/if}
	{/each}
{/key}
