<script context="module">
	export const postData = {
		title: 'Institute for Nature Study',
		subtitle: 'A rainy day',
		trip: 'japan-2018',
		startDate: new Date('2018-11-09'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2018/infs/5be6a9f32a86927dd44231e9.jpg',
			width: '6000',
			height: '4000',
			alt: ''
		},
		locations: [
			{
				lat: 35.636007,
				long: 139.721312,
				name: 'Institute for Nature Study'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		Today&#39;s program consisted of a few parks in the city center as there was a bit of rain
		forecasted. I started with the &quot;Institute for Nature Study&quot; that supposedly has very
		nice fall colors in this time of year.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a93c2a86927dd44231ca.jpg"
	width="6000"
	height="4000"
/>

<TextContent
	><h2>Institute for Nature Study</h2>
	<p>
		Unfortunately the predicted rain was a lot heavier then expected and even an umbrella didn&#39;t
		offer much protection.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a94b2a86927dd44231cf.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		There was only once place to get out of the rain in the entire park, so that&#39;s where I ate
		my lunch. After that I finished the lap around the park and called it a day.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9622a86927dd44231d6.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9692a86927dd44231d7.jpg"
		width="6000"
		height="4000"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a97c2a86927dd44231e1.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9772a86927dd44231dc.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a97c2a86927dd44231e0.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		I didn&#39;t have had any Sushi yet, so time to fix that. This was a very nice place near my
		hotel and they had a laminated piece of paper explaining the etiquette and how to order custom
		items, that was very nice!
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/infs/5be6aaaf2a86927dd44231ec.jpg"
	width="4208"
	height="2368"
/>
<TextContent
	><p>
		After dinner I did a quick lap around the local shopping street and headed back to the hotel.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9962a86927dd44231e8.jpg"
	width="6000"
	height="4000"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9942a86927dd44231e7.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/infs/5be6a9922a86927dd44231e5.jpg"
		width="6000"
		height="3669"
	/>
</Panels>
