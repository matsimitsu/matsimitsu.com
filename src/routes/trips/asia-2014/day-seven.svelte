<script context="module">
	export const postData = {
		title: 'Day Seven',
		subtitle: 'Japan - Shinjuku',
		trip: 'asia-2014',
		startDate: new Date('2014-05-21'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0374.jpg',
			width: 2200,
			height: 1461,
			alt: 'Restaurant in Shinjuku'
		}
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
	name="Tokyo, Japan"
	height={280}
	zoom={800}
	focus={true}
	center={[127.024612, 37.5326]}
	markers={[
		{ lat: 37.5326, long: 127.024612, name: 'Seoul', textPosition: 'left' },
		{ lat: 39.876, long: 116.4039, name: 'Beijing' },
		{ lat: 35.652832, long: 139.839478, name: 'Tokyo' }
	]}
>
	<p>
		Yet again we had to get up super early (05:00) to catch the first subway to the airport. Here we
		got on a packed boeing 777 to Tokyo, Japan!
	</p>
	<p>
		When we arrived it was raining, but that didn't matter we were tired from the short night and
		decided to take it easy.
	</p>
	<p>In the evening we walked around the neighbourhood of our hotel in Shinjuku.</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0369.jpg"
		width="2200"
		height="1461"
		alt="Streets of Shinjuku"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0372.jpg"
		width="2200"
		height="1461"
		alt="Streets of Shinjuku"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0374.jpg"
	width="2200"
	height="1461"
	alt="Restaurant in Shinjuku"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0382.jpg"
		width="1461"
		height="2200"
		alt="Streets of Shinjuku"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0384.jpg"
		width="2200"
		height="1461"
		alt="Streets of Shinjuku"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0388.jpg"
		width="2200"
		height="1461"
		alt="Streets of Shinjuku"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0389.jpg"
		width="2200"
		height="1461"
		alt="Streets of Shinjuku"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0395.jpg"
	width="2200"
	height="1461"
	alt="Streets of Shinjuku"
/>

<TextContent>
	<p>It was about time for dinner, and after we headed up to the lounge deck of our hotel.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0400.jpg"
	width="2200"
	height="1461"
	alt="View from Shinjuku Granbell Hotel rooftop lounge"
/>
