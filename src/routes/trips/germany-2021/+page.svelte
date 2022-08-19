

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';

	export let data = {};
	const { tripData, postData } = data;
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Location
	name="Themepark Trip"
	height={420}
	zoom={1500}
	focus={true}
	center={[8, 48]}
	markers={postData.locations}
>
	<p>
		We started in a Dutch themepark, <strong>Toverland</strong> which just opened a new coaster.
	</p>
	<p>
		We then proceeded to <strong>Holiday Park</strong>, a smaller family park and then continued to
		the biggest park on the trip, <strong>Europapark</strong>. This was also the most southern point
		of the trip.
	</p>
	<p>On our way backup up we came across <strong>Tripsdrill</strong>, a former vineyard.</p>
	<p>
		Getting closer to The Netherlands, we visited <strong>Phantasialand</strong> probably the best
		themed park of the ones we visited. And finally <strong>Moviepark</strong>, before returning
		home.
	</p>
</Location>

<TextContent>
	<h2>Toverland, Netherlands</h2>
	<p>
		<em>Disclaimer, this entire trip was shot with a relative crappy phonecam.</em>
		First up was Toverland, a relatively small Dutch themepark that recently expanded with a new entrance
		area and a pretty awesome coaster.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_105211.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		Toverland started as a childrens playground and slowly expanded to the park it is today. With 3
		coasters, and the standard logflume/rapid river you can certainly spend at least half a day in
		the park if it isn&#39;t too busy.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_112747.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_124944.jpg"
		width="4000"
		height="3000"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_130047.jpg"
	width="4000"
	height="3000"
/>
<TextContent
	><p>The food was pretty good as well, with a nice pulled pork sandwich.</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_122120.jpg"
		width="4000"
		height="3000"
	/>
	<p>Their latest addition is a wing coaster that opened in 2018, which has an amazing ride!</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_113025.jpg"
	width="4000"
	height="3000"
	hero
/>

<TextContent>
	<h2>Mannheim, Germany</h2>
	<p>
		After Toverland we took a day to drive to Holiday Park in Germany, which is located near
		Mannheim, where we spend the rest of the Saturday afternoon exploring the city center and <strong
			>Luisenpark</strong
		>, a very nice park to drink a beer or two.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200919-IMG_20200919_144752.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		Luckily for me, I was still able to fill the &quot;Temple quota&quot; of at least one this trip.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200919-IMG_20200919_153809.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200919-IMG_20200919_165526.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200919-IMG_20200919_170540.jpg"
		width="3000"
		height="4000"
	/>
</Panels>

<TextContent>
	<p>After dinner we explored the town some more and went to bed, ready for the next day.</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200919-IMG_20200919_175324.jpg"
		width="4000"
		height="3000"
	/>
</TextContent>

<TextContent>
	<h2>Holiday Park, Germany</h2>
	<p>
		The first coaster of the day was <strong>Expedition GeForce</strong>, an Intamin steal coaster
		that reaches speeds of upto 120 kilometres per hour. It&#39;s comparable to &quot;Goliath&quot;
		in Waliby Holland, but has much better airtime.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200920-IMG_20200920_111119.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		We took our time wandering around the park and explored the recently renovated (in Dinosaur
		theme) river rapids.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200920-IMG_20200920_110911.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200920-IMG_20200920_110934.jpg"
		width="4000"
		height="3000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200920-IMG_20200920_110934.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		The second coaster was the <strong>Sky Scream</strong>, a launched full-loop coaster that was
		suprisingly fun!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200920-IMG_20200920_130407.jpg"
	width="4000"
	height="3000"
	hero
/>
<TextContent>
	<p>After exploring the park a bit more we drove to our next destination:</p>
</TextContent>

<TextContent>
	<h2>Europapark, Germany</h2>
	<p>
		The &quot;main attraction&quot; of the trip, and ironically also the one with the least photos,
		as we were to busy making the most of our two days here.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200921-IMG_20200921_091912.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200921-IMG_20200921_101159.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200921-IMG_20200921_123327.jpg"
		width="4000"
		height="3000"
		hero
	/>
</Panels>

<TextContent>
	<p>
		When planning this trip we were slightly worried about the food in the parks, from what we could
		remember it used to consist mostly of pretty bad fries and typical German staples such as
		Schnitzel. And I must say that for almost all parks we were plesantly suprised by the quality of
		the food. This burger in Europapark was delicious.
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/germany-2020/20200922-IMG_20200922_130903.jpg"
			width="4000"
			height="3000"
		/>
	</p>
</TextContent>

<TextContent>
	<p>
		To compensate for all the park food, we opted to eat slightly &quot;healthier&quot; food outside
		of the parks during dinner.
	</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200922-IMG_20200922_193852.jpg"
		width="4000"
		height="3000"
	/>
</TextContent>

<TextContent>
	<h2>Tripsdrill, Germany</h2>
	<p>
		After Europapark it was time for the weirdest park of the trip. The theme throughout the park is
		&quot;Germany&quot; and originally it used to be a winery/restaurant. It is Germany&#39;s oldest
		amusement park and is still owned and managed by the same family.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200923-IMG_20200923_092050.jpg"
	width="4000"
	height="3000"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200923-IMG_20200923_100542.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		A lot of investments were made into the park recently and the coaster count was boosted
		significantly.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200923-IMG_20200923_101431.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200923-IMG_20200923_104141.jpg"
		width="4000"
		height="3000"
		hero
	/>
</Panels>
<TextContent>
	<p>
		The layout of the park is slightly confusing and there&#39;s a huge patch of grassland in the
		middle that doesn&#39;t seem to be used for anything. But the rides were really nice and the
		theming was quite good, compared to Holiday Park for example. I&#39;d definitely recommend going
		here if you are in the neighbourhood.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200923-IMG_20200923_104649.jpg"
	width="4000"
	height="3000"
/>

<TextContent>
	<h2>Technik Museum Sinsheim</h2>
	<p>
		On our second travel day it was supposed to rain a lot and we didn&#39;t feel like exploring a
		city in the rain (Köln), and on our way to Tripsdrill we noticed a Concorde and a Tupolev Tu-144
		perched on a rooftop. We decided to check it out.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_112246.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		<em>Technik Museum Sinsheim</em> is the largest private museum in Europe that receives over 1 million
		visitors per year. There are two main halls filled to the brim with either World War Two gear, or
		(classic) cars.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_105658.jpg"
	width="4000"
	height="3000"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_110000.jpg"
	width="4000"
	height="3000"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_114559.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_122848.jpg"
		width="4000"
		height="3000"
		hero
	/>
</Panels>
<TextContent>
	<p>
		A nice suprise when we got to the roof was that you could access both the <em>Concorde</em> and
		it&#39;s Russian counterpart the <em>Tupolev Tu-144</em>. Compared to modern aircraft both were
		very claustrofobic and I would not have enjoyed a trip in either of them.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_123535.jpg"
	width="4000"
	height="3000"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_124134.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		Food-wise we wanted to eat at a highly recommended Asian restaurant in Köln, but it was
		aparently out of business, so we went with the next best thing (and closest ;)) instead,
		Burrito&#39;s.
	</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200924-IMG_20200924_175338.jpg"
		width="4000"
		height="3000"
	/>
</TextContent>

<TextContent>
	<h2>Phantasialand, Germany</h2>
	<p>
		We couldn&#39;t believe our luck, just 2 days before we were at the park, Phantasialand
		soft-opened their newest coaster for the public: <strong>F.L.Y</strong>. The first launched
		flying coaster in the world.
	</p>
	<p>
		The area the coster was in opened at noon, and to fill the time we went around and rode all the
		other coasters (and water rides) first, starting with <strong>Taron</strong>.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_113709.jpg"
	width="4000"
	height="3000"
	hero
/>
<TextContent>
	<p>
		Around noon we entered the Queue for Rookburgh, the area that F.L.Y was located at and after
		about an hour the line started moving. The coaster is amazing and the loading system is super
		inventive.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_150432.jpg"
		width="4000"
		height="3000"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_172613.jpg"
		width="3000"
		height="4000"
	/>
</Panels>
<TextContent>
	<p>
		After two rides we decided to go for lunch and had one of the best burgers I&#39;ve ever had. If
		you are in Phantasialand, definitely try the burger at the Restaurant in Rookburgh.
	</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_134009.jpg"
		width="4000"
		height="3000"
	/>
	<p>
		Since you have to queue again to get back into the area when you exit, we did a couple more
		re-rides and then spend the rest of the day exploring the rest of the park.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_140221.jpg"
	width="4000"
	height="3000"
	hero
/>
<TextContent
	><p>Dinner was a nice rice bowl at a local restaurant in Köln.</p>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_191237.jpg"
		width="4000"
		height="3000"
	/>
</TextContent>

<TextContent>
	<h2>Moviepark, Germany</h2>
	<p>
		On our final day we visited Moviepark Germany, dueue to Covid, there weren&#39;t a lot of people
		in the park, and we were able to do everthing before 14:00 in the afternoon. Moviepark had
		it&#39;s best days in the past and it shows, there are a lot of places that could use a lick of
		paint or general fix-ups. The restaurant staff was supposed to open one of the few places you
		could eat at noon, but they did&#39;t arrive till half an hour later, the resulting burger
		wasn&#39;t that good either.
	</p>
	<p>
		After all the amazing parks we visited in the past week it was a bit of a let-down. Word is
		there are new investments coming to the park, so lets hope they can give it some new life in the
		coming years.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200926-IMG_20200926_140808.jpg"
	width="4000"
	height="3000"
/>
<TextContent>
	<p>
		If you want to see better photos and more detailed stories, go visit the <a
			href="https://travel.onnogroen.com/travels/theme-park-trip-2020">Travel blog of Onno Groen</a
		>, who accompanied me once again on this trip.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/germany-2020/20200925-IMG_20200925_150546.jpg"
	width="4000"
	height="3000"
/>
