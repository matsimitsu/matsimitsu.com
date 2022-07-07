<script context="module">
	export const tripData = {
		title: 'Asia 2022',
		subtitle: 'Singapore and Thailand',
		trip: 'asia-2022',
		startDate: new Date('2022-05-02'),
		endDate: new Date('2022-07-04'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03371.jpg',
			width: 4000,
			height: 2667,
			alt: 'Tree forest, Gardens by the bay'
		},
		countries: ['Singapore', 'Thailand', 'Malaysia'],
		locations: [
			{
				name: 'Singapore',
				long: 103.851959,
				lat: 1.29027,
			},
			{
				name: 'Bangkok',
				long: 100.523186,
				lat: 13.736717,
				textPosition: 'left'
			},
			{
				name: 'Chiang Mai',
				long: 98.979263,
				lat: 18.796143,
				textPosition: 'left'
			},
			{
				name: 'George Town',
				long: 100.312386,
				lat: 5.425300,
				textPosition: 'left'
			},
			{
				name: 'Kuala Lumpur',
				long: 101.693207,
				lat: 3.140853,
				textPosition: 'left'
			},
		]
	};
</script>

<script>
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...tripData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="Asia 2022"
	height={460}
	zoom={400}
	focus={true}
	center={[100.523186, 13.736717]}
	markers={tripData.locations}
>
	<p>
		After two years of Covid, countries are opening up for tourism. At the time of booking (March,
		2022), the countries without quarantine rules by the time I'd travel are Singapore and Thailand.
	</p>
	<p>
		At the time of writing (May, 2022), even more countries have opened up (Still not Japan,
		though), which makes for nice future plans.
	</p>
	<p>
		The plan is to stay in Singapore for about a week and then head to Bangkok, where I'll be
		spending two weeks before traveling to Chiang Mai, where a colleague will join me for three
		weeks.
	</p>
	<p>After that, who knows! Nothing is booked as of yet.</p>
</Location>
