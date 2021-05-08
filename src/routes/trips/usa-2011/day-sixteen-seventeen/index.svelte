<script context="module">
	export const postData = {
		title: 'Day sixteen - seventeen',
		subtitle: 'Yosemete National Park',
		trip: 'usa-2011',
		startDate: new Date('2011-07-18'),
		endDate: new Date('2011-07-19'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0835-Pano.jpg',
			width: 2200,
			height: 1424,
			alt: 'View of Yosemite National Park'
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
		We had a long driving day ahead, we were all the way down in San Diego and we needed to go to
		Yosemite National Park. We stopped mid-way around Fresno, California where we visited a gun
		range to do some shootin'.
	</p>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-IMG_01011.jpg"
			width="1650"
			height="2200"
			alt="Bullseye"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0825.jpg"
	width="2200"
	height="1461"
	alt="Road leading up to Yosemite National Park"
/>

<Location
	name="Yosemete National Park"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={[
		{ lat: 32.7157, long: -117.1611, name: 'San Diego', textPosition: 'left' },
		{ lat: 37.8651, long: -119.5383, name: 'Yosemete Nat. Park' },
		{ lat: 36.7378, long: -119.7871, name: 'Fresno' },
		{ lat: 37.7749, long: -122.4194, name: 'San Fransisco', textPosition: 'left' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' },
		{ lat: 39.5296, long: -119.8138, name: 'Reno' }
	]}
>
	<p>
		After Fresno we headed towards Yosemete National Park. It was quite busy at the park but the
		views were amazing.
	</p>
	<p>
		Due to the distance we had to cover that day we couldn't spend a whole lot of time at the park.
		We needed a place to sleep at the east side of the park, where there aren't a lot of
		hotels/towns, especially if you don't pre-book like we did.
	</p>
	<p>
		It was in the afternoon when we got there and it got dark quickly. Eventually we had to make our
		way all the way to Reno for an hotel with rooms.
	</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0835-Pano.jpg"
	width="2200"
	height="1424"
	alt="View of Yosemite National Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0889.jpg"
		width="2200"
		height="1461"
		alt="Stream in Yosemite National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0883.jpg"
		width="1461"
		height="2200"
		alt="Stream in Yosemite National Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0865.jpg"
	width="2200"
	height="1461"
	alt="Stream in Yosemite National Park"
/>

<TextContent>
	<p>
		The park was a lot less busy when we had to make our way to the hotel, because we were exiting
		on the East side, where not a lot of towns are and most people had already left to make it to
		their hotels for dinner time. Which meant we could enjoy the views almost alone.
	</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0890.jpg"
	width="2200"
	height="1461"
	alt="View of Yosemite National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0891.jpg"
	width="2200"
	height="1461"
	alt="View of Yosemite National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-_DSC0897-Pano.jpg"
	width="2200"
	height="994"
	alt="Lake at Yosemite National Park"
/>

<TextContent>
	<p>
		After driving through the evening we stopped at <strong>Reno</strong>, the biggest little city
		in the world.
	</p>
	<PhonePic
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110719-IMG_01031.jpg"
			width="2200"
			height="1650"
			alt="Reno sign"
		/>
	</PhonePic>
</TextContent>
