<script context="module">
	export const postData = {
		title: 'Day Fifty Three',
		subtitle: 'George Town, Malaysia',
		trip: 'asia-2022',
		startDate: new Date('2022-06-26'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05307.jpg',
			width: 4000,
			height: 2667,
			alt: 'George Town, Malaysia'
		},
		locations: [
			{
				name: 'George Town',
				long: 100.312386,
				lat: 5.4253,
				textPosition: 'left'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
</script>

<TripHeader {...postData} />

<Location
	name="George Town, Malaysia"
	height={560}
	zoom={800}
	focus={true}
	center={[100.312386, 5.4253]}
	markers={postData.locations}
>
	<p>
		After an exhausting day yesterday with over 30.000 steps and little sleep, it was time to wake
		up at four in the morning to catch the 06:30 flight from Don Mueang Airport, Thailand's
		"domestic" airport.
	</p>
	<p>
		Luckily the hotel was just across the highway from the airport, and a short walk across a walk
		bridge, I was in the terminal, where most shops were still closed.
	</p>
	<p>
		After a quick check-in (everything is automated, including the bag drop, something western
		airports can learn from), and an even speedier security check, it was time to get some
		much-needed coffee and board the plane to the 3rd country of this trip; Malaysia.
	</p>
	<p>
		The flight didn't take long, and after an hour-long bus ride, I was at my hotel, where I took a
		shower and got ready to explore George Town.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05276.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent
	><p>
		George Town's architecture is an interesting mix of Chinese clan houses, mansions, skyscrapers,
		and colonial-style buildings.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05273.jpg"
	width="4000"
	height="2747"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05279.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05280.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent><p>A shopkeeper takes a nap in the heat of the blistering sun.</p></TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05271.jpg"
		width="2607"
		height="3212"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05277.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05285.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05282.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent
	><p>The city has a grungy feel to it, but is perfectly safe to wander around.</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05291.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05284.jpg"
		width="4000"
		height="3122"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05289.jpg"
		width="4000"
		height="3242"
		alt=""
	/>
</Panels>
<TextContent><p>Towards the ocean, the colonial architecture starts to appear.</p></TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05293.jpg"
		width="4000"
		height="2876"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05294.jpg"
		width="2519"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05297.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05299.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05300.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05301.jpg"
		width="2502"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent
	><p>
		The ocean front is quite busy and I get why, it's the best place to cool off from the light
		ocean breeze on this sweltering evening.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05302.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05307.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05308.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05312.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05310.jpg"
	width="4000"
	height="2667"
	alt=""
/>
<TextContent
	><p>
		The city put heavy rent controls on the buildings for most of the past century, hence the
		dilapidated state of quite a few buildings. There was simply no money for maintenance.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05314.jpg"
		width="4000"
		height="2774"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05316.jpg"
		width="3223"
		height="3412"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05318.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05319.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent
	><p>
		Tomorrow it's time to explore the surrounding mountains (and temples, always temples) on the
		island.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05322.jpg"
	width="4000"
	height="2667"
	alt=""
/>
