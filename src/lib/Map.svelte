<script>
	import { geoMercator, geoPath } from 'd3-geo';
	import * as topojson from 'topojson-client';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import viewport from '$lib/actions/inViewportAction';

	import Feature from '$lib/Feature.svelte';
	import Marker from '$lib/Marker.svelte';

	export let mapData;
	export let zoom = 100;
	export let center = [];
	export let select = [];
	export let markers = [];
	let width = 400;
	let height = width;

	let data = [];
	const tweenedZoom = tweened(zoom - 500, { duration: 1000 });
	$: projection = geoMercator()
		.center(center)
		.scale($tweenedZoom)
		.translate([width / 2, height / 2]);
	$: path = geoPath().projection(projection);
	let keys = Object.keys(mapData.objects);
	let countries = { ...mapData.objects[keys[0]] };

	if (select.length > 0) {
		countries.geometries = countries.geometries.filter((c) => select.includes(c.properties.name));
	}
	data = topojson.feature(mapData, countries).features;

	onMount(async () => {
		height = width;
	});

	function startAnimation() {
		tweenedZoom.set(zoom);
	}
	function resetAnimation() {
		tweenedZoom.set(zoom - 500);
	}
</script>

<div
	bind:offsetWidth={width}
	class="block"
	use:viewport
	on:enterViewport={startAnimation}
	on:exitViewport={resetAnimation}
>
	<svg {width} {height} class="bg-white rounded">
		{#each data as feature}
			<Feature featurePath={path(feature)} />
		{/each}
		{#each markers as marker}
			<Marker
				coords={projection([marker.long, marker.lat])}
				text={marker.name}
				textPosition={marker.textPosition}
			/>
		{/each}
	</svg>
</div>
