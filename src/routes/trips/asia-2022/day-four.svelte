<script context="module">
	export const postData = {
		title: 'Day Four',
		subtitle: 'Chinatown, Singapore',
		trip: 'asia-2022',
		startDate: new Date('2022-05-07'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03728.jpg',
			width: 4000,
			height: 2667,
			alt: 'Buddha Tooth Relic Temple'
		},
		locations: [
			{
				name: 'Singapore',
				long: 103.851959,
				lat: 1.29027,
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
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		After a delicious Bánh mì sandwich breakfast, I spent most of the day catching up on various
		chores that were still left unfinished after the last couple of hectic weeks preparing for this
		trip and selling the house.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03652.jpg"
	width="4000"
	height="2667"
	alt="Singapore HDB"
/>

<TextContent>
	<p>I took the bus to Chinatown for delicious food and neon lights in the evening.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03661.jpg"
		width="2667"
		height="4000"
		alt="Singapore HDB"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03653.jpg"
		width="4000"
		height="2667"
		alt="Back alley"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03657.jpg"
		width="4000"
		height="2774"
		alt="Wall art in Chinatown, Singapore"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03655.jpg"
		width="4000"
		height="3059"
		alt="Wall art in Chinatown, Singapore"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03660.jpg"
		width="2667"
		height="4000"
		alt="Singapore view"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03663.jpg"
		width="4000"
		height="2844"
		alt="Old and new"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03662.jpg"
		width="4000"
		height="3131"
		alt="Sushi"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03658.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03671.jpg"
	width="4000"
	height="2667"
	alt="Tiger"
/>

<TextContent>
	<p>
		It was raining quite heavily through the night, but it was nice outside in combination with the
		30-degrees temperature.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03688.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03679.jpg"
		width="2366"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>In the local hawker centers, you could see it was a Saturday night.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03687.jpg"
		width="4000"
		height="2667"
		alt="Beer"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03695.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03692.jpg"
	width="4000"
	height="2667"
	alt="Playground"
/>

<TextContent>
	<p>Dinner consisted of Porkchop rice and vegetables-filled pan-fried dumplings.</p>
	<PhonePic subtitle="Foodpic">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-four/PXL_20220507_103803360.jpg"
			width="4032"
			height="3024"
			alt="Pork chop and pan fried dumplings"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<p>
		People were hanging out at the local Buddha Tooth Relic Temple. I was walking down the side of
		the temple, trying to stay out of the rain, when a surprise procession came around the corner.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03698.jpg"
	width="4000"
	height="2667"
	alt="Buddha Tooth Relic Temple"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03704.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03703.jpg"
		width="4000"
		height="2667"
		alt="Buddha Tooth Relic Temple"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03728.jpg"
	width="4000"
	height="2667"
	alt="Buddha Tooth Relic Temple"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03710.jpg"
		width="3241"
		height="3807"
		alt="Buddha Tooth Relic Temple"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03717.jpg"
		width="4000"
		height="2063"
		alt="Buddha Tooth Relic Temple"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03727.jpg"
	width="4000"
	height="2667"
	alt="Buddha Tooth Relic Temple"
/>

<TextContent>
	<p>As a general rule, if you see egg-tarts, you buy egg-targs.</p>
	<PhonePic subtitle="Foodpics, HongKong and Portugese egg-tarts">
		<Panels>
			<ResponsiveImage
				src="https://cdn.matsimitsu.com/asia-2022/day-four/PXL_20220507_101207552.jpg"
				width="3024"
				height="4032"
				alt="HongKong Egg tart"
			/>
			<ResponsiveImage
				src="https://cdn.matsimitsu.com/asia-2022/day-four/PXL_20220507_122648087.jpg"
				width="3024"
				height="4032"
				alt="Portugese egg-tart"
			/>
		</Panels>
	</PhonePic>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03729.jpg"
		width="4000"
		height="2667"
		alt="Chinatown neon, Singapore"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03732.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03734.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03749.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03745.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>And I don't know what the hell this is, but it was "patrolling" the finance building.</p>
	<PhonePic subtitle="Patrolling robot">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-four/PXL_20220507_130449157.jpg"
			width="3024"
			height="4032"
			alt="Robot guard"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03779.jpg"
	width="4000"
	height="2667"
	alt="Police station"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03765.jpg"
		width="4000"
		height="2667"
		alt="Wonder wash"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03766.jpg"
		width="4000"
		height="3004"
		alt="People chilling at 7-eleven, Singapore"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03781.jpg"
	width="4000"
	height="3738"
	alt="Fire station"
/>
