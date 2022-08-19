<script context="module">
	export const postData = {
		title: 'Day one-six',
		subtitle: 'From New-York/Allentown to The Rocky Mountains.',
		trip: 'usa-2011',
		startDate: new Date('2011-07-04'),
		endDate: new Date('2011-07-09'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0155.jpg',
			width: 2200,
			height: 1461,
			alt: 'View of valley in Rocky Mountains Nat. Park.'
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
		The trip started with a delay of one day, this because my travel buddy had an Uncle who was a
		pilot at Continental Airlines and we could fly very cheaply, but only on stand-by seats. Our
		first attempt ended in a drive back home from Schiphol Airport, as there were no stand-by seats
		that day.
	</p>
	<p>
		The second day we had more luck and we made our way to New York City via Newark Liberty
		International Airport.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110704-IMG_0016-1.jpg"
			width="2200"
			height="1650"
			alt="Photo of In flight entertainment system"
		/>
	</PhonePic>
	<p>
		From New York we had to take a bus to Allentown, Pennsylvania where the Pilot Uncle lived with
		his wife. They offered to let us stay for a few days for the 4th of July celebration, very cool!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110705-_DSC0002.jpg"
	width="2200"
	height="1461"
	alt="Burger beeing grilled"
/>

<TextContent>
	<p>
		Most days were spent exploring the area, helping out with various chores around the house and
		grilling some meat on the BBQ.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110705-_DSC0006.jpg"
	width="2200"
	height="1461"
	alt="View of road in Allentown"
/>

<Location
	name="New York & Allentown to Denver, Colorado"
	height={320}
	zoom={600}
	focus={true}
	center={[-90.613953, 38.477791]}
	markers={[
		{ lat: 40.613953, long: -75.477791, name: 'Allentown', textPosition: 'left' },
		{ lat: 40.7128, long: -74.006, name: 'New York' },
		{ lat: 41.8781, long: -87.6298, name: 'Chicago' },
		{ lat: 41.2565, long: -95.9345, name: 'Omaha' },
		{ lat: 39.7392, long: -104.9903, name: 'Denver' }
	]}
>
	<p>
		While I had been to the USA a couple of times before with work for conferences, this was the
		first time on a month-long road trip from the east coast to the west coast.
	</p>
	<p>
		We started in Allentown on the 5th, after a great 4th of July celebration with more (and bigger,
		louder) fireworks than I've ever seen in my Life.
	</p>
	<p>
		We got our Rental Car (a Jeep Grand Cherokee) and from Allentown we made our way to Denver,
		Colorado via cities such as Pittsburgh, <strong>Chicago</strong>, Des Moines,
		<strong>Omaha</strong>
		and finally ending up at <strong>Denver</strong>
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110708-_DSC0012.jpg"
	width="2200"
	height="1461"
	alt="Person driving a JEEP"
/>

<TextContent>
	<p>
		Most days were spent entirely on the road, just driving to the neverending rolling hills with
		farmland. Around Omaha the scenery started to change and slowly the land became more barren and
		you'd see road signs telling you the next place to get Gas is hundreds of miles away. And to not
		pick up hitchhikers, only to notice a Prison in the far distance.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110708-_DSC0018.jpg"
	width="2200"
	height="1461"
	alt="Nebraska scenery"
/>

<TextContent>
	<h2>Rocky Mountain National Park.</h2>
	<p>
		After a few days we arrived in Denver, with the Rocky Mountains looming in the background, a
		great sight! After a night in a local motel we crossed into the Rocky Mountains.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0036.jpg"
		width="1461"
		height="2200"
		alt="View of the Rocky Mountains"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0023.jpg"
		width="2200"
		height="1461"
		alt="View of a pass in Colorado"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0028.jpg"
	width="2200"
	height="1461"
	alt="View of the Rocky Mountains"
/>

<TextContent>
	<p>
		The great thing about road-trips is that you can stop anywhere to rest or eat. Our car was
		packed with the biggest cooler that would fit, filled with ice, drinks and condiments. The most
		dificult part was to find bread that's edible and not white and 90% sugar. I like my bread
		brown/whole-wheat thank you!
	</p>
	<p>
		Aaaaanyway, we stopped over near a stream and made our way upstream to a waterfall where we had
		a very nice lunch, surrounded by nature.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0032.jpg"
	width="2200"
	height="1461"
	alt="View of the Rocky Mountains"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0045.jpg"
	width="2200"
	height="1461"
	alt="View of the Rocky Mountains"
/>

<TextContent>
	<p>
		After a while we made it to the National Park proper. On this first trip we did most things the
		"American way", which means pull over at the viewpoint, walk 10m and take some photos and on to
		the next viewpoint.
	</p>
	<p>
		On later trips, I made a point of always exploring the area further, even going on hour-long
		hikes just to get a better sense of the area. It's something I wished I did on this trip as
		well.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0051.jpg"
		width="2200"
		height="1461"
		alt="View in Rocky Mountains Nat. Park."
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0054.jpg"
		width="2200"
		height="1461"
		alt="Sign that says: Your entrance fee makes this project possible"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0076-Edit.jpg"
	width="2200"
	height="810"
	alt="View of valley in Rocky Mountains Nat. Park."
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0071.jpg"
		width="1461"
		height="2200"
		alt="View of stream in Rocky Mountains Nat. Park."
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0149.jpg"
		width="1461"
		height="2200"
		alt="View of valley in Rocky Mountains Nat. Park."
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0155.jpg"
	width="2200"
	height="1461"
	alt="View of valley in Rocky Mountains Nat. Park."
/>

<TextContent>
	<p>
		What I love about America is that there is a huge diversity of climates and temperatures. One
		minute you're driving through beatiful, lush valleys and the next you're right in the snow.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0161.jpg"
	width="2200"
	height="1461"
	alt="Snow in Rocky Mountains Nat. Park."
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0196.jpg"
		width="2200"
		height="1461"
		alt="View of snowy mountains in Rocky Mountains Nat. Park."
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0197.jpg"
		width="2200"
		height="1461"
		alt="View in Rocky Mountains Nat. Park."
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0204.jpg"
	width="2200"
	height="1461"
	alt="Snow in Rocky Mountains Nat. Park"
/>

<TextContent>
	<p>
		We stopped for a break at one of the many Picknick area's and then made our way out of the park,
		down the <strong>Colorado River</strong> to <strong>Utah</strong>, state of many beautiful
		National Parks.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0209.jpg"
		width="2200"
		height="1461"
		alt="Road closed sign in Rocky Mountains Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0219.jpg"
		width="2200"
		height="1461"
		alt=""
	/>
</Panels>
