<script context="module">
	export const postData = {
		title: 'Poland 2021',
		subtitle: 'Visiting Energylandia in Poland',
		trip: 'poland-2021',
		startDate: new Date('2021-08-23'),
		endDate: new Date('2021-08-28'),
		image: {
			src: 'https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg',
			width: 2200,
			height: 1650,
			alt: 'Zadra'
		},
		locations: [
			{ name: 'Energylandia', long: 19.4084671, lat: 49.9974214 },
			{ name: 'Auschwitz-Birkenau', long: 19.1997942, lat: 50.027414, textPosition: 'left' },
			{ name: 'Legendia', long: 18.9739533, lat: 50.2718201, textPosition: 'left' },
			{ name: 'Katowice', long: 18.9739533, lat: 50.2718201 }
		]
	};
	export const tripData = {
		title: 'Poland 2021',
		subtitle: 'Visiting Energylandia in Poland',
		trip: 'poland-2021',
		startDate: new Date('2021-08-23'),
		endDate: new Date('2021-08-28'),
		image: {
			src: 'https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg',
			width: 2200,
			height: 1650,
			alt: 'Zadra'
		},
		countries: ['Poland']
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Video from '$lib/Video.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="Trip to Poland"
	height={480}
	zoom={3500}
	focus={true}
	center={[19, 52]}
	markers={postData.locations}
>
	<p>
		We arrived at Krakow Airport (KRK) in the evening and made our way to the arrivals hall where we
		ordered an Uber to our hotel in Zator.
	</p>
	<p>
		Zator is a small town near <strong>Energylandia</strong>, a relatively new (six years old)
		themepark built in the south of Poland with as of writing no less than <strong>17!</strong> rollercoasters
		and over a hundred attractions in total (not including food, as that would bring it to 200).
	</p>
	<p>The park is subsidised by the European union as are other projects in the south of Poland.</p>
	<p>
		In the past few years they've been migrating from a generic themepark to more themed areas like
		in Disneyland or Universal Studios and the results are amazing.
	</p>
</Location>

<TextContent>
	<h2>Day one, Schiphol, Netherlands</h2>
	<p>
		Flying with our favorite airline, Lufthansa, we were stuffed into a tiny CRJ-900 for our flight
		to Munich, where we would transfer into a bigger A320 to Krakow.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210823-113618173.jpg"
	width="2200"
	height="1650"
	alt="lufthansa"
/>

<Video
	src="https://cdn.matsimitsu.com/poland-2021/PXL_20210823_124159455"
	title="take-off from Schiphol"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210823-125226251.jpg"
		width="2200"
		height="1650"
		alt="Amsterdam from above"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210823-144143046.jpg"
		width="2200"
		height="1650"
		alt="A320"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210823-160546734.jpg"
		width="2200"
		height="1650"
		alt="Onboard"
	/>
</Panels>
<TextContent>
	<p>
		Thanks to the magic of the Internet we got an Uber to our hotel, which took a nice relaxing
		ferry along the way. (This did not amuse our driver).
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210823-175019294.jpg"
	width="2200"
	height="1650"
	alt="Waiting for the ferry"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210823-182513543.jpg"
		width="2200"
		height="1650"
		alt="Beer"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210823-183410447.jpg"
		width="2200"
		height="1650"
		alt="dumplings"
	/>
</Panels>

<TextContent>
	<p>
		We ended our first night with Beer, Dumplings an pizza and a scary 3Km walk down a creepy road
		to the hotel in the middle-of-nowhere.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210823-194947722.jpg"
	width="2200"
	height="1650"
	alt="creepy road"
/>

<TextContent>
	<h2>Day two: Energylandia, Poland</h2>
	<p>
		We were in doubt wether to go to the park today or go to another destination first, because of
		the predicted rain. It was predicted to rain so bad that we each got a text alert on our phone
		from the government about the rainfall that would fall this day.
	</p>
	<p>
		We decided to go anyway, since we knew for sure that tomorrow would be sunny so we could catch
		up on any rides we missed today.
	</p>
	<p>
		The first coaster of the day was an Intamin Hypercoaster called Hyperion, which takes you to a
		height of 77 meters and drops you to the ground at 142 kilometer an hour which exposes you to
		forces of up to 4.8G.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-084337796.jpg"
	width="2200"
	height="1650"
	alt="Hyperion coaster at Energylandia"
/>
<TextContent>
	<p>
		After this excellent wake-up ride we headed to the "wooden" coaster, built by Rocky Mountain
		Construction (RMC), who are famous for converting old wooden coasters to amazing new rides.
	</p>
	<p>This one was built from scratch and is one of the best coasters there is.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg"
		width="2200"
		height="1650"
		alt="Zadra"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-085944791.jpg"
		width="1650"
		height="2200"
		alt="Zadra"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-085729455.jpg"
		width="2200"
		height="1650"
		alt="not harry potter"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-085803420.jpg"
		width="2200"
		height="1650"
		alt="Not Harry Potter"
	/>
</Panels>

<PhonePic>
	<Video src="https://cdn.matsimitsu.com/poland-2021/zadra-trimmed" title="Zadra RMC coaster" />
</PhonePic>

<TextContent>
	<p>
		The latest themed area, completed just a couple of weeks ago is <strong>Aqualantis</strong>,
		where the <strong>Abyssus</strong> double-launched coaster lives.
	</p>
	<p>
		This one is built by <strong>Vekoma</strong> a Dutch company known for their not-so-great coasters
		in the past, but they've improved a ton in the past few years.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-101628936.jpg"
	width="2200"
	height="1650"
	alt="Abyssus"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-101733543.jpg"
	width="2200"
	height="1650"
	alt="Abyssus"
/>

<TextContent>
	<p>
		The Aqualantis area is home to a few other rides and restaurants. Among these is a Vekoma
		Boomerang coaster that, (we think) they got for free with Abyssus..
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-105444423.jpg"
	width="2200"
	height="1650"
	alt="boooomerang"
/>

<TextContent>
	<p>
		Interestingly another Vekoma coaster in this park is called Formula 1 and is a prototype for the
		Abyssus coaster.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-113428703.jpg"
		width="2200"
		height="1650"
		alt="Formula 1"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-113349698.jpg"
		width="1650"
		height="2200"
		alt="Formula 1"
	/>
</Panels>

<TextContent>
	<p>
		With the famous 4 out of the way we got to explore the rest of the park, including many other
		coasters, rides and a stunt-show
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-122624958.jpg"
	width="2200"
	height="1650"
	alt="Suspended family coaster"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-123541453.jpg"
	width="2200"
	height="1650"
	alt="Stunt show"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-131937814.jpg"
	width="2200"
	height="1650"
	alt="SLC"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-150032548.jpg"
		width="2200"
		height="1650"
		alt="Energy coaster"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210824-132150705.jpg"
		width="2200"
		height="1650"
		alt="Boomerang"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210824-135255388.jpg"
	width="2200"
	height="1650"
	alt="Suspended family coaster Energylandia"
/>

<TextContent>
	<p>
		In-all the first day was a great success, the queue times for pretty much every ride was 0
		minutes. I think the longest we waited was 10 minutes for the Formula 1 coasters. The rides such
		as Hyperion and Zadra, we got ot re-ride instantly a couple of times, thanks to short-cuts in
		the queue.
	</p>
</TextContent>

<TextContent>
	<h2>Day three: Energylandia, Poland</h2>
	<p>Our second day in Energylandia, this time with beautiful 20 degrees weather and sunshine.</p>
	<p>
		Aparently the rest of Poland also got this message and the 0-minute queue times from yesterday
		were no more. The shortest we waited today was 30 minutes and the longest 80 minutes....
	</p>
	<p>
		We were so glad we were in this park Yesterday to do most of the rides, as with the amount of
		people in the park today, we just managed to do 6 rides.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210825-082639231.jpg"
	width="2200"
	height="1650"
	alt="Hyperion"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210825-133533459.jpg"
	width="2200"
	height="1650"
	alt="Speed"
/>

<Video src="https://cdn.matsimitsu.com/poland-2021/splash-trimmed" title="Speed water coaster" />

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210825-154241959.jpg"
	width="2200"
	height="1650"
	alt="Busy"
/>

<TextContent>
	<p>The day ended with delicious Italian food and cheesecake.</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210825-170905328.jpg"
		width="2200"
		height="1650"
		alt="Revel"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210825-174918232.jpg"
		width="2200"
		height="1650"
		alt="Cheesecake"
	/>
</Panels>

<TextContent>
	<h2>Day four: Auschwitz, Poland</h2>
	<p>
		Between Zator (where Energylandia is) and Katowice, where our flight leaves, lies another
		well-known town called Oświęcim.
	</p>
	<p>
		This town is better known for it's German name: Auschwitz-Birkenau. The place where 1.3 million
		people lost their lives.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01393.jpg"
	width="2200"
	height="1467"
	alt="Arbeit macht frei"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01404.jpg"
		width="1467"
		height="2200"
		alt="Watch tower"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01394.jpg"
		width="1467"
		height="2200"
		alt="barbed wire"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01398.jpg"
	width="2200"
	height="1467"
	alt="Between the barracks"
/>

<TextContent>
	<p>
		Because of Corona you can't wander around yourself and you have to take a tour that lasts for
		3.5 hours. Something we didn't really look forward too (we're more the wandering around types),
		but in hindsight it was a good choice as the tour guide explaned a lot more than was written on
		the signs throughout the area.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01401.jpg"
		width="1467"
		height="2200"
		alt="Watch tower"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01395.jpg"
		width="1467"
		height="2200"
		alt="Stairs"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01404.jpg"
		width="1467"
		height="2200"
		alt="Watch tower"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01407.jpg"
	width="2200"
	height="1467"
	alt="Watch tower"
/>

<TextContent>
	<p>
		In all it was quite depressing to hear all the misery placed upon the inhabitants of Auschwitz.
		The cloudy weather and rain added to the atmosphere.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01403.jpg"
		width="2200"
		height="1467"
		alt="Shoes"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01406.jpg"
		width="2200"
		height="1515"
		alt="Pictures"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01411.jpg"
	width="2200"
	height="1467"
	alt="Wall"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01408.jpg"
		width="1467"
		height="2200"
		alt="bathroom"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01410.jpg"
		width="1467"
		height="2200"
		alt="Gallow"
	/>
</Panels>

<TextContent>
	<p>Yes, that is a portable gallow in the second picture above, at the end of the hallway.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01415.jpg"
	width="2200"
	height="1467"
	alt="Greenery"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01412.jpg"
		width="1467"
		height="2200"
		alt="Schonungsblock"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01413.jpg"
		width="2200"
		height="1467"
		alt="Between the barracks"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01424.jpg"
	width="2200"
	height="1467"
	alt="Watch tower"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01416.jpg"
		width="1467"
		height="2200"
		alt="Watch commanders room"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01417.jpg"
		width="1467"
		height="2200"
		alt="Barbed wire"
	/>
</Panels>

<TextContent>
	<p>
		During the tour you'll get to hear the difference between the Auschwitz camps, how it came to be
		and how they operated (work camp vs death camp).
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01420.jpg"
		width="1467"
		height="2200"
		alt="Halt"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01422.jpg"
		width="1467"
		height="2200"
		alt="More barbed wire"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01423.jpg"
	width="2200"
	height="1467"
	alt="Barbed wire"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01427.jpg"
	width="2200"
	height="1467"
	alt="More barbed wire"
/>

<TextContent>
	<p>
		Where camp one was mainly for prisoners to be put to work, the second camp was for systematic
		extermination and the conditions there were even worse.
	</p>
	<p>
		The main part consisted of poorly made wooden barracks that offered little protection agains the
		elements. And you were lucky if you get to live in those, because that means you made it through
		the first selection that happened at this platform in the photo below.
	</p>
	<p>Anyone not considered fit to work by a doctor would be directed to the gas chambers.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01431.jpg"
	width="2200"
	height="1467"
	alt="Auschwitz 2"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01432.jpg"
		width="2200"
		height="1467"
		alt="Auschwitz 2"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01433.jpg"
		width="2200"
		height="1467"
		alt="Auschwitz 2"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01434.jpg"
	width="2200"
	height="1467"
	alt="The gate"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01435.jpg"
		width="2200"
		height="1467"
		alt="Watch tower"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01439.jpg"
		width="1467"
		height="2200"
		alt="Even more barbed wire"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-DSC01440.jpg"
		width="2200"
		height="1467"
		alt="Sinks"
	/>
</Panels>

<TextContent>
	<h2>Katowice</h2>
	<p>
		After this quite depressing morning we headed to the train station to get a train to Katowice,
		which took a good hour.
	</p>
	<p>After quick freshen-up in the hotel we headed out for dinner and then to bed.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210826-121545037.jpg"
	width="2200"
	height="1650"
	alt="Chillin"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-164749362.jpg"
		width="2200"
		height="1650"
		alt="Miso Soup"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-164916193.jpg"
		width="2200"
		height="1650"
		alt="WW2 memorial"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-171302618.jpg"
		width="2200"
		height="1650"
		alt="Miso soup"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-172929063.jpg"
		width="2200"
		height="1628"
		alt="Okonomiyaki"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210826-175150362.jpg"
		width="2200"
		height="1650"
		alt="Sesame Ice Cream"
	/>
</Panels>

<TextContent>
	<h2>Day four: Legendia, Poland</h2>
	<p>
		Legendia is a small-ish themepark in/near Katowice and in recent years there have been
		investments in the park, resulting in a few new rides.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-081839986.jpg"
	width="2200"
	height="1650"
	alt="Legendia"
/>

<TextContent>
	<p>Arriving at 10:10, we were pretty much the only people in the entire park.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-082002480.jpg"
		width="2200"
		height="1650"
		alt="empty"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-082244078.jpg"
		width="2200"
		height="1650"
		alt="park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-082407512.jpg"
	width="2200"
	height="1650"
	alt="Ferris wheel Legendia"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-085310561.jpg"
		width="2200"
		height="1650"
		alt="Roller coaster"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-092914704.jpg"
		width="1650"
		height="2200"
		alt="Ferris wheel"
	/>
</Panels>
<TextContent>
	<p>
		After a lap through the park we rode the main attraction, <strong>Lech Coaster</strong>, a new
		Vekoma model.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-100630252.jpg"
	width="2200"
	height="1650"
	alt="Lech coaster"
/>

<TextContent>
	<p>
		The queue time everywhere was 0 minutes and we could even swap between the back seats and front
		seats without having to go through the queue again, pretty neat!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-104744849.jpg"
	width="2200"
	height="1650"
	alt="Lech coaster"
/>

<TextContent>
	<p>
		There was also this russian-made coaster that required at least 3 people per car, otherwise it
		wouldn't make it to the lift-hill. Luckily for us one of the operators was so kind to accompany
		us, so we could ride the coaster.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-095537605.jpg"
	width="2200"
	height="1650"
	alt="Coaster"
/>

<TextContent>
	<p>
		Most of the other atractions were a mix of super-old rides such as this one, from the 1950's and
		newer, well-themed rides.
	</p>
</TextContent>

<Video src="https://cdn.matsimitsu.com/poland-2021/PXL_20210827_082617184" title="Flying things" />

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-102909789.jpg"
		width="1650"
		height="2200"
		alt="hi"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-115244438.jpg"
		width="2200"
		height="1650"
		alt="There"
	/>
</Panels>

<TextContent>
	<p>
		All the rides to make it a great park are there, you have your log-flume, river rapids, a nice
		coaster and lots of smaller rides for kids. I'm curious to see how this park will develop over
		the years.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-105003695.jpg"
	width="2200"
	height="1650"
	alt="Log flume"
/>

<TextContent>
	<h2>Katowice</h2>
	<p>
		After spending a couple of hours (and many rides on Lech coaster) in the park, we headed for the
		exit.
	</p>
	<p>
		There was a cable-car running through the park, but it actually starts outside and goes along
		the huge park surrounding Legendia.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-123105010.jpg"
	width="2200"
	height="1650"
	alt="Cable car"
/>

<TextContent>
	<p>It's weird having this brand-new cable car going through a park that has seen better days.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-123430694.jpg"
		width="2200"
		height="1650"
		alt="better days"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-123700573.jpg"
		width="2200"
		height="1650"
		alt="better days"
	/>
</Panels>

<TextContent>
	<p>Though, other parts have been renovated and are quite nice.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-125412452.jpg"
	width="2200"
	height="1650"
	alt="park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-130719698.jpg"
		width="1650"
		height="2200"
		alt="Japanese garden"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-131804118.jpg"
		width="2200"
		height="1650"
		alt="Japanese gardens"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-132407563.jpg"
		width="2200"
		height="1650"
		alt="zoo"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-132442456.jpg"
		width="2200"
		height="1650"
		alt="zoo"
	/>
</Panels>

<TextContent>
	<p>From the park we headed back to the hotel along a... well lets say lets touristy area.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/poland-2021/20210827-133930865.jpg"
	width="2200"
	height="1650"
	alt="Back alleys"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-134335591.jpg"
		width="2200"
		height="1650"
		alt="back alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/poland-2021/20210827-135501876.jpg"
		width="1650"
		height="2200"
		alt="old streets"
	/>
</Panels>

<Panels>
	<ResponsiveImage src="https://cdn.matsimitsu.com/poland-2021/20210827-160126112.jpg" width="2200" height="969" alt="Indian food" />
	<ResponsiveImage src="https://cdn.matsimitsu.com/poland-2021/20210827-162145594.jpg" width="2200" height="770" alt="Indian food" />
</Panels>
