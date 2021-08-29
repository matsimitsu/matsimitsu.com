<script context="module">
	export const tripData = {
		title: 'Poland 2021',
		subtitle: 'Visiting Energylandia in Poland',
		trip: 'poland-2021',
		startDate: new Date('2021-08-23'),
		endDate: new Date('2021-08-28'),
		image: {
			src: 'https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg',
			width: 2200,
			height: 1650,
			alt: 'Zadra'
		},
		countries: ['Poland']
	};
</script>

<script>
	import Map from '$lib/Map.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...tripData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>
