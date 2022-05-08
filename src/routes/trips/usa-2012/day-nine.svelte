<script context="module">
	export const postData = {
		title: 'Day Nine',
		subtitle: 'Arches National Park',
		trip: 'usa-2012',
		startDate: new Date('2012-06-13'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0506.jpg',
			width: 2200,
			height: 1461,
			alt: 'Big arch at Arches Nat. Park'
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
	<p>Before we entered the park we had lunch at a bar/diner. A BLT with french fries.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-IMG_09062.jpg"
			width="2200"
			height="1650"
			alt="BLT Sandwich with fries"
		/>
	</PhonePic>
	<p>After dinner at, what I think was Moab, we entered the park.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0418.jpg"
	width="2200"
	height="1461"
	alt="Rocks at Arches Nat. Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0425.jpg"
	width="2200"
	height="1461"
	alt="View of Arches Nat. Park"
/>

<TextContent>
	<p>
		It was again not very busy at the park, which is great for us, many opportunities for shots
		witout people in them.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0431.jpg"
		width="2200"
		height="1461"
		alt="Road leading up to rocks at Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0436.jpg"
		width="1461"
		height="2200"
		alt="Rocks at Arches Nat. Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0443.jpg"
	width="2200"
	height="1461"
	alt="Road at Arches Nat. Park"
/>

<Location
	name="Arches National Park"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 38.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 38.7331, long: -109.5925, name: 'Arches Nat. Park', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' }
	]}
>
	<p>
		Last year we didn't venture far from the car, which was kind of nice in the heat, but this year
		we explored more.
	</p>
	<p>
		We took some small hikes to arches I didn't see the last time. Among those was the most famous
		giant arch that I somehow missed last year.
	</p>
	<p>
		We also went off-road again this time, it's a rental car after all. And we nearly got stuck at
		some point, but somehow managed to complete the trail.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0472.jpg"
		width="1461"
		height="2200"
		alt="Rock formation at Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0462.jpg"
		width="1461"
		height="2200"
		alt="Rock at Arches Nat. Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0476.jpg"
	width="2200"
	height="1461"
	alt="Dead tree at Arches Nat. Park"
/>

<TextContent>
	<p>The views were just as amazing as last year.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0479.jpg"
	width="2200"
	height="1461"
	alt="Arch at Arches Nat. Park"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0480.jpg"
	width="2200"
	height="1461"
	alt="Arch at Arches Nat. Park"
/>

<TextContent>
	<p>
		We only ventured from the viewpoint for small distances, since it was super hot that day and we
		couldn't carrry much water (we also only had small bottles), or that's what we told ourselves at
		least.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0499.jpg"
	width="2200"
	height="1461"
	alt="View from big arch at Arches Nat. Park"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0506.jpg"
	width="2200"
	height="1461"
	alt="Big arch at Arches Nat. Park"
/>

<TextContent>
	<p>
		You might notice a lack of descriptions today, but I honestly can't remember much. That's why
		you should always keep a log on the day you did things, people!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0502.jpg"
	width="2200"
	height="1461"
	alt="View of arches at Arches Nat. Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0511.jpg"
		width="1461"
		height="2200"
		alt="Dead tree at Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0521.jpg"
		width="2200"
		height="1461"
		alt="Crow on fence at Arches Nat. Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0531.jpg"
	width="2200"
	height="1461"
	alt="Desert view at Arches Nat. Park"
/>

<TextContent>
	<p>
		After a couple of hours in the park it was time to head to our next destination of this trip:
		Bryce Canyon!
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0524.jpg"
		width="2200"
		height="1461"
		alt="Rock formations at Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0527.jpg"
		width="2200"
		height="1461"
		alt="View from car of desert at Arches Nat. Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0532.jpg"
	width="2200"
	height="1461"
	alt="Desert view at Arches Nat. Park"
/>
