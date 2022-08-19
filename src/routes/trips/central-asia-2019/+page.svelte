<script context="module">
	export const tripData = {
		title: 'Central Asia 2019',
		subtitle:
			'The Silk Road connected Europe with Asia for many centuries and on this trip we visit some of the cities along this road in the countries of Uzbekistan and Kyrgyzstan.',
		startDate: new Date('2019-04-01'),
		endDate: new Date('2019-04-13'),
		trip: 'central-asia-2019',
		image: {
			src: 'https://cdn.matsimitsu.com/central-asia-2019/DSC09693-2200.jpg',
			width: 2200,
			height: 1467,
			alt: 'Uzbekistan Mosque'
		},
		countries: ['Uzbekistan', 'Kyrgyzstan', 'Turkey']
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
