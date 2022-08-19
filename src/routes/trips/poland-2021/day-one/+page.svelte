

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Video from '$lib/Video.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

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
