<script>
	import { setContext } from 'svelte';
	setContext('inPanel', true);
</script>

<div class="flex mx-auto container max-w-screen-2xl px-2 lg:px-0 overflow-hidden mt-2 lg:mt-6">
	<slot />
</div>
