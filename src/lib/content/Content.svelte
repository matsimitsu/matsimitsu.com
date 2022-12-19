<script>
	import { setContext } from 'svelte';

	import Paragraph from './Paragraph.svelte';
	import Heading from './Heading.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import Img from './Img.svelte';
	import Youtube from './Youtube.svelte';
	import Panel from './Panel.svelte';
	import OrderedList from './OrderedList.svelte';
	import UnorderedList from './UnorderedList.svelte';
	import Map from './Map.svelte';
	import File from './File.svelte';
	import Location from './Location.svelte';
	import Video from './Video.svelte';
	import Sidenote from './Sidenote.svelte';

	export let content = [];
	export let id;
	export let renderStyle = 'default';
	setContext('renderStyle', renderStyle);
	// Clear out any empty paragraphs
	const filteredContent = content.filter(
		(c) =>
			c.type !== 'paragraph' ||
			(c.type === 'paragraph' && (c.content || []).filter((cc) => cc.type === 'text').length > 0)
	);
</script>

{#key id}
	{#each filteredContent as block, idx}
		{#if block.type === 'paragraph'}
			<Paragraph {block} />
		{:else if block.type === 'heading'}
			<Heading {block} />
		{:else if block.type === 'codeBlock'}
			<CodeBlock {block} />
		{:else if block.type === 'img'}
			<Img
				{block}
				nextType={filteredContent[idx + 1]?.type}
				prevType={filteredContent[idx - 1]?.type}
			/>
		{:else if block.type === 'youtube'}
			<Youtube
				{block}
				nextType={filteredContent[idx + 1]?.type}
				prevType={filteredContent[idx - 1]?.type}
			/>
		{:else if block.type === 'panel'}
			<Panel
				{block}
				nextType={filteredContent[idx + 1]?.type}
				prevType={filteredContent[idx - 1]?.type}
			/>
		{:else if block.type === 'orderedList'}
			<OrderedList {block} />
		{:else if block.type === 'unOrderedList'}
			<UnorderedList {block} />
		{:else if block.type === 'map'}
			<Map {block} />
		{:else if block.type === 'location'}
			<Location {block} />
		{:else if block.type === 'file'}
			<File {block} />
		{:else if block.type === 'video'}
			<Video {block} />
		{:else if block.type === 'sidenote'}
			<Sidenote {block} />
		{:else}
			<pre>{JSON.stringify(block)}</pre>
		{/if}
	{/each}
{/key}
