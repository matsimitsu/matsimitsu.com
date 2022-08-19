<script context="module">
	export const postData = {
		title: 'Day Twelve',
		subtitle: 'Cycling around Yangshuo',
		trip: 'china-2018',
		startDate: new Date('2018-05-12'),
		image: {
			src: 'https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06689.jpg',
			width: 4000,
			height: 2667,
			alt: 'Valley near Yangshuo'
		},
		locations: [
			{
				lat: 25.304142,
				long: 110.273727,
				name: 'Guilin',
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
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		With the predicted rain, we decided to take it easy and sleep in for once. After a delicious BLT
		sandwich as lunch, we packed our umbrellas and coats and made our way to the bike rental place
		to rent two mountain bikes for a trip through the surroundings of Yangshuo.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06681.jpg"
	width="4000"
	height="2667"
	alt="Floats near Yangshuo"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06682.jpg"
		width="4000"
		height="2667"
		alt="River near Yangshuo"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06688.jpg"
		width="4000"
		height="2818"
		alt="River floats near Yangshuo"
	/>
</Panels>
<TextContent>
	<p>
		The trip started with an off-road path that was kind of on the map, taking us through valleys
		with little farms and no one else around. Eventually, we ended up on the main thoroughfare and a
		bridge where the bamboo rafts were docking.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06684.jpg"
	width="4000"
	height="2667"
	alt="Valley near Yangshuo"
/>

<TextContent>
	<p>It doesn't matter where you look, the views are amazing.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06689.jpg"
	width="4000"
	height="2667"
	alt="Valley near Yangshuo"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06692.jpg"
		width="4000"
		height="2667"
		alt="Yangshuo"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06693.jpg"
		width="4000"
		height="2667"
		alt="Yangshuo"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06705.jpg"
	width="4000"
	height="2667"
	alt="Yangshuo"
/>

<TextContent>
	<p>
		As the day progressed, the temperature started rising, reaching 34 degrees Celcius (with 90%
		humidity).
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06695.jpg"
	width="4000"
	height="2667"
	alt="Yangshuo"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06708.jpg"
	width="4000"
	height="2667"
	alt="Yangshuo"
/>

<TextContent>
	<p>Every once in a while, we were joined by other cyclists.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06701.jpg"
	width="4000"
	height="3008"
	alt="Yangshuo"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06698.jpg"
		width="4000"
		height="2584"
		alt="Yangshuo"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06702.jpg"
		width="4000"
		height="2667"
		alt="Tandem bike near Yangshuo"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06703.jpg"
	width="4000"
	height="2667"
	alt="Yangshuo"
/>

<TextContent>
	<p>
		After an exhausting climb out of the valley back to Yangshuo we hit the town for some
		well-deserved dinner.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06713.jpg"
		width="2667"
		height="4000"
		alt="Yangshuo"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06714.jpg"
		width="3323"
		height="4000"
		alt="Yangshuo"
	/>
</Panels>
