<script context="module">
	export const postData = {
		title: 'Spain 2016',
		subtitle: 'A relaxing week in southern Spain with friends.',
		trip: 'spain-2016',
		startDate: new Date('2016-09-16'),
		endDate: new Date('2016-09-24'),
		image: {
			src: 'https://cdn.matsimitsu.com/spain-2016/20160923-0916.jpg',
			width: 4000,
			height: 2657,
			alt: 'Fishing'
		},
		locations: [
			{
				name: 'Tarifa',
				long: -5.60445,
				lat: 36.014321,
				textPosition: 'left'
			},
			{ name: 'Gibraltar', long: -5.35257, lat: 36.14474 }
		]
	};
	export const tripData = {
		title: 'Spain 2016',
		subtitle: 'A relaxing week in southern Spain with friends.',
		trip: 'spain-2016',
		startDate: new Date('2016-09-16'),
		endDate: new Date('2016-09-24'),
		image: {
			src: 'https://cdn.matsimitsu.com/spain-2016/20160923-0916.jpg',
			width: 4000,
			height: 2657,
			alt: 'Fishing'
		},
		countries: ['Spain']
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="Spain"
	height={250}
	zoom={2500}
	focus={true}
	center={[-5.60445, 37.014321]}
	markers={postData.locations}
>
	<p>Last week I spent a very relaxing week in Tarifa, Spain, with a couple of friends.</p>
	<p>
		The week consisted of heading to the beach and BBQ-ing at our <a
			href="https://www.airbnb.com/rooms/7213297">villa</a
		> and a couple of day trips to Tarifa and Gibraltar.
	</p>
	<p>
		We flew to Malaga from Weze with RyanAir and rented a couple of cars to get us around in the
		area.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160919-04861.jpg"
	width="4000"
	height="2667"
	alt="View from our villa in Tarifa"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160918-0466.jpg"
		width="4000"
		height="2657"
		alt="Villa at Tarifa"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160918-04849.jpg"
		width="4000"
		height="2667"
		alt="Tarifa views"
	/>
</Panels>

<TextContent>
	<h2>Tarifa</h2>
	<p>Tarifa is also known as kite surfers paradise because there's usually a strong wind.</p>
	<p>
		One of us brought their kites, and we also rented a wind surf board which is a lot harder than
		it seems.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160917-0438.jpg"
	width="4000"
	height="2657"
	alt="Kites at Tarifa"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160917-0460.jpg"
		width="4000"
		height="2657"
		alt="Kites at Tarifa"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160918-0547.jpg"
		width="4000"
		height="2657"
		alt="Splashing kiter at Tarifa"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/spain-2016/20160924-04995.jpg"
	width="4000"
	height="2892"
	alt="Kite surfer making a jump"
/>

<TextContent>
	<p>
		Tarifa consists of a relatively modern part with many hotels and apartments and an old town with
		small alleys. From the harbor, you can take the ferry to Morocco.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160919-0631.jpg"
	width="4000"
	height="2657"
	alt="Man standing on rocks near Tarifa"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160919-0641.jpg"
		width="4000"
		height="2657"
		alt="Boat in the harbour of Tarifa"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160919-0645.jpg"
		width="4000"
		height="2657"
		alt="Screw"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160919-0648.jpg"
	width="4000"
	height="2657"
	alt="Tarifa alley"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160919-0640.jpg"
		width="4000"
		height="2657"
		alt="Statue in Tarifa harbor"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160919-0647.jpg"
		width="4000"
		height="2657"
		alt="Another statue in Tarifa"
	/>
</Panels>

<TextContent>
	<h2>Gibraltar</h2>
	<p>
		Close to Tarifa lies Gibraltar, a prominent limestone ridge that is part of England. You'll need
		a passport to enter the city.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/spain-2016/20160921.jpg"
	width="4000"
	height="1730"
	alt="Gibraltar panorama"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0697.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar views"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0726.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar cruise ship"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0737.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar cable car"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160921-0708.jpg"
	width="4000"
	height="2657"
	alt="Gibraltar views"
/>

<TextContent>
	<p>
		The main attraction in Gibraltar is the cable cart to the top of the ridge, from where you have
		a great view. There's also a ton of monkeys.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160921-0739.jpg"
	width="4000"
	height="2657"
	alt="Monkeys at Gibraltar"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0744.jpg"
		width="4000"
		height="2657"
		alt="Monkeys at Gibraltar"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-04884.jpg"
		width="4000"
		height="2667"
		alt="Monkeys at Gibraltar"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0751.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar homes"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0750.jpg"
		width="4000"
		height="2657"
		alt="No ball playing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0752.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar homes"
	/>
</Panels>
<TextContent>
	<p>After descending from the ridge, we took the car to the most northern edge of Gibraltar.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160921-0760.jpg"
	width="4000"
	height="2657"
	alt="Gibraltar lighthouse"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0764.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160921-0780.jpg"
		width="4000"
		height="2657"
		alt="Gibraltar mosque"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160921-0762.jpg"
	width="4000"
	height="2657"
	alt="The big guns"
/>

<TextContent>
	<h2>I'm on a boat</h2>
	<p>
		On most of our bucket lists, one of the things was a deep-sea fishing trip, so we found a boat
		with a captain and spent the day on the ocean.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160923-0801.jpg"
	width="4000"
	height="2657"
	alt="On a boat"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160923-0816.jpg"
		width="4000"
		height="2657"
		alt="Boating"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/spain-2016/20160923-0819.jpg"
		width="4000"
		height="2657"
		alt="Boating"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/spain-2016/20160923-0916.jpg"
	width="4000"
	height="2657"
	alt="Fishing"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/spain-2016/20160923-0934.jpg"
	width="4000"
	height="2657"
	alt="Sunset at Tarifa"
/>
