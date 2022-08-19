<script context="module">
	export const tripData = {
		title: 'Asia 2014',
		subtitle: 'The first trip, of what eventually became many, to Asia.',
		trip: 'asia-2014',
		startDate: new Date('2014-05-15'),
		endDate: new Date('2014-06-05'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0216.jpg',
			width: 2200,
			height: 1461,
			alt: 'View down the Great Wall of China'
		},
		countries: ['China', 'South Korea', 'Japan']
	};
</script>

<script>
	import Map from '$lib/Map.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import TextContent from '$lib/TextContent.svelte';
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
