<script context="module">
	export const postData = {
		title: 'Egypt 2009',
		subtitle: 'Land of Pharaohs and Sphinxes. My first trip outside of continental Europe.',
		trip: 'egypt-2009',
		startDate: new Date('2009-08-22'),
		endDate: new Date('2009-08-29'),
		image: {
			src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
			width: 2200,
			height: 1461,
			alt: 'Photo of Egyptian ruins with hieroglyphs in Luxor'
		}
	};
	export const tripData = {
		title: 'Egypt 2009',
		subtitle: 'Land of Pharaohs and Sphinxes. My first trip outside of continental Europe.',
		trip: 'egypt-2009',
		startDate: new Date('2009-08-22'),
		endDate: new Date('2009-08-29'),
		image: {
			src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
			width: 2200,
			height: 1461,
			alt: 'Photo of Egyptian ruins with hieroglyphs in Luxor'
		},
		countries: [
			'Egypt'
		]
	}
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="Egypt"
	height={340}
	zoom={550}
	focus={true}
	center={[31.0206, 25.8025]}
	markers={[
		{ lat: 27.25738, long: 33.81291, name: 'Hurghada', textPosition: 'left' },
		{ lat: 25.6872, long: 32.6396, name: 'Luxor' }
	]}
>
	<p>
		This was my first trip outside of the European continent, it also was my second (and last)
		"package holiday".
	</p>
	<p>
		While this was an easy experience since everyting is arranged for you, we quickly became aware
		that this wasn't how we wanted to travel, it felt quite limited and the all-you-can-eat-restort
		life just wasn't for us.
	</p>
	<p>
		After arriving in Hurghada we sat down with the travel operator and picked the excursions we'd
		like to do during our week long stay in Egypt. We picked a day-trip to <strong>Luxor</strong>, a
		day of diving along the <strong>Hurghada</strong> coast and a quad ride in the dunes nearby.
	</p>
</Location>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0003.jpg"
	width="2200"
	height="1853"
/>
<TextContent>
	<h2>The Karnak temple</h2>
	<p>
		The first excursion was a day trip to Luxor. We woke up early and took a van for the
		multiple-hour long trip to Luxor. There were tons of (military) checkpoints along the way.
	</p>
	<p>
		Luxor is a city in the south of Egypt and was once the capital of the Pharaohs in the 16th-11th
		centuries B.C.
	</p>
	<p>
		Our trip started at the <strong>Karnak</strong> temple, a huge temple site with preserved ancient
		ruins & over 200 structures. Where we were free to roam the complex.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0013.jpg"
		width="1461"
		height="2200"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0015.jpg"
		width="1461"
		height="2200"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg"
	width="2200"
	height="1461"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0016.jpg"
		width="1461"
		height="2200"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0018.jpg"
		width="1461"
		height="2200"
	/>
</Panels>

<TextContent>
	<p>
		It's amazing to see the Egyptian hieroglyphs in real-life along the walls of the temple complex.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0019.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0025.jpg"
		width="2200"
		height="1461"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0022.jpg"
	width="2200"
	height="1461"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0043.jpg"
		width="1461"
		height="2200"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0049.jpg"
		width="1461"
		height="2200"
	/>
</Panels>

<TextContent>
	<p>
		There were quite a number of people visiting the complex, but most people were busy trying to
		stay in the shade as the 30+ degrees sun tried its best to burn through the sunscreen.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0037.jpg"
	width="2200"
	height="1461"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0031.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0046.jpg"
		width="1461"
		height="2200"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0063.jpg"
	width="2200"
	height="1461"
/>
<TextContent>
	<h2>The Nile river</h2>
	<p>
		After wandering around for a few hours through the complex, we were brought to the river banks
		where we boarded a boat to get across. On the other side lunch was served.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0065.jpg"
	width="2200"
	height="1461"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0079.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0083.jpg"
		width="2200"
		height="1461"
	/>
</Panels>
<TextContent>
	<h2>Valley of the kings</h2>
	<p>
		Near Luxor lies a valley called Valley of the Kings. This is the place where a lot of pharaohs
		and powerful nobles were buried in rock-cut tombs.
	</p>
	<p>
		It's also one of the hottest places on earth and it was a nice 45 degrees celcius when we
		arrived.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0093.jpg"
		width="1461"
		height="2200"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0112.jpg"
		width="2200"
		height="1461"
	/>
</Panels>
<TextContent>
	<p>
		For some inexplicable reason I don't seem to have taken any photo's from inside the tombs and I
		can't remember of that was because it wasn't allowed or I just forgot...
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0101.jpg"
	width="2200"
	height="1461"
/>

<TextContent>
	<h2>Quad ride near Hurghada</h2>
	<p>
		Near Luxor lies a valley called Valley of the Kings. This is the place where a lot of pharaohs
		and powerful nobles were buried in rock-cut tombs.
	</p>
	<p>
		It's also one of the hottest places on earth and it was a nice 45 degrees celcius when we
		arrived.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0190.jpg"
	width="2200"
	height="1461"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0289.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0290.jpg"
		width="2200"
		height="1461"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0189.jpg"
	width="2200"
	height="1461"
/>

<Explanation>
	<h2 class="text-left">The downside of tourism</h2>
	<p>
		The quad tour stopped at multiple stops along the way, a couple of those stops were questionable
		at best.
	</p>
	<p>
		One was a camel ride where you could hop on a camel and be walked around a hill for a few
		minutes, wich wasn't that bad in the grand scheme of things.
	</p>
	<p>
		The other was a "zoo" where you could see the native wild-life. Wich consisted of a dark, hot
		and dirty tent which housed several extremely small and dirty shallow pools that contained
		turtles, snakes and other animals. One of the attractions was to "ride" a turtle or poke a snake
		etc.
	</p>
	<p>
		We were quite shocked by the treatment of these animals and from then on we tried our best to
		never visit an attraction that adds to the misery of animals, such as these "road side zoos" or
		riding elephants in Thailand, for example.
	</p>
</Explanation>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0297.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0311.jpg"
		width="1461"
		height="2200"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0188.jpg"
		width="1461"
		height="2200"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0323.jpg"
		width="1461"
		height="2200"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0301.jpg"
		width="2200"
		height="1461"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0307.jpg"
		width="1461"
		height="2200"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/egypt-2009/20090824-_DSC0325.jpg"
	width="2200"
	height="1461"
/>
