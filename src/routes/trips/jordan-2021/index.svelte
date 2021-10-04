<script context="module">
	export const tripData = {
		title: 'Jordan 2021',
		subtitle: 'Travel is finally opening up again, time to visit some world wonders in Jordan.',
		trip: 'jordan-2021',
		startDate: new Date('2021-10-01'),
		endDate: new Date('2021-10-07'),
		image: {
			src: 'https://cdn.matsimitsu.com/jordan-2021/day-five/20211005-02791.jpg',
			width: 4000,
			height: 2667,
			alt: 'Petra'
		},
		locations: [
			{
				name: 'Amman',
				long: 35.930359,
				lat: 31.963158
			},
			{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' },
			{ name: 'Petra', long: 35.4155337, lat: 30.481418 },
			{ name: 'Wadi Rum', long: 35.3214502, lat: 29.505919 }
		],
		countries: ['Jordan']
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
	name="Jordan"
	height={610}
	zoom={2000}
	focus={true}
	center={[35, 31]}
	markers={tripData.locations}
>
	<p>
		The plan is to travel from the capital, Amman, in the north to the southern deserts of Wadi Rum.
	</p>
	<p>
		The first few days are spent in Amman from where I plan to go to Jerash to visit ancient Roman
		ruins and at some point will rent a car to travel down south.
	</p>
	<p>
		The choice shouth is to either go on the beautiful Kings Highway that travels through the
		mountains, or travel further west along the Dead Sea. I'm not sure yet what I'll choose. It's
		not nessicarily on my bucket list to float in the Dead Sea, but well.. Since I'm in the area.
	</p>
	<p>
		From the Dead Sea I'll travel to Petra, one of the world wonders and I'm really looking forward
		to spending a day there.
	</p>
	<p>
		Finally I'll spend a day in Wadi Rum on a 4x4 jeep tour of the area. This is the place where
		movies like "The Martian" were filmed.
	</p>
</Location>
