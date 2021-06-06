<script context="module">
	export const tripData = {
		title: 'Japan 2019',
		subtitle: 'It seems to become a yearly occurrence, this time with the parents :)',
		startDate: new Date('2019-10-18'),
		endDate: new Date('2019-10-26'),
		trip: 'japan-2019',
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2019/DSC00029.jpg',
			width: 2200,
			height: 1467,
			alt: 'View of Japanese temple'
		},
		countries: ['Japan'],
		locations: [
			{
				lat: 52.377956,
				long: 4.89707,
				name: 'Amsterdam'
			},
			{
				lat: 60.192059,
				long: 24.945831,
				name: 'Helsinki'
			},
			{
				lat: 35.652832,
				long: 139.839478,
				name: 'Tokyo',
				textPosition: 'left'
			}
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
	name="Tokyo, Japan"
	height={340}
	zoom={200}
	focus={true}
	center={[80, 40.6263868]}
	markers={tripData.locations}
>
	<p>
		The alarm went at 07:30 in the morning and after two train rides I arrived at Schiphol Airport
		Amsterdam where my Finnar Flight to Helsinki was delayed for fourty minutes due to fog at
		Helsinki Airport. Luckily we had a tailwind so the total delay was about 20 minutes.
	</p>
	<p>
		From Helsinki we took a Finnair flight to Narita, Tokyo, where we arrived around nine in the
		morning. With little sleep on the plane we headed to the city center do drop our bags at the
		hotel, so we could explore Tokyo on a Jet-lagged day.
	</p>
</Location>
