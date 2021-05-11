<script context="module">
	export const tripData = {
		title: 'USA 2012',
		subtitle: 'Same trip, different people.',
		trip: 'usa-2012',
		startDate: new Date('2012-06-04'),
		endDate: new Date('2012-06-25'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0835-Pano.jpg',
			width: 2200,
			height: 1424,
			alt: 'View of Yosemite National Park'
		},
		countries: [
			'United States of America'
		]
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
