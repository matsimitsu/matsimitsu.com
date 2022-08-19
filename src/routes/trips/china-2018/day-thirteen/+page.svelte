

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Location from '$lib/Location.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06717.jpg"
		width="4000"
		height="2667"
		alt="Guilin station"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06719.jpg"
		width="4000"
		height="2667"
		alt="HI-speed train at Guilin station"
	/>
</Panels>

<Location
	name="Yangshuo/Guilin > Zhangjiajie"
	height={280}
	zoom={1000}
	focus={true}
	center={[114, 26]}
	markers={postData.locations}
>
	<p>
		Today was a day with lots of sitting on our butts in seats. First on a tuk-tuk to the "bus
		station" and then a bus to the train station.
	</p>
	<p>
		From there, we took a high-speed train to Changsha south railway station, where we had to change
		to the subway to get to the other Changsha station.
	</p>
	<p>From Changsha, the "local" train to Zhangjiajie departed.</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06720.jpg"
		width="4000"
		height="2667"
		alt="Changsha railway station"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06722.jpg"
		width="4000"
		height="2667"
		alt="Changsha railway station"
	/>
</Panels>

<TextContent>
	<p>
		After 13+ hours, we finally arrived at Zhangjiajie railway station. Luckily our hotel is located
		about 50 meters from the station entrance, so no more modes of transport were needed.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06725.jpg"
		width="4000"
		height="2667"
		alt="Train to Zhangjiajie"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06730.jpg"
		width="4000"
		height="2667"
		alt="Zhangjiajie station"
	/>
</Panels>
