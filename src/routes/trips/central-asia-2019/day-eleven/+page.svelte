<script context="module">
	export const postData = {
		title: 'Day Eleven',
		subtitle: 'Tashkent, Uzbekistan',
		trip: 'central-asia-2019',
		startDate: new Date('2019-04-11'),
		image: {
			src: 'https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00160.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: []
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

<Location
	name="Tashkent, Uzbekistan"
	height={220}
	zoom={1000}
	focus={true}
	center={[64.4953346, 42.6558635]}
	markers={[
		{ lat: 41.311081, long: 69.240562, name: 'Tashkent' },
		{
			lat: 39.652451,
			long: 66.970139,
			name: 'Samarkand'
		}
	]}
>
	<p>
		We're nearing the end of our trip and yesterday we made our way back to where we started in
		Uzbekistan, the city of Tashkent.
	</p>
	<p>
		Tashkent is only one of two cities in central asia that have a subway and it feels great to be
		able to get around the city without having to rely on our feet or taxi&#39;s.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00151-2.jpg"
	width="2200"
	height="1585"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00146.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00156.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		The subway system was mostly built during Soviet rule and it shows, the stations are all
		uniquely amazing.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00148.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00160.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00153.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		Having emerged from the subway station there was some kind of protest (we think) going on, we
		observed from a distance and contemplated asking the people to move away from the statue we
		wanted to take a photo of, but decided otherwise.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00166.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00164.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		It&#39;s time for lunch, and besides a subway system it&#39;s great to be able to eat something
		different from Plov and meat on a stick.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00169.jpg"
	width="2200"
	height="1655"
/>
<TextContent
	><p>
		After lunch we explored around the city center, wandering past various monuments and parks.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00183.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>There are a lot of buildings in soviet architecture, which looks awesome.</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00193.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00176.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00170.jpg"
	width="2200"
	height="1467"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00195.jpg"
		width="1467"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00197.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
