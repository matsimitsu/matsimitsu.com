<script>
	export let block = {};
	const { content = [] } = block;
</script>

<pre>
{#each content as text}{text.text}{/each}
</pre>
