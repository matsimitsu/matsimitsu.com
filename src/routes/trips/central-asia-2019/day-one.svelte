<script context="module">
	export const postData = {
		title: 'Day One',
		subtitle: 'Flying from Amsterdam to <s>Bishkek</s> Istanbul',
		trip: 'central-asia-2019',
		startDate: new Date('2019-04-01'),
		image: {
			src: 'https://cdn.matsimitsu.com/central-asia-2019/day-one/day-one2.jpg',
			width: '3806',
			height: '2855',
			alt: ''
		},
		locations: [
			{ lat: 41.015137, long: 28.97953, name: 'Istanbul' },
			{ lat: 52.377956, long: 4.89707, name: 'Amsterdam' },
			{ lat: 42.882004, long: 74.582748, name: 'Bishkek', textPosition: 'left' }
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

<TextContent>
	<p>
		At exactly 14:20 the train arrived to take me to Arnhem station, where Onno would meet me to
		take the train to Dusseldorf Aiport.
	</p>
	<p>
		Once arrived at the airport, we checked the departure times and noticed that our flight to
		Istanbul had a one hour delay. Which was not great, as our connection flight had a connection
		time of... one hour.
	</p>
	<p>Still, we had to make it to Istanbul first.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-one/day-one1.jpg"
	width="4000"
	height="3000"
/>

<Location
	name="Istanbul"
	height={300}
	zoom={400}
	focus={true}
	center={[40.97953, 44.015137]}
	markers={postData.locations}
>
	<p>
		One hour later than planned we arrived at Istanbul Ataturk Airport. Our next flight would leave
		exactly 8 minutes after we arrived at the gate. We made our way to the gate just to tick the box
		of &quot;we tried&quot; in case anyone was waiting for us (no one waited).
	</p>
	<p>
		Long story short (it&#39;s 02:40 now), we got re-booked on a new flight, a visa to get into
		Turkey, a free hotel with breakfast and lunch and plenty of time to explore Istanbul tomorrow.
	</p></Location
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/central-asia-2019/day-one/day-one4.jpg"
	width="4000"
	height="3000"
/>
