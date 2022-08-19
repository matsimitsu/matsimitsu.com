

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Explanation from '$lib/Explanation.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<TextContent>
	<p />
</TextContent>
<Location
	name="Beijing > Seoul"
	height={340}
	zoom={800}
	focus={true}
	center={[120.2748645, 39.9999072]}
	markers={[
		{ lat: 39.9999072, long: 116.2748645, name: 'Beijing' },
		{ lat: 37.5326, long: 127.024612, name: 'Seoul', textPosition: 'left' }
	]}
>
	<p>After our 72 hours in Beijing it was time for our next destination, Seoul.</p>
	<p>
		We got up at 05:00 today to get ready for our cab ride to the Airport. After a 1.5 hour flight
		we were in South Korea! It took us about 50 minutes with the subway to get to our hotel, where
		we dropped our bags.
	</p>
	<p>
		With some daylight to spare we explored around our hotel, the <strong>Gwangjang market</strong>,
		<strong>Cheonggyecheon</strong>
		and <strong>Dongdaemun Design Plaza</strong>.
	</p>
</Location>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0559.jpg"
	width="2200"
	height="1461"
	alt="Gwangjang market"
/>

<TextContent>
	<h2>Gwangjang market</h2>
	<p>
		Time for some delicious Korean street food at the Kwangjang market. You get to a stall and ask
		for (or in our case point to) the food you want and it gets cooked in front of you.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0558.jpg"
	width="2200"
	height="1461"
	alt="Korean Pancakes at Gwangjang market"
/>

<TextContent>
	<h2>Cheonggyecheon</h2>
	<p>
		Next to the Kwangjang market is the Cheonggyecheon River. A former "highway" that has been torn
		down and turned into a beautifull river through the city.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0561.jpg"
	width="2200"
	height="1461"
	alt="Cheonggyecheon"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0562.jpg"
		width="2200"
		height="1461"
		alt="Shops/Restaurants at Cheonggyecheon"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0564.jpg"
		width="2200"
		height="1461"
		alt="Bridge at Cheonggyecheon"
	/>
</Panels>
<TextContent>
	<p>
		Very nice to see people relaxing and picknicking near the stream. Mostly under bridges for the
		shade.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0565.jpg"
	width="2200"
	height="1461"
	alt="Bridge at Cheonggyecheon"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0566.jpg"
		width="2200"
		height="1461"
		alt="Bridge at Cheonggyecheon"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0570.jpg"
		width="1461"
		height="2200"
		alt="View from under bridge at Cheonggyecheon"
	/>
</Panels>

<Explanation href="https://en.wikipedia.org/wiki/Cheonggyecheon" name="Wikipedia">
	<h2 class="text-left">Cheonggyecheon (청계천)</h2>
	<p>
		Cheonggyecheon is an ~8 km stream running through Seoul which was covered up with concrate and
		made into a 16 m wide elevated Highway.
	</p>
	<p>
		In July 2003, then-Seoul mayor, Lee Myung-Bak, initiated a project to remove the elevated
		highway and restore the stream. It was a major undertaking since the highway had to be removed
		and years of neglect and development had left the stream nearly dry. 120,000 tons of water were
		to be pumped in daily from the Han River, its tributaries, and groundwater from subway stations.
	</p>
	<p>
		It's been an example for other cities that started similar projects to remove or bury highways
		crossing the city. In all it's a very pleasant to walk around.
	</p>
</Explanation>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0576.jpg"
	width="2200"
	height="1461"
	alt="View of Cheonggyecheon"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0580.jpg"
	width="2200"
	height="1461"
	alt="View from under bridge at Cheonggyecheon"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0583.jpg"
	width="2200"
	height="1461"
	alt="Highrise at Cheonggyecheon"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0589.jpg"
	width="1461"
	height="2200"
	alt="Old factory at Cheonggyecheon"
/>

<TextContent>
	<h2>Dongdaemun Design Plaza</h2>
	<p>We were just aimlessly wandering around and stubmled upon the Dongdaemun Design Plaza.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0597.jpg"
		width="1461"
		height="2200"
		alt="Subway stop in Seoul"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0599.jpg"
		width="2200"
		height="1461"
		alt="Street view of Seoul"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0600.jpg"
		width="2200"
		height="1461"
		alt="Area near Dongdaemun Design Plaza"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0608.jpg"
		width="2200"
		height="1461"
		alt="Area near Dongdaemun Design Plaza"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0610.jpg"
	width="2200"
	height="1461"
	alt="Exterior of Dongdaemun Design Plaza"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0613.jpg"
		width="2200"
		height="1461"
		alt="Art near Dongdaemun Design Plaza"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0612.jpg"
		width="2200"
		height="1461"
		alt="Exterior of Dongdaemun Design Plaza"
	/>
</Panels>

<TextContent>
	<p>The museum was closed so we wandered around this magnificent building.</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0617.jpg"
	width="2200"
	height="1461"
	alt="Tunnel of Dongdaemun Design Plaza"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0613.jpg"
		width="2200"
		height="1461"
		alt="Art near Dongdaemun Design Plaza"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0612.jpg"
		width="2200"
		height="1461"
		alt="Exterior of Dongdaemun Design Plaza"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0622.jpg"
	width="2200"
	height="1461"
	alt="Tunnel/bridge at Dongdaemun Design Plaza"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0624.jpg"
		width="1461"
		height="2200"
		alt="Lotte building"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0628.jpg"
		width="2200"
		height="1461"
		alt="Lotte building"
	/>
</Panels>

<TextContent>
	<p>
		Sleepy and hungry we headed back to the hotel through the maney alleys and underground shopping
		malls to freshen up and get dinner.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0629.jpg"
		width="1461"
		height="2200"
		alt="Streets of Seoul"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0631.jpg"
		width="2200"
		height="1461"
		alt="Shops of Seoul"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0632.jpg"
		width="2200"
		height="1461"
		alt="Streets of Seoul"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0633.jpg"
		width="2200"
		height="1461"
		alt="Typical korean shutters"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0640.jpg"
	width="2200"
	height="1461"
	alt="Seoul back alley"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0637.jpg"
		width="2200"
		height="1461"
		alt="Street in Seoul with shops selling building materials"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0638.jpg"
		width="2200"
		height="1461"
		alt="Seoul back alley"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0642.jpg"
	width="2200"
	height="1461"
	alt="Underground shopping mall in Seoul"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0653.jpg"
	width="2200"
	height="1461"
	alt="Alley in Seoul"
/>

<TextContent>
	<p>That evening we discovered our hotel had a rooftop terrace, which made for nice photos.</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0659.jpg"
	width="2200"
	height="1461"
	alt="Seoul skyline at night"
/>
