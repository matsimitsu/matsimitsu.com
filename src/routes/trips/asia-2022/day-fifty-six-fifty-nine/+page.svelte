

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<TextContent>
	<p>After breakfast it was time to head to the docks for a boat back to the mainland.</p>
	<PhonePic subtitle="I left nothing behind">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_015241577.MP.jpg"
			width="4032"
			height="3024"
			alt=""
		/>
	</PhonePic>
	<PhonePic subtitle="Ferry to the mainland">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_034209474.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
</TextContent>
<Location
	name="Kuala Lumpur"
	height={440}
	zoom={1500}
	focus={true}
	center={[100.523186, 4.736717]}
	markers={postData.locations}
>
	<p>Instead of flying, I booked a train to Malaysia's capital city, Kuala Lumpur, today.</p>
	<p>
		Tickets were pre-booked, and from the ferry terminal on the mainland, there was a nice covered
		walkway directly to the train station.
	</p>
	<p>
		This turned out to be quite helpful, as I managed to plan a travel day on what would be the only
		day on my entire trip where it rained all day.
	</p>
	<p>
		The train was modern, and it was a smooth ride to Kuala Lumpur; and my hotel was within walking
		distance of the train station, which was very convenient.
	</p></Location
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_043542548.jpg"
		width="4032"
		height="3024"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_043631038.jpg"
		width="4032"
		height="3024"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_043728587.jpg"
		width="3024"
		height="4032"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>City Centre</h2>
	<p>
		My hotel was located in the city center, and in the evening, I ventured out to explore the area.
	</p>
	<p>
		Looking for dinner, I stumbled on this super cool book store in this old theatre called "REXKL."
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_104051233.jpg"
		width="3024"
		height="4032"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_104153970.jpg"
		width="4032"
		height="3024"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_104108197.MP.jpg"
		width="3024"
		height="4032"
		alt=""
	/>
</Panels>

<TextContent>
	<p>In front of REXKL stood a silver airstream trailer with a Bao Bun shop inside.</p>
	<PhonePic subtitle="Bao Buns"
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_104733862.MP.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
	<p>After "dinner", it was time to do the laundry and go to bed</p>
	<PhonePic subtitle="Oh the glamorous lifestyle">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220629_110618331.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05519.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<p>
		The next day it was time to explore Kuala Lumpur properly, and you have to start with the
		Petronas Towers
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05529.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05535.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>There's some interesting architecture about, such as this submarine-inspired building.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05541.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05539.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05550.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05545.jpg"
	width="4000"
	height="2667"
	alt=""
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05582.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05543.jpg"
		width="4000"
		height="2644"
		alt=""
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05551.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05555.jpg"
		width="4000"
		height="3216"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05559.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05563.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05562.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05569.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<p>
		The next day I explored a museum and some shopping malls to do some last-minute shopping, but
		not before delicious breakfast.
	</p>
	<PhonePic subtitle="Breakfast">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_041932214.jpg"
			width="4032"
			height="3024"
			alt=""
		/>
	</PhonePic>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_061035815.jpg"
		width="4032"
		height="3024"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_061132185.MP.jpg"
		width="4032"
		height="3024"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_061341320.jpg"
		width="3024"
		height="4032"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05584.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_065923389.jpg"
		width="3024"
		height="4032"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05587.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>The People of KL</h2>
	<p>I noticed only afterwards that aparently today was people photo day :)</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05588.jpg"
		width="4000"
		height="2591"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05589.jpg"
		width="2424"
		height="4000"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05552.jpg"
	width="4000"
	height="2667"
	alt=""
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05590.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05591.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05592.jpg"
		width="3923"
		height="3125"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05594.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05596.jpg"
		width="2612"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-57/20220701-05595.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		For dinner I walked the street market in front of the hotel. Not the most healty option, but
		definitely the most delicous.
	</p>
	<PhonePic subtitle="All the sugar">
		<Panels>
			<ResponsiveImage
				src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_125926939.jpg"
				width="4032"
				height="3024"
				alt=""
			/>
		</Panels>
	</PhonePic>
	<p>
		I also managed to score a <a
			href="https://old.matsimitsu.com/trips/asia-2017/day-thirty-eight/"
			target="_blank">Hanshin Tigers</a
		> shirt
	</p>
	<PhonePic subtitle="Let's go Tigers">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-57/PXL_20220701_125543042.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
</TextContent>
