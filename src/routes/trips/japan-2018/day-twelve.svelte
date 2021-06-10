<script context="module">
	export const postData = {
		title: 'Aqua Park',
		subtitle: 'Shinagawa',
		trip: 'japan-2018',
		startDate: new Date('2018-11-12'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936aa2a86927dd4423292.jpg',
			width: '6000',
			height: '4000',
			alt: ''
		},
		locations: [
			{
				lat: 35.6278294,
				long: 139.73508659999993,
				name: 'Maxell Aqua Park, Tokyo, Japan'
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
		With rain predicted yet again I looked for something indoors to do, one of the recommended
		things to do was the Maxell Aqua Park in Shinagawa. After breakfast I made my way over there,
		but not before stopping at Yodobashi Camera to browse around. For European people it&#39;s like
		a MediaMarkt, but then imagine seven of those stacked on top of eachother with the most weird
		stuff you can imagine, like a ton of storm troopers.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be9358b2a86927dd442326a.jpg"
	width="6000"
	height="4000"
/>

<TextContent
	><h2>Maxell Aqua Park</h2>
	<p>
		After lunch (noodles) I headed to the Aquarium. It also features an indoor carousel.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be935a42a86927dd442326d.jpg"
	width="6000"
	height="4000"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be935e12a86927dd4423272.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be935d72a86927dd4423271.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		After a display of jellyfish you were lead to a show arena where a dolphin show was about to
		start.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936192a86927dd4423277.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be9361c2a86927dd442327a.jpg"
		width="2582"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		From there you entered a &quot;Jungle&quot; area with losts of lizzardy creatures.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936292a86927dd442327e.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be9362b2a86927dd442327f.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936312a86927dd4423280.jpg"
	width="6000"
	height="4000"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936462a86927dd4423284.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936512a86927dd4423288.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		Finally there was a tunnel where you could walk through a tank filled with.. fish.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be9365a2a86927dd442328c.jpg"
	width="6000"
	height="4000"
/>
<TextContent><p>Time to get some dinner.</p></TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936722a86927dd4423291.jpg"
		width="5496"
		height="3664"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936712a86927dd4423290.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
