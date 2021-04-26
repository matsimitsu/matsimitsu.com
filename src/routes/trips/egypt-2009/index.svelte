<script context="module">
	export const metadata = {
		title: 'Egypt 2009',
		trip: 'egypt-2009',
		date: new Date('2009-08-24'),
		image: {
			src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
			width: 2200,
			height: 1461
		}
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import egypt from '$lib/maps/egypt.json';
</script>

<TextContent>
	<h1>Egypt 2009</h1>
</TextContent>

<div class="mx-auto max-w-screen-lg mt-12 px-4">
	<h2
		class="flex items-center font-extrabold tracking-snug leading-8 text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
	>
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="map-marker-alt"
			class="h-6 w-6 mr-2 text-gray-600 dark:text-gray-400"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			><path
				fill="currentColor"
				d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
			/></svg
		>
		<span>Egypt</span>
		<hr class="flex-1 ml-8 border-b border-t border-gray-200 mt-1 rounded" />
	</h2>
	<div class="flex flex-col lg:flex-row mt-12">
		<div class="flex-1 flex-shrink mr-4 prose prose-lg dark:prose-dark">
			<p>
				This was my first trip outside of the European continent, it also was my second (and last)
				"package holiday".
			</p>
			<p>
				While this was an easy experience since everyting is arranged for you, we quickly became
				aware that this wasn't how we wanted to travel, it felt quite limited and the
				all-you-can-eat-restort life just wasn't for us.
			</p>
			<p>
				After arriving in Hurghada we sat down with the travel operator and picked the excursions
				we'd like to do during our week long stay in Egypt. We picked a day-trip to <strong
					>Luxor</strong
				>, a day of diving along the <strong>Hurghada</strong> coast and a quad ride in the dunes nearby.
			</p>
		</div>
		<div class="flex-1 flex-shrink ml-4">
			<Map
				mapData={egypt}
				zoom={2000}
				center={[31.0206, 25.8025]}
				markers={[
					{ lat: 27.25738, long: 33.81291, name: 'Hurghada', textPosition: 'left' },
					{ lat: 25.6872, long: 32.6396, name: 'Luxor' }
				]}
			/>
		</div>
	</div>
</div>

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
		Luxor is a city in the south of Egypt and was once the capital of the Pharaos in the 16th-11th
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
	<p>There were quite a number of people visiting the complex.</p>
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

<div class="max-w-xl my-40 mx-auto">
	<div class="mx-4 px-8 py-8 bg-white dark:bg-black shadow-lg rounded-lg border dark:border-gray-900">
		<div class="flex justify-end -mt-16">
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="info-circle"
				class="border w-16 h-16 p-2 rounded-full dark:bg-black bg-white border text-gray-400 dark:text-gray-600 dark:border-gray-900"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 192 512"
				><path
					fill="currentColor"
					d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
				/></svg
			>
		</div>
		<div class="prose prose-lg dark:prose-dark">
			<h2 class="text-left">The Egypt desert</h2>
			<p>
				The Western Desert of Egypt is an area of the Sahara that lies west of the river Nile, up to
				the Libyan border, and south from the Mediterranean sea to the border with Sudan.
			</p>
			<p>
				It is named in contrast to the Eastern Desert which extends east from the Nile to Red Sea. The
				Western Desert is mostly rocky desert, though an area of sandy desert, known as the Great Sand
				Sea, lies to the west against the Libyan border.
			</p>
			<p>
				The desert covers an area of 680,650 km2 (262,800 sq mi) which is two-thirds of the land area
				of the country.[1] Its highest elevation is 1,000 m (3,300 ft) in the Gilf Kebir plateau to
				the far south-west of the country, on the Egypt-Sudan-Libya border.
			</p>
			<p>
				The Western Desert is barren and uninhabited save for a chain of oases which extend in an arc
				from Siwa, in the north-west, to Kharga in the south. It has been the scene of conflict in
				modern times, particularly during the Second World War.
			</p>
		</div>
		<div class="flex justify-end mt-4">
			<a
				href="https://en.wikipedia.org/wiki/Western_Desert_(Egypt)"
				class="text-xl font-medium text-blue-500">Wikipedia</a
			>
		</div>
	</div>
</div>
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
