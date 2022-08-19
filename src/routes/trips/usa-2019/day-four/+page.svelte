<script context="module">
	export const postData = {
		title: 'Day four',
		subtitle: 'Monument Valley',
		trip: 'usa-2019',
		startDate: new Date('2019-07-21'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-four/DSC00672.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 36.9820026,
				long: -110.1108327,
				name: 'Monument Valley, Arizona, USA'
			},
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
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		The jet-lag was still on our side, everyone woke up at seven in the morning. This meant an early
		departure for Monument Valley, resulting in plenty of time in the park.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00661.jpg"
	width="2200"
	height="1467"
/>
<Location
	name="Monument Valley, Arizona"
	height={220}
	zoom={1000}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		Monument valley is what people think of when they imagine the American west. It&#39;s featured
		in many movies and the road leading up to the park is beautiful.
	</p>
	<p>
		There&#39;s a dirt road leading throughout the park that you can drive with your car. A good
		time to test the off-road capabilities of our rental car ;).
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00708.jpg"
	width="2200"
	height="1467"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00684.jpg"
	width="2200"
	height="1467"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00706.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00693.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00672.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		The views throughout the park are amazing with new rock formations around every corner.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00734.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00738.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-four/DSC00725.jpg"
	width="2200"
	height="1467"
	full
/>
