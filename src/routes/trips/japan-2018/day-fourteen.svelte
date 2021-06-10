<script context="module">
	export const postData = {
		title: 'The final hike',
		subtitle: 'To mt. Hiwada, mt. Takashi and mt. Monomi',
		trip: 'japan-2018',
		startDate: new Date('2018-11-14'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebeeca2a86927dd4423317.jpg',
			width: '6000',
			height: '4000',
			alt: ''
		},
		locations: [
			{
				lat: 35.8937703,
				long: 139.3048309,
				name: 'Mt. Hiwada',
				textPosition: 'left'
			},
			{
				lat: 35.8970471,
				long: 139.3005243,
				name: 'Mt. Takashi'
			},
			{
				lat: 36.0000322,
				long: 139.3628529,
				name: 'Mt. Monomi'
			},
			{
				lat: 35.652832,
				long: 139.839478,
				name: 'Tokyo'
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
</script>

<TripHeader {...postData} />

<TextContent
	><p>
		It&#39;s the last day already on this trip and with a beautiful day forecasted I headed to the
		edge of the city again, this time to do a <a
			href="https://en.japantravel.com/saitama/hiwada-takashi-monomi-mtn-trail/8541"
			>3-mountain hike</a
		>.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebedd72a86927dd44232da.jpg"
	width="6000"
	height="4000"
/>

<Location
	name="Mt. Hiwada & co"
	height={220}
	zoom={5000}
	focus={true}
	center={[139.839478, 35.652832]}
	markers={postData.locations}
>
	<p>
		There was no map of the route so I had to go by written text only and it was quite sparse at
		some points.
	</p>
	<p>I managed to find the start of the route and it went uphill immidiately.</p>
	<p>After a good climb I was greeted with the first views.</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebedf42a86927dd44232df.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebedff2a86927dd44232e0.jpg"
	width="6000"
	height="4000"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee092a86927dd44232e5.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee102a86927dd44232e7.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee172a86927dd44232e9.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee2a2a86927dd44232ec.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		It was a clear day and you could see the highrises of downtown Tokyo in the distance.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee382a86927dd44232f2.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee3c2a86927dd44232f3.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee662a86927dd44232fc.jpg"
	width="6000"
	height="4000"
/>

<TextContent
	><h2>Mt. Takashi</h2>
	<p>The next mountain wasn&#39;t very fancy, just a radio tower.</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee472a86927dd44232f7.jpg"
		width="5679"
		height="3786"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee432a86927dd44232f6.jpg"
		width="4000"
		height="6000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee672a86927dd44232fd.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		The route passes through beautifull forests and there was hardly anyone there.
	</p></TextContent
>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee742a86927dd4423304.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee7f2a86927dd4423306.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee7d2a86927dd4423305.jpg"
		width="4000"
		height="6000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebeeaa2a86927dd4423315.jpg"
	width="6000"
	height="4000"
/>

<TextContent
	><h2>Mt. Monomi</h2>
	<p>I had no issues finding the route markers.</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee8c2a86927dd442330a.jpg"
	width="6000"
	height="4000"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee982a86927dd442330e.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee9a2a86927dd4423310.jpg"
		width="4000"
		height="6000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebee9e2a86927dd4423311.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		Eventually the trail took me down the mountains and I ended up a station over from the starting
		point, from where I took the train back to Tokyo.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebeeb42a86927dd4423316.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>The next day I took the Narita Sky Access hi-speed train back to Narita airport.</p>
	<p>
		After a great flight it was just a short layover on the old part of Helsinki Airport (that was
		very cramped and overcrowded) and on to my final flight back to Amsterdam.
	</p></TextContent
>
