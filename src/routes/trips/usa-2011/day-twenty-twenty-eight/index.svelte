<script context="module">
	export const postData = {
		title: 'Day twenty - twenty-eight',
		subtitle: 'Road to San Francisco',
		trip: 'usa-2011',
		startDate: new Date('2011-07-22'),
		endDate: new Date('2011-08-01'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1032.jpg',
			width: 2200,
			height: 1461,
			alt: 'San Francisco '
		}
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		The road down to San Francisco was mostly spent doing things instead of watching scenic views,
		so the amount of photo's taken dropped to near-zero. Below is the rest of the trip condensed into one
		post.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110723-_DSC1008-Pano.jpg"
	width="2200"
	height="609"
	alt="Pacific coast beach"
/>

<Location
	name="Road to San Francisco"
	height={240}
	zoom={800}
	focus={true}
	center={[-110.613953, 39.477791]}
	markers={[
		{ lat: 45.5051, long: -122.675, name: 'Portland' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' },
		{ lat: 40.7627, long: -124.2216, name: 'Samoa Dunes' },
		{ lat: 38.9582, long: -122.6264, name: 'Clear lake' }
	]}
>
	<p>
		We started in <strong>Portland</strong> and drove to the coast to drive down local roads instead
		of taking the highway.
	</p>
	<p>
		We also visited a wildlife park where you could pet a tiger, it also had Capybara's which are
		amzing animals. It wasn't like Tiger king, but it wasn't a zoo either.
	</p>
	<p>Other activities included ATV driving and water scooter ...sailing?</p>
</Location>

<TextContent>
	<h2>Samoa Dunes</h2>
	<p>
		We rented a couple of ATV's to drive in the dunes. One of the few places where this is allowed.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110722-IMG_01221.jpg"
			width="2200"
			height="1650"
			alt="Samoa Dunes"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<h2>Shady business</h2>
	<p>
		On the way to San Francisco we stopped to sleep at a Comfort Inn that was just way too shady and
		not at all Comfort-Inn like. The only place to eat nearby was a run-down Denny's and there were
		a bunch of women in the lobby that did not dress for a Fancy party ;).
	</p>
	<p>
		The only reason we booked the hotel was that it was the least worst in the area and had a
		pool...
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110724-IMG_01432.jpg"
			width="1650"
			height="2200"
			alt="sign on door that says this pool is closed"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<h2>Clear lake</h2>
	<p>
		We had great fun on the ATV's so we tried the water variant, water scooters. Which went well..
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1024.jpg"
		width="2200"
		height="1461"
		alt="Water scooter"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1019.jpg"
		width="2200"
		height="1461"
		alt="Water scooter damage"
	/>
</Panels>

<TextContent>
	<h2>America's Healthiest</h2>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-IMG_01441.jpg"
			width="1650"
			height="2200"
			alt="Americas Healthiest grocery"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<h2>San Francisco</h2>
	<p>After a couple of days and a lot of money lighter we reached San Francisco!</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-IMG_01461.jpg"
			width="1650"
			height="2200"
			alt="Golden Gate Bridge"
		/>
	</PhonePic>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1032.jpg"
		width="2200"
		height="1461"
		alt="San Francisco "
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1034.jpg"
		width="2200"
		height="1461"
		alt="San Francisco "
	/>
</Panels>

<TextContent>
	<h2>Alcatraz</h2>
	<p>
		We managed to get one of the last tickets to Alcatraz, we did had to book it including a
		hop-on-hop-off bus tour, which was actually quite nice!
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110727-IMG_01541.jpg"
			width="1650"
			height="2200"
			alt="Boat to Alcatraz"
		/>
	</PhonePic>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110727-IMG_01561.jpg"
			width="2200"
			height="1650"
			alt="Showers at Alcatraz"
		/>
	</PhonePic>
</TextContent>
<TextContent>
	<h2>To Boston</h2>
	<p>
		After all these days it was time to head home. Our Comfort Inn was near the San Francisco
		airport (SFO), so we dropped off our rental car (no damage!) and headed for our plane.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110729-IMG_01831.jpg"
			width="1650"
			height="2200"
			alt="United flight from SFO to BOS"
		/>
	</PhonePic>
</TextContent>
<TextContent>
	<h2>New York</h2>
	<p>
		I'm not quite sure how we got from Boston to New York, I assume by plane. The last few days were
		spent at my buddy's Uncle in Allentown again, where we stocked up on Apple TV's to bring back.
		And after a few days of relaxing we took our flight home to Amsterdam.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110731-IMG_02031.jpg"
			width="2200"
			height="1650"
			alt="Statue of Liberty in the distance"
		/>
	</PhonePic>
</TextContent>
