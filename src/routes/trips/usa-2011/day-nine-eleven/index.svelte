<script context="module">
	export const postData = {
		title: 'Day nine - eleven',
		subtitle: 'Death Valley',
		trip: 'usa-2011',
		startDate: new Date('2011-07-12'),
		endDate: new Date('2011-07-14'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0645.jpg',
			width: 2200,
			height: 1461,
			alt: 'View of sand dunes at Death Valley National Park'
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
		After the obligatory stop at Las Vegas, where we explored the strip and the casino's (without a
		Camera) we were ready to get to the next destination: <strong>Death Valley National Park</strong
		>. But not before having an excellent BLT sandwich at Mel's Diner.
	</p>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-IMG_00751.jpg"
			width="2200"
			height="1650"
			alt="Mels Diner in Death Valley National Park"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0620.jpg"
	width="2200"
	height="1461"
	alt="Road leading up to Death Valley National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0622.jpg"
	width="2200"
	height="1461"
	alt="Entrance sign of Death Valley National Park"
/>

<Location
	name="Death Valley National Park"
	height={350}
	zoom={800}
	focus={true}
	center={[-118.613953, 37.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 36.5054, long: -117.0794, name: 'Death Valley Nat. Park', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]}
>
	<p>
		This national park is relatively close to Las Vegas and a popular day-trip destination. The
		closer you get to the park, the higher the temperature gets. 40-50 degrees Celcius are no
		exceptions, make sure you have plenty of water and a car with good air conditioning!
	</p>
	<p>
		It's not really a park where you get out and explore on foot, due to the heat, but it's amazing
		to drive around in nonetheless.
	</p>
	<p>
		If you watch carefully you might see cars wrapped in black and white triangles, which are new
		models of cars that are tested in the valley for their heat endurance.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0623.jpg"
	width="2200"
	height="1461"
	alt="View of Death Valley National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0624.jpg"
	width="2200"
	height="1461"
	alt="View of Death Valley National Park showing signs pointing to 190 East and West"
/>

<TextContent>
	<h2>Twenty Mule teams</h2>
	<p>
		One of the attractions at the park is a remnant of a 20 Mule Team convoy. These were used to
		transport Borax through the desert, not a pleasant job in this heat!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0633.jpg"
	width="2200"
	height="1461"
	alt="Twenty Mule Teams at Death Valley National Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0635.jpg"
		width="2200"
		height="1461"
		alt="Twenty Mule Teams at Death Valley National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0636.jpg"
		width="2200"
		height="1461"
		alt="Sign describing Twenty Mule Teams at Death Valley National Park"
	/>
</Panels>

<TextContent>
	<h2>Sand dunes</h2>
	<p>
		From the Twenty Mule Teams we made our way deeper into the valley, just before you drop down to
		the valley floor you come across amazing Sand Dunes, which would not look out of place in a Star
		Wars movie.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0643.jpg"
	width="2200"
	height="1461"
	alt="View of sand dunes at Death Valley National Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0646.jpg"
		width="2200"
		height="1461"
		alt="View of sand dunes at Death Valley National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0647.jpg"
		width="2200"
		height="1461"
		alt="View of sand dunes at Death Valley National Park"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0645.jpg"
	width="2200"
	height="1461"
	alt="View of sand dunes at Death Valley National Park"
/>

<TextContent>
	<p>
		At some point in the valley you'll be completely cut-off from civilisation. The only thing still
		working is a crappy AM radio station broacasting Christian music.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0648.jpg"
		width="2200"
		height="1461"
		alt="Road in Death Valley National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0650.jpg"
		width="2200"
		height="1461"
		alt="Road in Death Valley National Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0651.jpg"
	width="2200"
	height="1461"
	alt="Road in Death Valley National Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0656.jpg"
		width="2200"
		height="1461"
		alt="Boulders at Death Valley National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0652.jpg"
		width="2200"
		height="1461"
		alt="Bush in Death Valley National Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0660.jpg"
	width="2200"
	height="1461"
	alt="Boulders at Death Valley National Park"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-_DSC0664.jpg"
	width="2200"
	height="1461"
	alt="Boulders at Death Valley National Park"
/>

<TextContent>
	<p>After all the driving today we rewarded ourselves with some delicious food.</p>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110714-IMG_00801.jpg"
			width="2200"
			height="1650"
			alt="In-N-Out mmmm"
		/>
	</PhonePic>
</TextContent>
