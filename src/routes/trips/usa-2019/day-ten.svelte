<script context="module">
	export const postData = {
		title: 'Day ten',
		subtitle: 'San Francisco',
		trip: 'usa-2019',
		startDate: new Date('2019-07-27'),
		endDate: new Date('2019-07-28'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09518.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 36.1672559,
				long: -115.1485163,
				name: 'Las Vegas'
			},
			{ lat: 37.7749, long: -122.4194, name: 'San Francisco', textPosition: 'left' },
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

<Location
	name="San Francisco"
	height={220}
	zoom={1000}
	focus={true}
	center={[-120.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		We&#39;re past the half-way point of the trip and made it to San Francisco. We took a slight
		detour to be greeted by the Golden Gate Bridge.
	</p>
	<p>
		Because of the crowds, there was a one-way system in place and a farily long walk from the place
		where we could park our car to the viewpoint. It's worth it, though!
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09508.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09567.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09611.jpg"
		width="2200"
		height="1467"
	/>
</Panels><TextContent
	><p>
		After heading to the hotel to get some sleep, we woke up the next day with a dealine for the
		11:30 Ferry to Alcatraz Island. Our hotel is located in San Bruno and we took the BART (Bay Area
		Rapid Transit) train to the city.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09571.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><h2>Alcatraz Island</h2>
	<p>
		Alcatraz is located in the Bay and it takes about 15 minutes to get there by boat.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09578.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<Panels>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09589.jpg"
			width="2200"
			height="1467"
		/>

		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09590.jpg"
			width="2200"
			height="1467"
		/>
	</Panels>
</Panels><TextContent
	><p>
		The audio tour is one of the best in the world and it&#39;s still good the second time.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09617.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09587.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09613.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09581.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09614.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09592.jpg"
		width="2200"
		height="1467"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09583.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09619.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		After returning from the island we wandered around through San Francisco, having lunch in China
		Town and finally took the subway back to our hotel.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09629.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09636.jpg"
		width="1367"
		height="2200"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09632.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09630.jpg"
		width="2200"
		height="1467"
	/>
</Panels><ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09634.jpg"
	width="2200"
	height="1467"
/>
