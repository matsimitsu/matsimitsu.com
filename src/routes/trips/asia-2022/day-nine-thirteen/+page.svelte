

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Location
	name="Bangkok, Thailand"
	height={300}
	zoom={400}
	focus={true}
	center={[100.523186, 13.736717]}
	markers={postData.locations}
>
	<p>
		Last Wednesday, I flew from Singapore to Bangkok, and the past week was a "work" week, meaning
		less time spent outside and more inside behind a laptop.
	</p>
	<p>During the week, I did manage to find time to wander around Bangkok, my "current" city.</p>
	<p>
		The plan was to spend the evenings after work near the hotel and use the weekend to venture out
		further through Bangkok.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04096.jpg"
	width="4000"
	height="2667"
	alt="Benchakitti Forest Park"
/>

<TextContent>
	<h2>Benchakitti Forest Park</h2>
	<p>
		On the first evening, I explored Benchakitti Forest Park, a large park recently upgraded with
		illuminated walkways, which look really great in the dark.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04099.jpg"
		width="4000"
		height="2667"
		alt="Benchakitti Forest Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04102.jpg"
		width="4000"
		height="2667"
		alt="Benchakitti Forest Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04104.jpg"
	width="4000"
	height="2667"
	alt="Benchakitti Forest Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04107.jpg"
		width="2667"
		height="4000"
		alt="Benchakitti Forest Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04110.jpg"
		width="2667"
		height="4000"
		alt="Benchakitti Forest Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04111.jpg"
	width="4000"
	height="2667"
	alt="Benchakitti Forest Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04121.jpg"
		width="4000"
		height="2496"
		alt="Bangkok bus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04123.jpg"
		width="4000"
		height="3639"
		alt="Bangkok BTS"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04127.jpg"
	width="4000"
	height="2798"
	alt="Bangkok BTS"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04124.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04128.jpg"
		width="4000"
		height="2667"
		alt="Bangkok BTS"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04130.jpg"
	width="4000"
	height="2836"
	alt="Bangkok street"
/>

<TextContent>
	<h2>Saturday Shopping in Siam</h2>
	<p>
		Running dangerously low on fresh shorts (I only brought one and bought one in Singapore), it was
		time to hit the mall for new clothes.
	</p>
	<p>
		There are a number of huge shopping malls in Bangkok, and in the past, I didn't get the purpose
		of these vast buildings. As a European, I take a cozy shopping street in the city center over a
		shopping mall anytime, but in this 30+ degree weather with the sun blasting all day, I've come
		around to them.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04131.jpg"
	width="4000"
	height="3114"
	alt="Coffee"
/>

<TextContent>
	<p>I didn't stick around too long and explored the area around the malls instead.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04132.jpg"
	width="3075"
	height="3043"
	alt="Person asking for spare change"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04134.jpg"
		width="2667"
		height="4000"
		alt="People praying in Siam, Bangkok"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04135.jpg"
		width="4000"
		height="2667"
		alt="Top view of kitchen"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04137.jpg"
		width="4000"
		height="2667"
		alt="Bangkok streets"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04139.jpg"
		width="4000"
		height="2676"
		alt="Bangkok streets"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04140.jpg"
		width="4000"
		height="2667"
		alt="Bangkok streets"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04142.jpg"
		width="4000"
		height="2667"
		alt="Bangkok streets"
	/>
</Panels>

<TextContent>
	<p>
		Several canals are crossing Bangkok, and they are used for public transport by running boats
		through them at decently high speeds. The attendants don't always speak English, and I resorted
		to giving what I thought would be roughly the correct amount, and I got change back, so it
		worked out.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220514-04145.jpg"
	width="4000"
	height="2364"
	alt="Bangkok boat public transport"
/>

<TextContent>
	<h2>Sunday chilling in Lumphini Park</h2>
	<p>
		I planned to go to a nearby island called Ko Kret, which has a nice weekend market and is quite
		rural. You can only get around by walking or bike, and you can see local villages.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04153.jpg"
	width="4000"
	height="2667"
	alt="Lumphini Park"
/>

<TextContent>
	<p>
		However, my recurring foot injury came back yesterday, and it made walking very difficult; time
		to give it some rest instead.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04147.jpg"
		width="2667"
		height="4000"
		alt="Lumphini Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04149.jpg"
		width="4000"
		height="2667"
		alt="Lumphini Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04151.jpg"
		width="2667"
		height="4000"
		alt="Lumphini Park"
	/>
</Panels>

<TextContent>
	<p>
		I bought a book at the mall yesterday, and Lumphini Park seemed like a nice place to read it.
		After getting lunch at a local 7-Eleven, I plopped down on a nice bench in the shade and read
		till dinner time.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04154.jpg"
	width="4000"
	height="3226"
	alt="Lumphini Park"
/>

<TextContent>
	<p>
		Where to go for dinner... Chinatown was reasonably close by, and there was supposed to be a
		night market.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04155.jpg"
		width="4000"
		height="3722"
		alt="Broken bike"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04157.jpg"
		width="4000"
		height="3151"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04163.jpg"
		width="4000"
		height="3371"
		alt=""
	/>
</Panels>

<TextContent>
	<p>On the way, I came across a temple, Wat Hua Lamphong, the first one of this trip!</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04174.jpg"
	width="4000"
	height="2667"
	alt="Wat Hua Lamphong"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04170.jpg"
		width="2667"
		height="4000"
		alt="Wat Hua Lamphong"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04177.jpg"
		width="2667"
		height="4000"
		alt="Wat Hua Lamphong"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04164.jpg"
	width="4000"
	height="2667"
	alt="Wat Hua Lamphong"
/>

<TextContent>
	<p>
		Keeping in mind the foot situation, I kept it short and took the metro for the rest of the trip
		to Chinatown.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04184.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04192.jpg"
		width="2493"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04193.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>
<TextContent>
	<h2>Chinatown</h2>
	<p>
		Hot, crowded, and with delicious smells everywhere, the Chinatown night market certainly is a
		thing to experience.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04195.jpg"
	width="4000"
	height="2828"
	alt="Chinatown gate"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04201.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04204.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04210.jpg"
	width="4000"
	height="3054"
	alt="Chinatown"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04212.jpg"
		width="2552"
		height="4000"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04220.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
</Panels>

<TextContent>
	<p>The food is amazing and it's all freshly cooked for you on the spot.</p>
	<PhonePic subtitle="Part of the night market haul">
		<Panels>
			<ResponsiveImage
				src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/PXL_20220515_123548915.jpg"
				width="3024"
				height="4032"
				alt=""
			/>
			<ResponsiveImage
				src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/PXL_20220515_125530815.jpg"
				width="3024"
				height="4032"
				alt=""
			/>
		</Panels>
	</PhonePic>
	<p>
		The stands I picked seemed to have just enough provisions to last about half an hour and the
		rest is brought out as needed from storage units with coolers nearby.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04216.jpg"
	width="4000"
	height="2667"
	alt="Chinatown"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04217.jpg"
		width="2358"
		height="4000"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04260.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
</Panels>

<TextContent>
	<p>
		Wander away only a couple of meters from the main night market street, and you're completely
		alone in eery back alleys.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04230.jpg"
	width="4000"
	height="2796"
	alt="Chinatown"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04225.jpg"
		width="2667"
		height="4000"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04235.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04228.jpg"
	width="4000"
	height="2667"
	alt="Chinatown"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04236.jpg"
		width="2640"
		height="4000"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04240.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04239.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04245.jpg"
		width="2667"
		height="4000"
		alt="Chinatown"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04254.jpg"
		width="3867"
		height="3071"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04253.jpg"
		width="2667"
		height="4000"
		alt="Chinatown"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04262.jpg"
		width="2465"
		height="4000"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04263.jpg"
		width="4000"
		height="2830"
		alt="Chinatown"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04267.jpg"
		width="4000"
		height="2918"
		alt="Chinatown"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04266.jpg"
		width="4000"
		height="2667"
		alt="Chinatown"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220515-04270.jpg"
	width="3003"
	height="4000"
	alt="Chinatown"
/>
