

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';

	export let data = {};
	const { tripData, postData } = data;
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<TextContent>
	<p>
		It's time to visit the yearly Ruby converence called <a href="https://railsconf.com/"
			>Railsconf 2013</a
		> again, just like we did the past few years. This time we decided to go big and use the conference
		as an excuse to explore both coasts of the USA.
	</p>
</TextContent>

<Location
	name="USA 2013 Trip"
	height={340}
	zoom={500}
	focus={true}
	center={[-100.613953, 45.477791]}
	markers={[
		{ lat: 40.7128, long: -74.006, name: 'New York', textPosition: 'left' },
		{ lat: 42.3601, long: -71.0589, name: 'Boston', textPosition: 'left' },
		{ lat: 45.5051, long: -122.675, name: 'Portland' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' }
	]}
>
	<p>
		We started out in <strong>New York</strong> where we spent a couple of days. We then rented a
		car and drove to <strong>Boston</strong> for another few days.
	</p>
	<p>
		From <strong>Boston</strong> we took a flight to <strong>San Francisco</strong> where we visited
		Alcatraz and rented another car to drive up Highway One to <strong>Portland</strong>.
	</p>
	<p>
		The conference was at <strong>Portland</strong> where we spent the remainder of our days.
		Finally we took a flight back to <strong>Amsterdam</strong>.
	</p>
</Location>

<TextContent>
	<p>
		We arrived late in the evening in what has become by go-to AirBnb appartment in Hoboken, New
		Jersey. Time to explore the area and look at the progress of the new World Trade Center.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0029.jpg"
	width="3528"
	height="2069"
	alt="View from Manhattan from New Jersey"
/>

<TextContent>
	<p>
		The next day we hopped onto the PATH and crossed the river into New York. Two of the
		destinations, the "highline", a park on an abandoned eleveated railway line and the famous
		"Ghost Busters" firehouse.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130413-IMG_1832.jpg"
			width="2200"
			height="1650"
			alt="High line"
		/>
	</PhonePic>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0053.jpg"
		width="4288"
		height="2848"
		alt="View of Manhattan streetscape"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0056.jpg"
		width="2848"
		height="4288"
		alt="Ghostbusters firehouse"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0061.jpg"
		width="4288"
		height="2848"
		alt="View of Manhattan streetscape"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0051.jpg"
		width="4288"
		height="2848"
		alt="View of Manhattan Watts street with one way sign and dont block the box sign"
	/>
</Panels>

<TextContent>
	<p>From there we took the Subway into Brooklyn.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0193.jpg"
	width="4288"
	height="2848"
	alt="Subway entrance"
/>

<TextContent>
	<p>
		Where we visted the Transit museum, an abandoned Subway station where they showcase old subway
		cars.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130414-IMG_1856.jpg"
			width="2200"
			height="1650"
			alt="Track diagram in NYC Transit Museum"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/IMG_1886.jpg"
	width="3264"
	height="2448"
	alt="Old subway car with SKYWATCH ad"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/IMG_1875.jpg"
		width="3264"
		height="2448"
		alt="View of old subway car"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/IMG_1878.jpg"
		width="3264"
		height="2448"
		alt="View of old subway car"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/IMG_1881.jpg"
		width="3264"
		height="2448"
		alt="View of old subway car"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/IMG_1882.jpg"
		width="3264"
		height="2448"
		alt="View of old subway car"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/IMG_1899.jpg"
	width="3264"
	height="2448"
	alt="View of old subway car Main st. Flushing Times square Local"
/>

<TextContent>
	<p>From the transit museum we walked to the riverfront.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0066-Edit.jpg"
	width="6356"
	height="2176"
	alt="Brooklyn river front showing manhattan"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0092.jpg"
		width="4288"
		height="2848"
		alt="Brooklyn bridge"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0097.jpg"
		width="2848"
		height="4288"
		alt="On the brooklyn bridge"
	/>
</Panels>
<TextContent>
	<p>And over the bridge back to Manhattan.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130414-IMG_1939.jpg"
			width="1650"
			height="2200"
			alt="Freedom Tower"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0116.jpg"
	width="4072"
	height="2705"
	alt="Brooklin bridge tower view"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0125.jpg"
		width="2848"
		height="4288"
		alt="New York taxi from above"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0132.jpg"
		width="4095"
		height="2720"
		alt="New York taxi from above"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0159.jpg"
	width="4288"
	height="2848"
	alt="Subway entrance"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0171.jpg"
		width="2848"
		height="4288"
		alt="Manhattan street with steam pipe"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0180.jpg"
		width="4288"
		height="2848"
		alt="Manhattan building"
	/>
</Panels>

<TextContent>
	<h2>Boston</h2>
	<p>
		After getting a rental car, we drove up to Boston to visit <a href="https://thoughtbot.com/"
			>thoughtbot</a
		>. What was supposed to be a fun visit, quickly deteriorated was we were in Boston right at the
		time when the manhut for the Boston Marathon Bombers was in full force. We heard sirens
		everywhere and were told to stay in the hotel.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/IMG_1964.jpg"
	width="3264"
	height="2448"
	alt="Hummvee"
/>
<TextContent>
	<p>The next day things had calmed down and we could explore the city center.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0199.jpg"
	width="3495"
	height="2679"
	alt="Church in downtown Boston"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0210.jpg"
		width="4074"
		height="2706"
		alt="Boston street"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0250.jpg"
		width="4198"
		height="2788"
		alt="Boston alley"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0260.jpg"
	width="4288"
	height="2848"
	alt="Highrise in Boston"
/>

<TextContent>
	<p>
		The next day we headed to the airport to fly to San Fransisco (I wasn't using the camera as much
		as I do now back then :))
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0264.jpg"
	width="4288"
	height="2848"
	alt="View from inside a Boston taxi"
/>

<TextContent>
	<h2>San Francisco</h2>
	<p>Gotta see the "Full house" houses.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/IMG_1979.jpg"
	width="3264"
	height="2448"
	alt="Full house houses"
/>
<TextContent>
	<p>
		Colleagues wanted to visit Alcatraz, so we booked tickes and hopped on the boat to the famous
		island.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/IMG_1992.jpg"
	width="3264"
	height="2448"
	alt="SFO pier"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0392.jpg"
	width="4288"
	height="2848"
	alt="Alcatraz"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0362.jpg"
	width="4288"
	height="2848"
	alt="Alcatraz water tower"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0272.jpg"
	width="4083"
	height="2712"
	alt="Alcatraz"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0268.jpg"
		width="4288"
		height="2848"
		alt="Alcatraz"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0277.jpg"
		width="2581"
		height="3886"
		alt="Alcatraz cells"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0271.jpg"
		width="4288"
		height="2848"
		alt="Alcatraz cells"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0279.jpg"
	width="4288"
	height="2848"
	alt="Hole in Alcatraz ceiling"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0280.jpg"
		width="4288"
		height="2848"
		alt="Inside of Alcatraz jail"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0282.jpg"
		width="4288"
		height="2848"
		alt="Control panel in Alcatraz"
	/>
</Panels>

<TextContent>
	<p>The island offers amazing views of the city and the Golden Gate Bridge.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0297-Edit.jpg"
	width="5741"
	height="3435"
	alt="SFO view from Alcatraz"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0338.jpg"
	width="4288"
	height="2848"
	alt="View of Golden Gate Bridge from Alcatraz"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0284.jpg"
	width="4288"
	height="2848"
	alt="Plants growing everywhere in Alcatraz"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0350.jpg"
		width="4288"
		height="2848"
		alt="Escape from Alcatraz"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0351.jpg"
		width="4288"
		height="2848"
		alt="Alcatraz kitchen"
	/>
</Panels>

<TextContent>
	<p>And of course you can't visit Alcatraz without trying to find every scene from The Rock.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0374.jpg"
	width="4288"
	height="2848"
	alt="Building on Alcatraz island"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0356.jpg"
		width="3616"
		height="2250"
		alt="Jail in Alcatraz"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0358.jpg"
		width="4288"
		height="2848"
		alt="Jail in Alcatraz"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0365.jpg"
	width="4288"
	height="2848"
	alt="Ducklings on Alcatraz"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0380.jpg"
	width="4288"
	height="2848"
	alt="Building door on Alcatraz"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0387.jpg"
		width="4288"
		height="2848"
		alt="Scene on Alcatraz"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0388.jpg"
		width="4288"
		height="2848"
		alt="Scene on Alcatraz"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0383.jpg"
	width="4288"
	height="2848"
	alt="Cannon on Alcatraz"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/sfo3.jpg"
	width="10699"
	height="3343"
	alt="SFO Skyline from Alcatraz"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0415.jpg"
	width="4288"
	height="2848"
	alt="SFO Skyline from Alcatraz"
/>

<TextContent>
	<h2>HWY 1</h2>
	<p>
		One of the most famous highways in the US is Highway One, which traverses the west coast. We
		traveled along the road from San Fransisco to Portland.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130426-IMG_2020.jpg"
			width="2200"
			height="1650"
			alt="HWY1"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/hwy1.jpg"
	width="8666"
	height="4043"
	alt="Scene on HWY 1"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0467-Edit.jpg"
		width="4288"
		height="2848"
		alt="Beach view off of Highway One"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/hwy1-2.jpg"
		width="7287"
		height="4156"
		alt="Beach view off of Highway One"
	/>
</Panels>

<TextContent>
	<h2>Portland</h2>
	<p>
		The final stop of the trip and place of the conference we were heading to. We quickly noticed
		the various food truck places scattered around downtown Portland, very cool!
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130427-IMG_2026.jpg"
			width="2200"
			height="1650"
			alt="Phat Cart - Portland Foodtruck"
		/>
	</PhonePic>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130427-IMG_2027.jpg"
			width="2200"
			height="1650"
			alt="Rice Noodle - Portland Foodtruck"
		/>
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/20130429-IMG_2038-PANO.jpg"
	width="2200"
	height="671"
	alt="Portland Pano"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2054-PANO.jpg"
	width="2200"
	height="532"
	alt="Portland pano"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2069.jpg"
		width="2200"
		height="1650"
		alt="Portland bridge"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2056.jpg"
		width="2200"
		height="1650"
		alt="Portland bridge"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2054-Pano-2.jpg"
	width="2200"
	height="1122"
	alt="Portland bridge"
/>

<TextContent>
	<p>We also visited the <strong>OMSI</strong>(Oregon Museum of Science and Industry).</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2063.jpg"
			width="2200"
			height="1650"
			alt="Portland Museum"
		/>
	</PhonePic>
	<p>The experiments were quite fun to try, it's a nice museum for young and old.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2013/20130501-IMG_2064.jpg"
			width="2200"
			height="1650"
			alt="Portland Museum"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<p>
		We spent most days at the conference, but we also found some time to explore a few Chinese/Japanese
		Gardens. It might have been the thing that sparked my interest in Asia over the next few years
		;)
	</p>
	<PhonePic>
		<ResponsiveImage src="https://cdn.matsimitsu.com/usa-2013/20130502-IMG_2080.jpg" width="2200" height="1650" alt="Chinese garden Portland" />
	</PhonePic>
	<p>A nice relaxing morning with delicious tea.</p>
	<PhonePic>
		<ResponsiveImage src="https://cdn.matsimitsu.com/usa-2013/20130502-IMG_2085.jpg" width="2200" height="1650" alt="Chinese garden Portland" />
	</PhonePic>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0507.jpg"
	width="4288"
	height="2848"
	alt="View of mt. Hood from the Japanese Gardens in Portland"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0528.jpg"
	width="4288"
	height="2848"
	alt="Japanese garden sand lines"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0551.jpg"
		width="4220"
		height="2803"
		alt="Stairs in Japanese Garden in Portland"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2013/_DSC0585.jpg"
		width="4288"
		height="2848"
		alt="Birds in Japanese Garden in Portland"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0585.jpg"
	width="4288"
	height="2848"
	alt="Birds in anese Garden in Portland"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2013/_DSC0606.jpg"
	width="4288"
	height="2848"
	alt="Waterfall in Japanese Garden in Portland"
/>
