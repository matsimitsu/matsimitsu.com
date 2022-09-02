<script>
	import { getContext } from 'svelte';

	import Img from './Img.svelte';

	export let block = {};
	export let nextType = null;
	export let prevType = null;

	const { content = [] } = block;
	const renderStyle = getContext('renderStyle');
</script>

<div
	class:mb-20={renderStyle == 'wide' && !['panel', 'img'].includes(nextType)}
	class:mt-20={renderStyle == 'wide' && !['panel', 'img'].includes(prevType)}
	class:my-4={renderStyle !== 'wide' ||
		(renderStyle == 'wide' && ['panel', 'img'].includes(prevType))}
	class:wide={renderStyle == 'wide'}
	class="px-2 2xl:px-0"
>
	<div class="flex mx-auto max-w-screen-2xl overflow-hidden gap-2">
		{#each content as img}
			<Img block={img} nested className="block mx-auto h-auto" />
		{/each}
	</div>
</div>

<style>
	.wide {
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		position: relative;
		right: 50%;
		width: 100vw;
	}
</style>
