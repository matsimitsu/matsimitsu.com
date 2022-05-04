<script context="module">
	export const postData = {
		title: 'Day One',
		subtitle: 'Singapore, Gardens by the Bay',
		trip: 'asia-2022',
		startDate: new Date('2022-05-04'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03371.jpg',
			width: 4000,
			height: 2667,
			alt: 'Tree forest, Gardens by the bay'
		},
		locations: [
			{
				name: 'Singapore',
				long: 103.851959,
				lat: 1.29027,
				textPosition: 'left'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
</script>

<TripHeader {...postData} />

<Location
	name="Singapore"
	height={560}
	zoom={400}
	focus={true}
	center={[100.523186, 13.736717]}
	markers={postData.locations}
>
	<p>
		I haven't been to school in ages and therefore am blissfully unaware of school holidays. This
		turned out to be a downside for this trip as I managed to book it smack in the middle of one.
	</p>
	<p>
		The problem with school holidays is that everyone wants to travel. After Corona, that had a
		severe impact on Schiphol, where due to a lack of personnel, queues for check-in, security, and
		passport control were hours long <a
			href="https://www.iamexpat.nl/expat-info/dutch-expat-news/chaos-schiphol-continues-staffing-issues-will-take-time-fix"
			rel="noopener noreferrer"
			target="_blank">in the past week</a
		>.
	</p>
	<p>
		Not taking any chances, I booked a Hotel close to Schiphol, so I could be there around 07:30 for
		my 11:15 flight. Usually, this is way too early, but the queue for check-in and security took
		more than two hours today.
	</p>
	<p>My early arrival meant no stress for me, as I knew I'd make the flight.</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-one/20220503-082026747.jpg"
	width="4000"
	height="3000"
	alt="Singapore Airlines A350 at Amsterdam Schiphol"
/>

<TextContent>
	<p>
		Singapore Airlines is a 5-star airline, and it showed. The flight was excellent, with plenty of
		legroom, no one occupying the middle seat (though this was luck and had nothing to do with the
		airline), and amazing food.
	</p>
	<p>
		Immigration was smooth due to filling out everything beforehand online, and after picking up my
		sim card and EZ Link card for public transport, I was on my way to my hotel for the next couple
		of days.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03315.jpg"
	width="4000"
	height="2667"
	alt="Citadines Belastier, Singapore"
/>

<TextContent
	><p>
		After a nap, I ventured outside, searching for some shorts from Uniqlo and food.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03316.jpg"
		width="4000"
		height="2667"
		alt="Singapore"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03318.jpg"
		width="4000"
		height="2581"
		alt="Singapore"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03320.jpg"
		width="4000"
		height="2667"
		alt="7-eleven at Singapore"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03327.jpg"
		width="4000"
		height="2667"
		alt="person taking a photo in Singapore"
	/>
</Panels>

<TextContent>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-one/PXL_20220504_110922972.jpg"
			width="4032"
			height="3024"
			alt="Pho bo"
		/>
	</PhonePic>
	<p>
		Today's food was a delicious Vietnamese Phở Bò with a fried spring roll. This place had good
		reviews and was located in a shopping mall food court, not something you'd expect good food in
		Europe/America, but here good food is everywhere.
	</p></TextContent
>

<TextContent
	><h2>Gardens by the Bay</h2>
	<p>
		After dinner, I planned to go to Fort Canning park, but it was dark already, so I headed to
		another park with more atmosphere after sunset; Gardens by the Bay.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03341.jpg"
	width="4000"
	height="2667"
	alt="Gardens by the Bay, Singapore"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03345.jpg"
		width="4000"
		height="2667"
		alt="View of Downtown Singapore, from Gardens by the bay"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03351.jpg"
		width="4000"
		height="2667"
		alt="View of baby sculpture in Gardens by the bay"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03371.jpg"
	width="4000"
	height="2667"
	alt="Tree forest, Gardens by the bay"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03387.jpg"
		width="4000"
		height="2667"
		alt="Cloud forest, Gardens by the bay"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03388.jpg"
		width="4000"
		height="2990"
		alt="Hamburger icon"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03357.jpg"
		width="4000"
		height="2667"
		alt="Tree forest, Gardens by the bay"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03393.jpg"
		width="2667"
		height="4000"
		alt="Silver forest, Gardens by the Bay"
	/>
</Panels>
