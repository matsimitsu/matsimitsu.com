

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />
<TextContent>
	<p>It's time say goodbye to Singapore, and head to the airport, after coffee of course.</p>
	<PhonePic subtitle="Coffee and steamed bun">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-eight/PXL_20220511_033549062.jpg"
			width="4032"
			height="3024"
			alt=""
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04053.jpg"
	width="4000"
	height="2667"
	alt="Changi Airport Vortex"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04046.jpg"
		width="2667"
		height="4000"
		alt="Changi Airport Vortex"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04061.jpg"
		width="4000"
		height="2667"
		alt="Changi Airport Vortex"
	/>
</Panels>

<TextContent>
	<p>
		Changi Airport, its official name, has been rated the best airport several times in a row for
		the past few years, and their latest addition, called "The Jewel," is one of the many reasons
		you should arrive hours early for your flight to enjoy the scenery.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04050.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04065.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<TextContent>
	<p>
		Changi makes this easy by allowing check-in up to 24 hours before a flight instead of the usual
		3 hours. You can check your bag and explore the airport with only your carry-on backpack.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04056.jpg"
		width="4000"
		height="2667"
		alt="Changi Airport Vortex"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04090.jpg"
		width="2385"
		height="4000"
		alt="Changi Airport vortex"
	/>
</Panels>

<TextContent>
	<p>There are a million restaurants, and I picked Sateh :)</p>
	<PhonePic subtitle="Satah">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-eight/PXL_20220511_054440676.jpg"
			width="3024"
			height="4032"
			alt="Chicken Sateh"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04080.jpg"
	width="4000"
	height="2810"
	alt="Changi Airport Vortex"
/>

<TextContent>
	<p>Time to board the flight to Bangkok (BKK)</p>
	<PhonePic subtitle="Singapore Airlines to BKK">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-eight/PXL_20220511_070521188.jpg"
			width="4032"
			height="3024"
			alt="Singapore Airlines to BKK"
		/>
	</PhonePic>
</TextContent>
