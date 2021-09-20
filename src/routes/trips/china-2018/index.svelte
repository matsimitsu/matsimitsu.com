<script context="module">
	export const tripData = {
		title: 'China 2018',
		subtitle: 'Land of dragons and emperors.',
		startDate: new Date('2018-05-01'),
		endDate: new Date('2018-05-23'),
		trip: 'china-2018',
		image: {
			src: 'https://cdn.matsimitsu.com/china-2018/5af991c02a869202150354d6-2200.jpg',
			width: 2200,
			height: 1467,
			alt: 'Zhangjiajie'
		},
		countries: ['China', 'Hong Kong'],
		locations: [
			{
				lat: 22.542883,
				long: 114.062996,
				name: 'Shenzen',
				textPosition: 'left'
			},
			{
				lat: 23.116388,
				long: 113.326134,
				name: 'Guangzhou'
			},
			{
				lat: 22.302711,
				long: 114.177216,
				name: 'Hong Kong'
			},
			{
				lat: 25.304142,
				long: 110.273727,
				name: 'Guilin'
			},
			{
				lat: 29.117001,
				long: 110.478996,
				name: 'Zhangjiajie'
			},
			{
				lat: 34.341568,
				long: 108.940178,
				name: "Xi'an"
			},
			{
				lat: 34.341568,
				long: 108.940178,
				name: "Xi'an"
			},
			{
				lat: 39.916668,
				long: 116.383331,
				name: "Beijing"
			},
		]
	};
</script>

<script>
	import TripHeader from '$lib/TripHeader.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
</script>

<TripHeader {...tripData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="China"
	height={380}
	zoom={700}
	focus={true}
	center={[108.940178, 30.341568]}
	markers={tripData.locations}
>
	<p>
		On our very first Asia trip we had a 71 hour layover in Beijing. We instantly loved the food, the country and Chinese culture. </p>
		<p>Later on we did the same thing for Shanghai on a similar transfer visa. Curious to see more of the country we decided to make a longer trip this time through China from the south to the north.</p>
		<p>It's time for an epic journey by car, bus, boat, train, plane and on foot through the beautiful cities, mountain ranges and country side.</p>
</Location>
