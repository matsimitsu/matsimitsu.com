<script context="module">
	export const postData = {
		title: 'Day sixteen',
		subtitle: 'Las Vegas',
		trip: 'usa-2019',
		startDate: new Date('2019-08-03'),
		endDate: new Date('2019-08-04'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_171717.jpg',
			width: '2200',
			height: '1650',
			alt: ''
		},
		locations: [
			{
				lat: 36.1672559,
				long: -115.1485163,
				name: 'Las Vegas'
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
	import Map from '$lib/Map.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		This day we took it easy and after sleeping in for a bit we packed our bags and headed on our
		way to the beautifull city of Barstow, where literally nothing happens. But not before driving
		through the Hollywood hills for some amazing views of LA.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09801.jpg"
	width="2200"
	height="1467"
	full
/>

<Location
	name="Las Vegas"
	height={180}
	zoom={1000}
	focus={true}
	center={[-120.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		As mentioned there&#39;s not a whole lot to do in Barstow, so we woke up and headed to Las
		Vegas, so we could check into the hotel and chill at the pool as it was our last day in the USA.
	</p></Location
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_134149.jpg"
		width="2200"
		height="1650"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_141322.jpg"
		width="2200"
		height="1650"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_171724.jpg"
	width="2200"
	height="1650"
/>
<TextContent
	><p>
		And whith this amazing view from my sunbed at the Mirage pool it&#39;s almost time to close this
		trip.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_171717.jpg"
	width="2200"
	height="1650"
	full
/>
<TextContent
	><p>
		The next day we returned the rental car and took a 10-hour uneventful flight back to Amsterdam
		and a train back home.
	</p></TextContent
>
