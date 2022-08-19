<script context="module">
	export const postData = {
		title: 'Day eight',
		subtitle: 'Death Valley',
		trip: 'usa-2019',
		startDate: new Date('2019-07-25'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09160.jpg',
			width: '2200',
			height: '1467',
			alt: ''
		},
		locations: [
			{
				lat: 36.4240473,
				long: -116.9140437,
				name: 'Death Valley',
				textPosition: 'left'
			},
			{
				lat: 36.1672559,
				long: -115.1485163,
				name: 'Las Vegas'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<Location
	name="Death Valley"
	height={220}
	zoom={1000}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		Today was mostly a travel day from St. George, Utah to Bishop, California. About a six hour
		drive past Las Vegas and through Death Valley.
	</p>
	<p>
		Death Valley is one of the hottest places on earth. Ironically with the heatwave going on
		throughout most of the US, it was raining in Death Valley.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09162.jpg"
	width="2200"
	height="1467"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09156.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09171.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		After the first stop we noticed something in the distance, at first we thought it was more rain,
		but it was a sand storm coming from the dunes down in the valley.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09195.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09201.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		From the dunes we made our way past the salt flats towards the &quot;exit&quot;.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09174.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		The route drops from 4.000 feet to sea level and back up the other side. There are warning signs
		telling you to turn off the Airconditioning of the car to make sure it doesn&#39;t overheat. We
		ignored the warning and luckily for us the car did just fine. On the other side there&#39;s a
		viewpoint for a final view of Death Valley.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09213.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09214.jpg"
	width="2200"
	height="1467"
	full
/>
