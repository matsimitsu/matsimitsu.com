<script>
	import Paragraph from './Paragraph.svelte';
	import Heading from './Heading.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import Img from './Img.svelte';
	import Youtube from './Youtube.svelte';
	import Panel from './Panel.svelte';

	export let content = [];
</script>

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
	{/if}
{/each}
