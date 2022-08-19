<script context="module">
	export const tripData = {
		title: 'Greece 2021',
		subtitle:
			'With Athens turning "yellow", meaning we can travel there, but with caution, it was time to pack the bags and get on a plane for the first time in a year.',
		trip: 'greece-2021',
		startDate: new Date('2021-07-04'),
		endDate: new Date('2021-07-07'),
		image: {
			src: 'https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01361.jpg',
			width: 2200,
			height: 1467,
			alt: 'Acropolis'
		},
		countries: ['Greece']
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
