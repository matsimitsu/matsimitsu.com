

<script>
	import TripHeader from '$lib/TripHeader.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';

	export let data = {};
	const { tripData } = data;
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
