<script context="module">
	export const postData = {
		title: 'Day twelve',
		subtitle: 'Highway One',
		trip: 'usa-2019',
		startDate: new Date('2019-07-29'),
		endDate: new Date('2019-07-30'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09689.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 35.6438587,
				long: -121.1907533,
				name: 'San Simeon, CA, USA'
			},
			{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
			{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		Our next destination is Los Angeles and what better way to get there than to drive the famous
		Highway One. This highway traverses the west coast and offers amazing views of the rugged
		coastline.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09646.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09671.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09665.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		Progress isn&#39;t fast, you&#39;ll almost never hit the posted speed limit and there are just
		too many amazing views that require a pull-over.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09662.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		This doesn&#39;t matter though, as the weather is amazing and trying to avoid the waves while
		jumping from rock to rock is just too much fun.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09698.jpg"
	width="2200"
	height="1467"
/>

<Location
	name="San Simeon"
	height={180}
	zoom={1000}
	focus={true}
	center={[-120.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		One of the more famous attractions along the route is San Simeon, where you can see Elephant
		Seals. These lovely (but also very smelly) creatures chill on the beach and every once in a
		while two of them go head to head in a fight, or they throw up sand to cover themselves.
	</p></Location
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09758.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		With the seals covered we made our way to Santa Maria where we will stay the night in what is
		described as a haunted hotel.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09689.jpg"
	width="2200"
	height="1467"
	full
/>
