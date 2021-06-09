<script context="module">
	export const postData = {
		title: 'Day Four',
		subtitle: 'Bishkek, Kyrgyzstan',
		trip: 'central-asia-2019',
		startDate: new Date('2019-04-04'),
		image: {
			src: 'https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09366.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 42.8753145,
				long: 74.6036313,
				name: 'Ala Too Square, Bishkek, Kyrgyzstan'
			},
			{
				lat: 42.8781727,
				long: 74.6070691,
				name: 'Oak Park, Bishkek, Kyrgyzstan'
			},
			{
				lat: 42.8792672,
				long: 74.6161621,
				name: 'Victory Square, Bishkek, Kyrgyzstan'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		After a good night&#39;s sleep (we went to bed at 21:00) we were ready for a new day. It&#39;s
		time to explore Bishkek, the capital of Kyrgyzstan. Luckily for us all the touristy things are
		centered in a few blocks.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09349.jpg"
	width="2200"
	height="1467"
/>

<Location
	name="Bishkek, Kyrgyzstan"
	height={340}
	zoom={400}
	focus={true}
	center={[74.4953346, 42.6558635]}
	markers={[{ lat: 42.882004, long: 74.582748, name: 'Bishkek', textPosition: 'left' }]}
>
	<p>
		Bishkek is the capital of Kyrgyzstan and therefor the economic, political and cultural center of
		the country.
	</p>
	<p>
		During the Soviet reign the city became a center for industrial activities, mainly those that
		were transferred from parts of Russia that were occupied by the Nazi's during the second world
		war.
	</p>
	<p>
		At some point there was a fighter pilot school, where a certain Hosni Moebarak trained, who
		eventually would become the president of Egypt.
	</p>
</Location>
<TextContent
	><h2>Ala Too Square</h2>
	<p>
		The main square in the city is Ala Too Square. Walking up to the square we were stopped by the
		&quot;Tourist Police&quot; who asked us about our stay in the country and if we had any problems
		they could help with, very friendly.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09353.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09407.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09345.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09359.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09408.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		It&#39;s not a touristy city which is great for my &quot;As few people in the picture as
		possible&quot; since there were only two other people here.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09362.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09369.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09364.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>One block over is the &quot;Parliament of the Kyrgyz Republic&quot;.</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09366.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09368.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09374.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09346.jpg"
		width="2200"
		height="1467"
	/>
</Panels><TextContent
	><h2>Oak Park</h2>
	<p>
		From the Parliament we wrapped around the block to the back, where found Oak Park. An amusement
		park with many attractions.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09390.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09376.jpg"
		width="1467"
		height="2200"
	/>
</Panels>

<TextContent
	><p>
		One of them was a ferris wheel, which we took to get a nice overview of the city. Unfortunately
		it was too clouded to get a good view of the mountains in the distance.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09378.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09382.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		As a Roller Coaster enthusiast we just had to ride one of the few coasters in Kyrgyzstan.
		Because we were the only ones, the operator let us do four laps.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09391.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09393.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09395.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		Tucked away behind a museum is an old statue of Lenin, it used to stand on the spot where the
		horse is at the beginning of this post. Spread out through the park with the Lenin statue where
		some other Soviet Union Relics.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09397.jpg"
	width="2200"
	height="1467"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09402.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09403.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		Walking to the next attraction we came across some very unique buildings, one of which is a
		Circus, we think.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09419.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><h2>Victory Square</h2>
	<p>
		The next attraction is Victory Square, a monument to the victory over Nazi Germany in the second
		world war.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09430.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		Our idea was to visit a hotel behind the square to take a nice photo with the mountains in the
		background, but it was still too cloudy to get a good view.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09434.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09418.jpg"
		width="1467"
		height="2200"
	/>
</Panels>

<TextContent
	><p>
		We stopped for a quick lunch, which we thought was a small wrap, but turned out to be quite the
		meal. After lunch we headed to the last destination of our trip. A, what we thought to be,
		beautiful park.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09435.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09436.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		The park turned out to be quite different from the pictures on Google. It was supposed to be a
		swimming pond, but the water was kind of missing...
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09442.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		Slightly dissapointed we took a taxi back to the hotel to get our bags and head for the airport.
		During every step of the check-in process people were asking is about our Visa for Uzbekistan
		and we kept telling them we don&#39;t need one anymore since Februari 2019.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/central-asia-2019/day-four/IMG_20190404_190014.jpg"
			width="4000"
			height="3000"
		/>
	</PhonePic>
</TextContent>

<Location
	name="Tashkent, Uzbekistan"
	height={220}
	zoom={1000}
	focus={true}
	center={[74.4953346, 42.6558635]}
	markers={[
		{ lat: 42.882004, long: 74.582748, name: 'Bishkek' },
		{ lat: 41.311081, long: 69.240562, name: 'Tashkent', textPosition: 'left' }
	]}
>
	<p>
		Thanks to timezones the flight only cost us 20 minutes and we were right about the Visa, after a
		few questions the friendly border agent let us into the country.
	</p>
	<p>
		Uzbekistan is a country where credit cards are not generally accepted so we took about 500.000
		SOM from the ATM (about 50 Euro&#39;s) and headed for the official taxi stand.
	</p>
</Location>

<TextContent>
	<p>
		Our hotel was about nine minutes away, but our taxi driver decided on a detour. At the hotel he
		tried to charge us 200.000 SOM (or we could also pay in dollars, $25). This was obviously way to
		high and I went to the hotel reception where they told me the ride should cost 5.000 to 7.000
		SOM. So his markup was only 193.000 SOM and the negotiation began. By negotiation I mean that I
		just said 7.000 while he tried to do anything including threatening calling the cops to get his
		price, which dropped and dropped untill he eventually reluctanly agreed to 7.000 SOM.
	</p>
	<p>
		Now step two of the process began as the ATM only spit out bills of 50.000. We showed him the
		bill and gestured him to get the change and that we wouldn&#39;t give the bill untill we had
		counted the change. There he tried another trick by counting really quick and giving us an
		incorrect amount. We caught on though and refused to give the money. A few swearwords later he
		drove off in anger, which meant a free taxi ride for us. Pro-tip for any Uzbeki taxi drivers out
		there, don&#39;t try to charge 28 times the amount it should cost.
	</p>

	<p>This eventull evening ended with a delicious roadside dinner and a beer at the hotel.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/central-asia-2019/day-four/IMG_20190404_212520.jpg"
			width="4000"
			height="3000"
		/>
	</PhonePic>
</TextContent>
