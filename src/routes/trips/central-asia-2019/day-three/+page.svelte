<script context="module">
	export const postData = {
		title: 'Day Three',
		subtitle: 'Ala Archa National Park, Kyrgyzstan',
		trip: 'central-asia-2019',
		startDate: new Date('2019-04-03'),
		image: {
			src: 'https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09339.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 42.6558635,
				long: 74.4953346,
				name: 'Ala Archa National Park'
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

<TextContent
	><p>
		A continuation from day two, since we landed around 05:40 in the morning in Bishkek. We wanted
		to make the most of the day and decided not to sleep, but instead hike around Ala Archa National
		Park.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09322.jpg"
	width="2200"
	height="1467"
/>

<Location
	name="Ala Archa National Park"
	height={250}
	zoom={400}
	focus={true}
	center={[74.4953346, 42.6558635]}
	markers={postData.locations}
>
	<p>
		While this seems weird, we had two reasons <strong>one:</strong> we only have two days here, so
		sleeping for a day would not be great. And <strong>two:</strong> sleeping during the day would only
		make it more difficult to get rid of the Jetlag.
	</p>
	<p>
		We explored the hotel neighbourhood in search for an ATM and a supermarket, both were around the
		corner and booked a driver to take us to the park and back.
	</p></Location
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09323.jpg"
	width="2200"
	height="1467"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09325.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09327.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09324.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09339.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		We were planning to hike to a waterfall, and it starts a good way into the park. On the internet
		we read about people who were dropped off at the beginning of the park, taking 2-3 hours just to
		get to the start of the 3 hour hike.
	</p></TextContent
>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09332.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09333.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		Well that also happened to us, despite explicitly asking to drop us off at the start of the hike
		to both the Hotel clerk and the driver.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09335.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		It started to dawn on us about half an hour into the hike and after a few &quot;lets just check
		this corner&quot;, we took our losses and headed back. The scenery was still amazing, and so was
		the weather so it wasn&#39;t a loss, just not what we had planned.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09344.jpg"
	width="2200"
	height="1467"
/>
