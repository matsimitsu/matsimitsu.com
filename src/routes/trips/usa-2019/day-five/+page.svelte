<script context="module">
	export const postData = {
		title: 'Day five',
		subtitle: 'Arches National Park',
		trip: 'usa-2019',
		startDate: new Date('2019-07-22'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-five/DSC00837.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 38.6112027,
				long: -109.607657,
				name: 'Arches National Park'
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
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		It&#39;s another bright and hot day with temperatures reaching 40+ degrees celcius. The
		destination of today is Arches National Park, located about two hours from the hotel.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00756.jpg"
	width="2200"
	height="1467"
/>
<Location
	name="Arches National Park"
	height={220}
	zoom={1000}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		I've been here a <a href="/trips/usa-2011/day-seven">couple</a> of
		<a href="/trips/usa-2012/day-nine">times</a> before, but is has been a few years since and it's an
		amazing park to visit regardless.
	</p>
	<p>
		It was even hotter than the last few times, as this trip is in the middle of summer, instead of
		late spring and it shows in the temperatures. Staying outside of the car for even a few minutes
		will get you soaked in sweat.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00769.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00761.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		With our National Park pass in hand we got into the park and made our way to the first
		viewpoint.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00759.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		The entire park is accessible by car and you only have to walk a few minutes to get into one of
		the arches.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00790.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00786.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		From the park there&#39;s an off-road trail leading back to the highway, our suburban could just
		about make it through.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00819.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00812.jpg"
		width="2200"
		height="1467"
	/>
</Panels><ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00837.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		Not only are there amazing views in the park, but the road from Arches to our hotel in Richfield
		had plenty of beautiful viewpoints. If you are on this road, just take every viewpoint exit.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00838.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00842.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-five/DSC00853.jpg"
	width="2200"
	height="1467"
	full
/>
