<script context="module">
	export const postData = {
		title: 'Day Eleven - Twenty',
		subtitle: 'Las Vegas, Death Valley, Highway One, Yosemite and San Francisco',
		trip: 'usa-2012',
		startDate: new Date('2012-06-15'),
		endDate: new Date('2012-06-25'),
		image: {
  "src": "https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0794.jpg",
  "width": 2200,
  "height": 1461,
  "alt": "Death Valley Nat. Park"
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
		After all the parks it was time for a change of pace. Where last time we only spent a single
		evening in Las Vegas, we now had slightly longer to explore the city.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120615-IMG_09242.jpg"
			width="2200"
			height="1650"
			alt="Lyxor in Las Vegas"
		/>
	</PhonePic>
	<p>
		We booked a room in the Luxor Hotel, shaped like a pyramid, which makes for an interesting
		interior.
	</p>

	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120615-IMG_09272.jpg"
			width="2200"
			height="1650"
			alt="View from Luxor in Las Vegas"
		/>
	</PhonePic>
	<p>
		The room was great and the hotel a nice base to explore the city morem, which we did without
		camera's.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120615-IMG_09352.jpg"
			width="2200"
			height="1650"
			alt="Cesars Palace Las Vegas"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0797.jpg"
	width="2200"
	height="1461"
	alt="Death Valley Nat. Park sign"
/>

<TextContent>
	<h2>Death Valley</h2>
	<p>
		After Las Vegas we went on to Death Valley. Where the heat was exceptional. 110F is almost 44
		degrees Celsius.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0804.jpg"
			width="2200"
			height="1461"
			alt="Photo of car radio showing heat of 110F"
		/>
	</PhonePic>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0794.jpg"
	width="2200"
	height="1461"
	alt="Death Valley Nat. Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0805.jpg"
		width="2200"
		height="1461"
		alt="Death Valley Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0814.jpg"
		width="2200"
		height="1461"
		alt="Death Valley Nat. Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0844.jpg"
	width="2200"
	height="1461"
	alt="To the bottom of Death Valley Nat. Park "
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0845.jpg"
	width="2200"
	height="1461"
	alt="Bottom of Death Valley Nat. Park "
/>

<Location
	name="Las Vegas, Death Valley and Yosemite"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 38.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 37.8651, long: -119.5383, name: 'Yosemite Nat. Park' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]}
>
	<p>
		Where last time we went down to the Mexican border, this time we headed to the coast, slightly
		above Los Angeles where we rode ATV's through the dunes.
	</p>
	<p>
		We then made our way up the coast on Highway One, before heading inlands to Yosemite National
		Park.
	</p>
	<p>
		From Yosemite we headed back to the coast above San Francisco, where we would eventually end up.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef422a869236802abe05.jpg"
	width="1200"
	height="797"
	alt="Birds on Highway One"
/>
<TextContent>
	<h2>Highway One</h2>
	<p>Highway one was beautiful, we stopped often to enjoy the views from the road.</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef4c2a869236802abe08.jpg"
		width="1200"
		height="797"
		alt="Highway One views"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef6b2a869236802abe10.jpg"
		width="1200"
		height="797"
		alt="Highway One views"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120618-panorama8.jpg"
	width="2200"
	height="972"
	alt="Highway One panorama"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef6c2a869236802abe11.jpg"
		width="1200"
		height="797"
		alt="View of beach on Highway One"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef772a869236802abe14.jpg"
		width="1200"
		height="797"
		alt="View of beach on Highway One"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef952a869236802abe1a.jpg"
	width="1200"
	height="797"
	alt="Bird on Highway One"
/>
<TextContent>
	<h2>Yosemite National Park</h2>
	<p>
		From Highway One we made our way inland to Yosemite National Park. We didn't get to explore the
		park much as it was already getting late. We did climb up to the waterfall, which was very
		nice!.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef9d2a869236802abe1f.jpg"
		width="1200"
		height="797"
		alt="View of California landscape"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef9b2a869236802abe1e.jpg"
		width="1200"
		height="797"
		alt="View of lake in California"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef5a2a869236802abe0b.jpg"
	width="7400"
	height="2200"
	alt="Panorama of waterfall at Yosemite Nat. Park"
/>

<TextContent>
	<h2>San Francisco</h2>
	<p>
		The last few days were spent in San Francisco, exploring Alcatraz and doing all the touristy
		things.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/59bcef812a869236802abe16.jpg"
	width="4416"
	height="2200"
	alt="Golden Gate Bridge at San Francisco"
/>
