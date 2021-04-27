<script>
	import Map from '$lib/Map.svelte';

	export let name;
	export let zoom = 100;
	export let center = [];
	export let markers = [];
	export let highlight = [];
	export let focus = false;
	export let height = 400;
</script>

<div class="mx-auto max-w-screen-lg my-24 px-4">
	<h2
		class="flex items-center font-extrabold tracking-snug leading-8 text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
	>
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="map-marker-alt"
			class="h-8 w-8 mr-2 text-gray-600 dark:text-gray-400"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			><path
				fill="currentColor"
				d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
			/></svg
		>
		<span>{name}</span>
		<hr class="flex-1 ml-8 border-b border-t border-gray-200 mt-1 rounded" />
	</h2>
	<div class="flex flex-col md:flex-row mt-12">
		<div class="flex-1 flex-shrink mr-4 prose prose-lg dark:prose-dark">
			<slot />
		</div>
		<div class="flex-1 flex-shrink mt-8 md:ml-4 md:mt-0">
			<Map {...{ zoom, center, markers, highlight, focus, height }} />
		</div>
	</div>
</div>
