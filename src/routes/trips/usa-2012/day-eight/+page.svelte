

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		The day stared with a nice bruch near a lake, we had lunch from our cooler (sandwiches) and a
		great view to boot!
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-IMG_08892.jpg"
	width="2200"
	height="1650"
	alt="View of a lake"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0178.jpg"
	width="2200"
	height="1461"
	alt="View of farmland"
/>

<TextContent>
	<p>The road leading into the Rocky Mountains had a waterfall where we stopped for some photos.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0197.jpg"
		width="1461"
		height="2200"
		alt="Waterfall near Yosemite National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0206.jpg"
		width="1461"
		height="2200"
		alt="Rocks near Yosemite National Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0219.jpg"
	width="2200"
	height="1461"
	alt="Waterfall near Yosemite National Park"
/>

<Location
	name="Rocky Mountains National Park"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 38.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 40.3428, long: -105.6836, name: 'Rocky Mountains Nat. Park', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' }
	]}
>
	<p>
		This part of the route is the same as last year. My travel buddy this time hadn't seen any of
		the parks yet (well he hadn't been to the USA yet, so he hadn't seen anything).
	</p>
	<p>
		While the must-do parks were mostly the same, this trip did "split off" from the beaten path and
		we did some other things as well.
	</p>
	<p>
		I didn't really mind visiting the parks again and since I was the "tour leader" it's nice to
		have a few spots where you already know how to get there and how long things take.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0252.jpg"
		width="2200"
		height="1461"
		alt="Yosemite National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0285.jpg"
		width="2200"
		height="1461"
		alt="Yosemite National Park"
	/>
</Panels>
<TextContent>
	<p>Time for some lunch at a bar/diner. A BLT with french fries.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-IMG_08922.jpg"
			width="2200"
			height="1650"
			alt="Inside of a bar"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0335.jpg"
	width="2200"
	height="1461"
	alt="Yosemite National Park"
/>

<TextContent>
	<p>The views were just as amazing as last year.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-panorama5.jpg"
	width="2200"
	height="719"
	alt="Yosemite National Park"
/>

<TextContent>
	<p>This was also the last day we did not venture from the viewpoints.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-panorama6.jpg"
	width="2200"
	height="933"
	alt="Yosemite National Park"
/>

<TextContent>
	<p>On the other side of the mountains we followed this stream to our next destination</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0387.jpg"
	width="2200"
	height="1461"
	alt="Railroad tracks near a river"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0390.jpg"
	width="2200"
	height="1461"
	alt="Rocky mountains"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0392.jpg"
		width="1461"
		height="2200"
		alt="Hilly road"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120612-_DSC0395.jpg"
		width="2200"
		height="1461"
		alt="Stream going through the countryside"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0393.jpg"
	width="2200"
	height="1461"
	alt="Desert view"
/>
