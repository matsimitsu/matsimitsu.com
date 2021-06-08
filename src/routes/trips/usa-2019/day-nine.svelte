<script context="module">
	export const postData = {
		title: 'Day nine',
		subtitle: 'Yosemite',
		trip: 'usa-2019',
		startDate: new Date('2019-07-26'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09462.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 37.7401412,
				long: -119.567272,
				name: 'Yosemite National Park'
			},
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
	import Map from '$lib/Map.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		This is the last National Park we&#39;ll be visiting, but it&#39;s certainly not least.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09235.jpg"
	width="2200"
	height="1467"
/>

<Location
	name="Yosemite National Park"
	height={220}
	zoom={1000}
	focus={true}
	center={[-120.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		After just a few minutes in the park, we had to hit the breaks <em>hard</em>, a young bear was
		crossing the road, and because of my excellent photography skills, you can see him/her in the
		crappy photo below :P
	</p>
	<p>
		After our bear encounter we had lunch near a lake and made our way into the Valley area of the
		park.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09237.jpg"
	width="2200"
	height="1428"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09242.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09243.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent><p>The road to the valley is filled with amazing viewponts.</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09254.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09259.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09255.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		In the valley we found a parking spot near the river and we spent some time wandering around the
		area.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09278.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		After this little stop it was time to climb up the Bridalveil Fall. The great thing about
		National Parks is they let you wander around, we made it up to the first small fall with a pool,
		while everyone else was crowding down below at the viewpoint.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09445.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		After the waterfall climb, which took almost two hours, we had to circle the loop to get to the
		tunnel viewpoint. In the loop you have views over &quot;El Capitain&quot;, famous for the
		movie/documentary &quot;Free Solo&quot;.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09461.jpg"
		width="2200"
		height="1321"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09472.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		The final view of the day was from the &quot;Tunnel viewpoint&quot; where you could see the
		iconic view of the park. From this viewpoint we made our way to the town of Merced, where
		we&#39;re staying for the night.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09475.jpg"
	width="2200"
	height="1467"
	full
/>
