<script>
	import Map from '$lib/Map.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import TextContent from '$lib/TextContent.svelte';

	export let data = {};
	const { tripData } = data;
</script>

<TripHeader {...tripData} />
<TextContent>
	<p>
		I visted Beijing in China on a 72 hour transfer visum before hading to Japan to travel the
		country by their high-speed train called the Shinkansen. We ended the trip with a nice stopover
		in Seoul, South Korea.
	</p>
</TextContent>
<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>
