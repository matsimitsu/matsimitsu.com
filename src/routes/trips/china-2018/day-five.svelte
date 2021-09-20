<script context="module">
	export const postData = {
		title: 'Day Five',
		subtitle: 'Hong Kong to Shenzhen',
		trip: 'china-2018',
		startDate: new Date('2018-05-05'),
		image: {
			src: 'https://cdn.matsimitsu.com/china-2018/day-five/20180505-00949.jpg',
			width: 6000,
			height: 4000,
			alt: 'Shenzhen fairground'
		},
		locations: [
			{
				lat: 22.302711,
				long: 114.177216,
				name: 'Hong Kong'
			},
			{
				lat: 22.542883,
				long: 114.062996,
				name: 'Shenzen',
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
	import Location from '$lib/Location.svelte';
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		We started with breakfast and a last quick walk around the neighborhood of our hotel. Then we
		packed our bags and headed to the ferry to cross the harbor into Kowloon to the train station.
	</p></TextContent
>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00923.jpg"
	width="6000"
	height="4000"
	alt="Kowloon harbour"
/>

<Location
	name="Hong Kong > Shenzhen"
	height={380}
	zoom={1000}
	focus={true}
	center={[114, 22]}
	markers={postData.locations}
>
	<p>
		Today is the day we cross into mainland China and see if our visa works. Cheap as we are, we
		could either register for individual visas, which cost around 80 euros per person and required a
		round-trip to the Chinese embassy to get registered.
	</p>
	<p>
		Or we could become a group tour where I was the tour leader and Onno, the sole participant. This
		way, we could get a cheaper digital visa, and it didn't require a trip to the embassy.
	</p>
	<p>We chose the latter, of course.</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00927.jpg"
	width="6000"
	height="4000"
	alt="Weird building"
/>

<TextContent>
	<p>
		The train took about 30-40 minutes, and you cross the border on foot. Then we had to dodge some
		shady taxi hustlers and took the subway to our hotel, which took a while as it was hidden in the
		city center. Settled in, we wandered around the neighborhood.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00930.jpg"
		width="4868"
		height="4000"
		alt="Traffic cop"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00931.jpg"
		width="6000"
		height="4000"
		alt="Bikes"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00934.jpg"
		width="6000"
		height="4000"
		alt="High speed train in China"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00935.jpg"
	width="6000"
	height="4000"
	alt="Shenzhen avenue"
/>

<TextContent>
	<p>Right next to our hotel is a fairground of some kind.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00947.jpg"
	width="6000"
	height="4000"
	alt="Fairground attraction"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00937.jpg"
		width="6000"
		height="4000"
		alt="Fairground"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00938.jpg"
		width="6000"
		height="4000"
		alt="Artwork"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00940.jpg"
	width="6000"
	height="4000"
	alt="Fairground"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00942.jpg"
		width="6000"
		height="4000"
		alt="Boats"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00945.jpg"
		width="4890"
		height="2890"
		alt="Boat"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00949.jpg"
	width="6000"
	height="4000"
	alt="Shenzhen fairground"
/>

<TextContent>
	<p>It was starting to get dark, time for dinner and hopefully a good nights' sleep.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-five/20180505-00951.jpg"
	width="6000"
	height="4000"
	alt="Shenzhen central"
/>
