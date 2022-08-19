<script>
	import Img from './Img.svelte';

	export let block = {};
	const { content = [] } = block;
</script>

<div
	class="my-4 flex mx-auto container max-w-screen-2xl px-2 2xl:px-0 overflow-hidden mt-2 lg:mt-2 gap-2"
>
	{#each content as img}
		<Img block={img} nested className="block mx-auto h-auto" />
	{/each}
</div>
