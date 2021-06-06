<script context="module">
	export const postData = {
		title: 'Day Five',
		subtitle: 'Kamakura and Enoshima Island',
		trip: 'japan-2019',
		startDate: new Date('2019-10-23'),
		endDate: new Date('2019-10-23'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2019/day-5/DSC00029.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 35.3002889,
				long: 139.4811577,
				name: 'Enoshima, Fujisawa, Japan'
			},
			{
				lat: 35.3168356,
				long: 139.5359759,
				name: 'Kōtoku-in, Kamakura, Japan'
			},
			{
				lat: 35.3251844,
				long: 139.5561792,
				name: 'Tsurugaoka Hachimangü Shrine'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Location from '$lib/Location.svelte';
</script>

<TripHeader {...postData} />

<Location
	name="Enoshima, Fujisawa"
	height={200}
	zoom={1000}
	focus={true}
	center={[139.7831051, 35.6263868]}
	markers={[postData.locations[0]]}
>
	<p>
		The weather forecast was one of the best of this week, so we made it count and took the train
		south to Enoshima Island, where we could enjoy the ocean views of Mt. Fuji and... the ocean
		itself.
	</p>

	<p>Leading up to the island is a shopping street with lots of delicious food and souvenirs.</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00025.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00027.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent><p>The trail will take you past temples/shrines...</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00031.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00034.jpg"
		width="2200"
		height="2156"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00035.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00042.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00039.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent><p>great views...</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00038.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00045.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00044.jpg"
		width="1467"
		height="2200"
	/>
</Panels><TextContent><p>and food, lots of food.</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00046.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00051.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00052.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		At the other end of the island you&#39;re rewarded with great views of Mt. Fuji. (one of the few
		moments I wished for a lens bigger than 30mm).
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00053.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><h2>Kōtoku-in, Kamakura</h2>
	<p>From Enoshima Island we took the tram/train to the Giant Buddha.</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00059.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00060.jpg"
	width="2200"
	height="1467"
/>
<TextContent><p>On our way there we encountered a small procession</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00062.jpg"
	width="2200"
	height="1778"
/>
<TextContent
	><p>
		The giant Buddha statue was well visited today, lots of school classes and people coming out in
		the great weather.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00069.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00065.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00073.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00070.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><h2>Tsurugaoka Hachimangü Shrine</h2>
	<p>
		A few kilometers from the Buddha are many more shrines near Kamakura station. With plenty of
		daylight left we made the trek by food, through the many back alleys of the city. The shrine was
		quite busy as well, with even more school classes paying a visit.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00079.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00082.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00081.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00085.jpg"
	width="2200"
	height="1467"
/>
<TextContent><p>Even shrines need maintenance.</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00086.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-5/DSC00083.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		After a stroll back to the station we took the train back to the hotel, but not before eating
		delicious Sushi.
	</p></TextContent
>
