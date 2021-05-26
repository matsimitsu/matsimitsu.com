<script context="module">
	export const postData = {
		title: 'Day twelve - fifteen',
		subtitle: 'Mexican Border and San Diego',
		trip: 'usa-2011',
		startDate: new Date('2011-07-15'),
		endDate: new Date('2011-07-17'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0682.jpg',
			width: 2200,
			height: 1461,
			alt: 'The Mexican border'
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
		Instead of heading up to Yosemite National Park from Death valley, we made a little detour, the
		opposite way, towards the Mexican border.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0682.jpg"
		width="2200"
		height="1461"
		alt="The Mexican border"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0685.jpg"
		width="2200"
		height="1461"
		alt="Farm in southern California"
	/>
</Panels>

<TextContent>
	<h2>Junkyard / Old car museum</h2>
	<p>
		While driving along the border we noticed what looked like Junkyard, but it had a welcome sign
		so we obliged.
	</p>
	<p>
		Turns out it was a car museum of sorts where they restored old cards from the 20's-70's, they
		had some really cool vehicles there. With not much else planned for the day we wandered around
		there for an hour or so.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0687.jpg"
	width="2200"
	height="1461"
	alt="Hood ornament"
/>

<Panels
	><ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0695.jpg"
		width="1461"
		height="2200"
		alt="Junkyard"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0723.jpg"
		width="2200"
		height="1461"
		alt="Stop Vacuum"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0708.jpg"
	width="2200"
	height="1461"
	alt="Richfield tanker"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0709.jpg"
		width="2200"
		height="1461"
		alt="Old truck"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0725.jpg"
		width="2200"
		height="1461"
		alt="Windshield with bullet holes"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0749.jpg"
	width="2200"
	height="1461"
	alt="Old army jeep"
/>

<Location
	name="San Diego"
	height={320}
	zoom={800}
	focus={true}
	center={[-108.613953, 37.477791]}
	markers={[
		{ lat: 32.7157, long: -117.1611, name: 'San Diego', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]}
>
	<p>
		After the Junkyard we made our way to <strong>San Diego</strong>, where the Pacific Ocean and
		the Mexican border meet.
	</p>
	<p>
		We had a hotel downtown with a view of the aircraft carrier USS Midway. We booked the hotel on
		Priceline and it was waaay to fancy for two slipper and shorts wearing people.
	</p>
	<p>We explored down-town San Diego, especially the bars..</p>
	<p>
		It was the first (and last!) hangover I've ever had on a trip. That day we went to SeaWorld wich
		was super busy, not great with a ringing headache.
	</p>
</Location>

<TextContent>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-IMG_00811.jpg"
			width="2200"
			height="1650"
			alt="View of the USS Midway in San Diego"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<h2>SeaWorld</h2>
	<p>
		SeaWorld was pretty nice, we got a tip from an employee about which order to watch the various
		shows through the day, as they all reference eachother with jokes that only make sense in that
		order.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110716-IMG_00871.jpg"
		width="2200"
		height="1650"
		alt="Seaworld San Diego show"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110717-IMG_00921.jpg"
		width="1650"
		height="2200"
		alt="Sharps Secure Needle holder"
	/>
</Panels>

<TextContent>
	<p>
		That evening we did not explore the bars of San Diego, but did some nessecary laundry, which
		made for nice room decorations. Oh the glamour of road-tripping.
	</p>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110717-IMG_00931.jpg"
			width="1650"
			height="2200"
			alt="Socks"
		/>
	</PhonePic>
</TextContent>
