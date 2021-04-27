<script>
	import world from '$lib/maps/world.json';
	import { geoNaturalEarth1, geoPath } from 'd3-geo';
	import * as topojson from 'topojson-client';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import viewport from '$lib/actions/inViewportAction';

	import Feature from '$lib/Feature.svelte';
	import Marker from '$lib/Marker.svelte';

	export let zoom = 100;
	export let center = [];
	export let markers = [];
	export let highlight = [];
	export let focus = false;
	export let height = 400;
	let width = 400;

	let data = [];
	const tweenedZoom = tweened(focus ? 100 : zoom, { duration: 2000, easing: cubicOut });
	$: projection = geoNaturalEarth1()
		.center(center)
		.scale($tweenedZoom)
		.translate([width / 2, height / 2]);
	$: path = geoPath().projection(projection);
	let keys = Object.keys(world.objects);
	let countries = { ...world.objects[keys[0]] };

	data = topojson.feature(world, countries).features;

	function startAnimation() {
		if(focus) {
			tweenedZoom.set(zoom);
		}
	}
</script>

<div
	bind:offsetWidth={width}
	class="block"
	use:viewport
	on:enterViewport={startAnimation}
>
	<svg {width} {height} class="bg-transparent rounded">
		{#each data as feature}
			<Feature featurePath={path(feature)} properties={feature.properties} highlight={highlight.includes(feature.properties.name)} />
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
