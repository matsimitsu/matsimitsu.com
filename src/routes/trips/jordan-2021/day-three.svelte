<script context="module">
	export const postData = {
		title: 'Day Three',
		subtitle: 'Jerash',
		trip: 'jordan-2021',
		startDate: new Date('2021-10-03'),
		image: {
			src: 'https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02309.jpg',
			width: 4000,
			height: 2667,
			alt: 'Cardo Maximus'
		},
		locations: [
			{
				name: 'Amman',
				long: 35.930359,
				lat: 31.963158
			},
			{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' }
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
</script>

<TripHeader {...postData} />

<Location
	name="Jerash"
	height={340}
	zoom={5000}
	focus={true}
	center={[35, 31]}
	markers={postData.locations}
>
	<p>
		The morning began with a delicious breakfast, including cake! I then took an Uber to the "North
		bus station," where I could board a bus bound for Jerash, a city about 45 Kilometers north of
		Amman.
	</p>

	<p>
		During the bus ride, I talked with someone from Portugal, and we decided to stick together for
		the day.
	</p>

	<p>
		Jerash is considered one of the most important Roman cities in the middle east, and many remains
		can be found here.
	</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02188.jpg"
	width="4000"
	height="2667"
	alt="Hadrianus Triumph Gate"
/>

<TextContent>
	<p>
		A walk through the area begins at the Hadrianus Triumph Gate, and right behind it, we can find
		the Hippodrome, which was used for horse races.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02191.jpg"
	width="4000"
	height="2667"
	alt="Hadrianus Triumph Gate"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02360.jpg"
	width="4000"
	height="2667"
	alt="Hippodrome"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02193.jpg"
	width="4000"
	height="2667"
	alt="Hippodrome"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02199.jpg"
	width="4000"
	height="2667"
	alt="Hippodrome"
/>

<TextContent>
	<p>
		After getting to the "real" entrance where police checked our tickets, we visited the temple of
		Zeus and right next to it a Romain theatre.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02216.jpg"
		width="4000"
		height="2667"
		alt="Old wall"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02219.jpg"
		width="2667"
		height="4000"
		alt="Chair"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02224.jpg"
	width="4000"
	height="2667"
	alt="Temple of Zeus"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02228.jpg"
	width="4000"
	height="2667"
	alt="Temple of Zeus"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02234.jpg"
	width="4000"
	height="2667"
	alt="Temple of Zeus"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02240.jpg"
	width="4000"
	height="2667"
	alt="Roman Theatre"
/>

<TextContent>
	<p>
		They were setting up for a concert, and for the rest of the day, they played Scottish bagpipe
		music. Talk about setting an ambiance.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02237.jpg"
		width="4000"
		height="2956"
		alt="Roman Theatre"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02244.jpg"
		width="4000"
		height="2667"
		alt="Roman Theatre"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02245.jpg"
	width="4000"
	height="2667"
	alt="Roman Theatre"
/>

<TextContent>
	<p>Scattered throughout the area, you can find mosaics from Byzantine churches.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02247.jpg"
	width="4000"
	height="2667"
	alt="Mosaics"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02252.jpg"
	width="4000"
	height="2667"
	alt="Byzantine church"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02257.jpg"
	width="4000"
	height="2667"
	alt="Mosaics"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02253.jpg"
	width="4000"
	height="2667"
	alt="Byzantine church"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02263.jpg"
	width="4000"
	height="2667"
	alt="Columns"
/>

<TextContent>
	<p>This Artemis temple was partially closed off for renovations.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02269.jpg"
	width="4000"
	height="3242"
	alt="Artemis Temple"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02264.jpg"
		width="2667"
		height="4000"
		alt="Artemis Temple"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02265.jpg"
		width="2667"
		height="4000"
		alt="Artemis Temple"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02271.jpg"
	width="4000"
	height="2667"
	alt="Artemis Temple"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02288.jpg"
	width="3818"
	height="4000"
	alt="Artemis Temple"
/>

<TextContent>
	<p>
		Next were more floor mosaics and another Odeon (Theatre), they must really like their
		performances!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02274.jpg"
	width="4000"
	height="2667"
	alt="Mosaics"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02282.jpg"
	width="4000"
	height="2667"
	alt="Odeon"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02277.jpg"
		width="2667"
		height="4000"
		alt="Odeon"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02280.jpg"
		width="2667"
		height="4000"
		alt="Odeon"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02286.jpg"
	width="4000"
	height="2667"
	alt="Odeon"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02293.jpg"
		width="2667"
		height="4000"
		alt="Odeon"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02295.jpg"
		width="2667"
		height="4000"
		alt="Odeon"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02289.jpg"
	width="4000"
	height="2667"
	alt="Odeon"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02300.jpg"
	width="4000"
	height="2667"
	alt="North Gate"
/>

<TextContent>
	<p>
		We reached the end of the site with this gate, and we made our way back along a road called
		Cardo Maximus.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02303.jpg"
	width="4000"
	height="2667"
	alt="Cardo Maximus"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02309.jpg"
	width="4000"
	height="2667"
	alt="Cardo Maximus"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02314.jpg"
		width="4000"
		height="2667"
		alt="Cardo Maximus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02316.jpg"
		width="4000"
		height="2667"
		alt="Cardo Maximus"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02319.jpg"
		width="4000"
		height="2667"
		alt="Cardo Maximus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02322.jpg"
		width="4000"
		height="2667"
		alt="Cardo Maximus"
	/>
</Panels>
<TextContent>
	<p>It must have been amazing to see all these structures back when they were still functional.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02325.jpg"
	width="4000"
	height="2667"
	alt="Cardo Maximus"
/>

<TextContent>
	<p>Along the Cardo Maximus are more temples and churches flanked by many, many columns.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02332.jpg"
	width="4000"
	height="2667"
	alt="Cardo Maximus"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02333.jpg"
	width="4000"
	height="2667"
	alt="Fallen columns along Cardo Maximus"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02345.jpg"
		width="4000"
		height="2667"
		alt="Old structure along Cardo Maximus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02337.jpg"
		width="2667"
		height="4000"
		alt="Old structure along Cardo Maximus"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02344.jpg"
	width="4000"
	height="2810"
	alt="Old structure along Cardo Maximus"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02350.jpg"
	width="4000"
	height="2667"
	alt="Old structure along Cardo Maximus"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02348.jpg"
		width="2667"
		height="4000"
		alt="Old structure along Cardo Maximus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02351.jpg"
		width="2667"
		height="4000"
		alt="Anciend coke machine"
	/>
</Panels>

<TextContent>
	<p>The road "ends" at the Forum Cardo</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02356.jpg"
	width="4000"
	height="2667"
	alt="Forum Cardo"
/>

<TextContent>
	<p>
		After exiting through the giftshop / crafts market, we had to find our way back to Amman. We got
		hot-potatoed between a couple of minibuses, but eventually ended up on one that went directly to
		the North Bus Station.
	</p>
	<p>
		From there I managed to order an Uber that was just dropping a person off just 5 meters from
		where I was standing, said goodbye to my friend for the day, and went back to the Hotel. After
		making the daily backup of photo's I went out for traditional Jordan dinner.
	</p>
	<PhonePic subtitle="Traditional Jordan Dinner">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-163059878.jpg"
			width="4000"
			height="3000"
			alt=""
		/>
	</PhonePic>
	<p>
		I made another lap through the neighbourhood of my hotel, got some coffee, climed down the
		endless stairs and called it a night.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-165523522.jpg"
		width="4000"
		height="3000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-172614266.jpg"
		width="3000"
		height="4000"
		alt=""
	/>
</Panels>
