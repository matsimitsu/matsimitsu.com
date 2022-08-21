<script>
	import { generateKey } from '$lib/utils/content';

	import Content from './Content.svelte';
	export let block = {};
</script>

<li>
	<Content content={block.content} id={generateKey()} />
</li>
