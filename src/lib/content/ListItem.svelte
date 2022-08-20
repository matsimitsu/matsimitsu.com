<script>
	import { generateKey } from '$lib/utils/content';

	import Content from './Content.svelte';
	export let block = {};
</script>

<li>
	<Content content={block.content} key={generateKey()} />
</li>
