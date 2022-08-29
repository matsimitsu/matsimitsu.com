<script>
	import Map from '$lib/Map.svelte';
	import { getLatLngCenter } from '$lib/utils/map';
	export let block = {};

	const { title, zoom, locations = [] } = block.attrs;
	const center = getLatLngCenter(locations.map(({ lat, lng }) => [lat, lng])).reverse();
</script>

<div class="my-8">
	<h2
		class="flex items-center font-extrabold tracking-snug text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 p-0 m-0"
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
		<span>{title}</span>
		<hr class="flex-1 ml-8 border-b border-t border-gray-200 rounded p-0 m-0" />
	</h2>
	<div class="border rounded border-1">
		<Map {zoom} {center} markers={locations} />
	</div>
</div>
