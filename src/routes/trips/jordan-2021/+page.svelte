<script>
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';

	export let data = {};
	const { tripData } = data;
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
