<script context="module">
	export const postData = {
		title: 'Day one',
		subtitle: 'Flying from Amsterdam to Las Vegas',
		trip: 'usa-2019',
		startDate: new Date('2019-07-18'),
		endDate: new Date('2019-07-19'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-one/DSC00394-2.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 36.1672559,
				long: -115.1485163,
				name: 'Las Vegas'
			}
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

<TextContent>
	<p>
		At exactly 07:55 my brother arrived to take us to the airport. Almost four hours before the
		flight departs, but with an estimated 200.000 passengers leaving Schiphol Airport today we took
		a bit of leeway.
	</p>
	<p>
		The check-in process and security was very smooth and we could spend some time at the airport
		bar before boarding or Boeing 787 to Las Vegas.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-one/IMG_20190718_120441.jpg"
	width="2200"
	height="1650"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/IMG_20190718_224243.jpg"
		width="2200"
		height="1650"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/IMG_20190718_224350.jpg"
		width="2200"
		height="1650"
	/>
</Panels>

<Location
	name="Las Vegas, Nevada"
	height={340}
	zoom={500}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		After arriving and making it through immigration we headed to the Rental car place to pick up
		our car for the next few weeks and headed to the hotel.
	</p>
	<p>
		Most of us were tired after the flight, so we did a quick tour of part of the strip and headed
		to the hotel for a good night of sleep.
	</p>
	<p>
		The next day we woke up really early (Jetlag) and after a nice breakfast at Denny&#39;s we
		headed to Wallmart for supplies such as a cooler and drinks for on the road.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00347.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00340.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		The rest of the day was spent relaxing in the shade at the pools our hotel had to offer, waiting
		for the sun to stop burning us alive so we could see the rest of the strip.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00354.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00357.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		In the evening we headed for dinner, but not before stopping at Dave and Busters for some arcade
		time. We then headed for the strip to see the Bellagio water show.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00401-2.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00382-2.jpg"
		width="2200"
		height="1467"
	/>
</Panels><ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-one/DSC00396-2.jpg"
	width="2200"
	height="1447"
	full
/>
