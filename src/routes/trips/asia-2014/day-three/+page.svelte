

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		The first stop of today is the Summer Palace. As today is a Saturday, it is a little bit busier
		the normal.
	</p>
</TextContent>
<Location
	name="Beijing"
	height={360}
	zoom={11000}
	focus={true}
	center={[116.2748645, 39.9999072]}
	markers={[
		{ lat: 39.8821844, long: 116.4044169, name: 'Temple of Heaven' },
		{ lat: 40.2803073, long: 116.0621482, name: 'Juyong Pass', textPosition: 'left' },
		{ lat: 39.9158183, long: 116.3961123, name: 'Forbidden City', textPosition: 'left' },
		{ lat: 39.9999072, long: 116.2748645, name: 'Summer Palace' },
		{ lat: 40.2551531, long: 116.2213669, name: 'Ming Dynasty Tombs' }
	]}
>
	<p>The first three days of this trip we spent in Beijing, visiting various attractions.</p>
	<p>
		The first day we visited the <strong>Temple of Heaven</strong>, just south of our hotel next to
		the
		<strong>Forbidden City</strong>.
	</p>
	<p>
		The second day were on a guided tour to the <strong>Juyong Pass</strong> to see the Great Wall
		of China. After the wall, we went to see the <strong>Ming Dynasty Tombs.</strong>
	</p>
	<p>
		Today, we're going to the "main" attractions of the city, the <strong>Summer Palace</strong>
		and the <strong>Forbidden City</strong>.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0319.jpg"
	width="2200"
	height="1461"
	alt="Canals at the Summer Palace in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0318.jpg"
		width="2200"
		height="1461"
		alt="Canals at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0324.jpg"
		width="2200"
		height="1461"
		alt="Canals at the Summer Palace in Beijing"
	/>
</Panels>
<TextContent>
	<p>
		As with every monument you can buy an pass to enter the park, but that doesn't mean you can
		enter everything in the park. To do that you need to buy an all-access pass. With this we were
		able to walk down here by the water, yay!
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0332.jpg"
	width="2200"
	height="1461"
	alt="Canals at the Summer Palace in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0320.jpg"
		width="2200"
		height="1461"
		alt="Canals at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0329.jpg"
		width="2200"
		height="1461"
		alt="Canals at the Summer Palace in Beijing"
	/>
</Panels>

<TextContent>
	<p>Even though it was still early, the crowds were already building up.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0335.jpg"
	width="2200"
	height="1461"
	alt="Entrance to the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0338.jpg"
	width="2200"
	height="1461"
	alt="Stairs leading into the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0341.jpg"
	width="2200"
	height="1461"
	alt="Crowds at the Summer Palace in Beijing"
/>

<TextContent>
	<h2>Longevity Hill</h2>
	<p>
		The complex starts with the beautifull canals, then it's a (small) hike up the mountain, and
		finally you descend to the lake where most of the structures are located.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0342.jpg"
	width="2200"
	height="1461"
	alt="Roof ornaments at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0344.jpg"
		width="2200"
		height="1461"
		alt="Roof ornaments at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0343.jpg"
		width="1461"
		height="2200"
		alt="Roof ornaments at the Summer Palace in Beijing"
	/>
</Panels>

<TextContent>
	<p>At the top you're rewarded with a view of the outskirts of Beijing.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0346.jpg"
	width="2200"
	height="1461"
	alt="Stairs leading up to the top of the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0347.jpg"
	width="2200"
	height="1461"
	alt="Structure at the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0348.jpg"
	width="2200"
	height="1461"
	alt="View towards Beijing from the Summer Palace in Beijing"
/>

<TextContent>
	<h2>Kunming lake</h2>
	<p>
		The lake is huge and since we were only here for the morning, we didn't walk around it, but
		instead explored the structures nearby.
	</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0358.jpg"
	width="2200"
	height="1461"
	alt="Gate at Kunming Lake at the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0351.jpg"
	width="2200"
	height="1461"
	alt="Kunming Lake at the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0357.jpg"
	width="2200"
	height="1461"
	alt="Long gallery at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0353.jpg"
		width="1461"
		height="2200"
		alt="Tower/Pagode at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0385.jpg"
		width="2200"
		height="1461"
		alt="Long Gallery at the Summer Palace in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0387.jpg"
	width="2200"
	height="1461"
	alt="Kunming Lake at the the Summer Palace in Beijing"
/>

<TextContent>
	<h2>Hall of dispelling clouds</h2>
	<p>
		Originally a temple, it was burned down in 1860 and later rebuild as a bedchamber for Empress
		Dowager Cixi. When she moved in, she became ill and thought it was because it was so close to
		the <strong>Tower of Buddhist Incense</strong> (below) and it's Buddhist territory. So she moved
		to another building and only used the Hall of Dispelling Clouds to receive tributes and congratulations
		on her birthday.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0360.jpg"
	width="2200"
	height="1461"
	alt="Hall of dispelling clouds at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0365.jpg"
		width="2200"
		height="1461"
		alt="Hall of dispelling clouds at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0383.jpg"
		width="2200"
		height="1461"
		alt="Door ornament at the the Summer Palace in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0368.jpg"
	width="2200"
	height="1461"
	alt="Hall of dispelling clouds at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0363.jpg"
		width="2200"
		height="1461"
		alt="Hall of dispelling clouds at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0371.jpg"
		width="2200"
		height="1461"
		alt="Hall of dispelling clouds at the Summer Palace in Beijing"
	/>
</Panels>
<TextContent>
	<h2>Tower of Buddhist Incense</h2>
	<p>
		Built on <strong>Longlevity Hill</strong>, the <strong>Tower of Buddhist Incense</strong> was built
		during the reign of Emperor Qianlong and is a religious structure.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0366.jpg"
	width="2200"
	height="1461"
	alt="Tower of Buddhist Incense at the Summer Palace in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0376.jpg"
		width="2200"
		height="1461"
		alt="Ornaments at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0377.jpg"
		width="2200"
		height="1461"
		alt="Ornaments at the Summer Palace in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0372.jpg"
	width="2200"
	height="1461"
	alt="Tower of Buddhist Incense at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0380.jpg"
		width="1461"
		height="2200"
		alt="Bridge at the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0379.jpg"
		width="1461"
		height="2200"
		alt="Ornaments at the Summer Palace in Beijing"
	/>
</Panels>

<TextContent>
	<p>
		We didn't climb to the top of the <strong>Tower of Buddhist Incense</strong>. We still felt the
		Great Wall hike in our legs, and time was running out.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0389.jpg"
	width="2200"
	height="1461"
	alt="Gardens at the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0391.jpg"
	width="2200"
	height="1461"
	alt="Stream at the Summer Palace in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0384.jpg"
		width="2200"
		height="1461"
		alt="Crowds at the the Summer Palace in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0393.jpg"
		width="2200"
		height="1461"
		alt="Crowds near the exit of the Summer Palace in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0394.jpg"
	width="2200"
	height="1461"
	alt="Dragon at the Summer Palace in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0396.jpg"
	width="2200"
	height="1461"
	alt="Exit of the Summer Palace in Beijing"
/>

<TextContent>
	<p>
		Being Dutch as we are we decided to not spend the 3 Yuan on a bike ride to the subway station
		and walk over there ourselves. After a couple of minutes we figured out we were heading the
		wrong way. It took us a good 15 minutes to get to the subway station. We later calculated that 3
		Yuan is not even 40 euro cents...
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0397.jpg"
	width="2200"
	height="1461"
	alt="Bicycles in Beijing"
/>

<TextContent>
	<h2>The Forbidden City</h2>
	<p>
		The Forbidden City is <i>the</i> place to visit when in Beijing. And it still being a Saturday, we
		could expect some crowds.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0400.jpg"
	width="2200"
	height="1461"
	alt="Entrance of the Forbidden City in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0398.jpg"
		width="2200"
		height="1461"
		alt="Entrance of the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0403.jpg"
		width="2200"
		height="1461"
		alt="Entrance of the Forbidden City in Beijing"
	/>
</Panels>
<TextContent>
	<p>
		But first lunch! We made the mistake to already enter the complex, so it was either Western
		fast-food or Chinese fast-food. Chinese fast-food it is.
	</p>
	<p>
		Now this was some next-level fancy stuff, it was self-heating rice. You'd buy this rice meal and
		you get it cold. The container is actually two containers, an outer and an inner, where the food
		is housed. You break a seal in the outer container and chemicals mix, heating up your meal. When
		you buy it, they break the seal for you, and they are able to serve a huge amount of customers
		very fast. Brilliant!
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0404.jpg"
	width="2200"
	height="1461"
	alt="Food at the the Forbidden City in Beijing - rice with vegetables and meat"
/>
<TextContent>
	<p>After finally figuring out where to get the tickets, we moved on to the entrance.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0406.jpg"
	width="2200"
	height="1461"
	alt="the Forbidden City in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0408.jpg"
		width="2200"
		height="1461"
		alt="Map of the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0414.jpg"
		width="2200"
		height="1461"
		alt="View of the the Forbidden City in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0412.jpg"
	width="2200"
	height="1461"
	alt="Wide-angle view of the Forbidden City in Beijing"
/>
<TextContent>
	<p>
		The <strong>Forbidden City</strong> is where the emperor lived during his reign and dates back to
		1406 when Emperor Yongle of the Ming Dynasty decided to build an imperial palace in Beijing
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0416.jpg"
	width="2200"
	height="1461"
	alt="View of the the Forbidden City in Beijing"
/>
<TextContent>
	<p>The first part of the complex consists of large squares surrounded with buildings.</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0420.jpg"
	width="2200"
	height="1461"
	alt="View of the entrance of the Forbidden City in Beijing from the back"
/>
<TextContent>
	<p>I mentioned the busy Saturday thing, right?</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0422.jpg"
	width="2200"
	height="1461"
	alt="Crowds at the Forbidden City in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0424.jpg"
	width="2200"
	height="1461"
	alt="Structure at the Forbidden City in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0436.jpg"
		width="2200"
		height="1461"
		alt="Door ornaments at the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0440.jpg"
		width="2200"
		height="1461"
		alt="Ornaments at the Forbidden City in Beijing"
	/>
</Panels>
<TextContent>
	<p>
		The Forbidden City lies in the centre of Beijing, but inside you hear nothing of the busy
		streets. The only way you are reminded you're in the city is by the skyscrapers that pop up
		every once in a while.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0444.jpg"
	width="2200"
	height="1461"
	alt="Roof view of the Forbidden City in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0443.jpg"
		width="2200"
		height="1461"
		alt="Roof view of the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0446.jpg"
		width="2200"
		height="1461"
		alt="Beijing towers in the background of the Forbidden City in Beijing"
	/>
</Panels>
<TextContent>
	<p>The second part has more alleys and backstreets, filled with even more buildings.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0449.jpg"
	width="2200"
	height="1461"
	alt="the Forbidden City in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0447.jpg"
		width="2200"
		height="1461"
		alt="Lion at the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0448.jpg"
		width="2200"
		height="1461"
		alt="Lions at the Forbidden City in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0451.jpg"
	width="2200"
	height="1461"
	alt="the Forbidden City in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0455.jpg"
		width="2200"
		height="1461"
		alt="Back alleys at the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0458.jpg"
		width="2200"
		height="1461"
		alt="Back alleys at the Forbidden City in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0460.jpg"
	width="2200"
	height="1461"
	alt="Rock structure at the Forbidden City in Beijing"
/>
<TextContent>
	<p>
		There are endless places to wander around and you could easily spend the day there. At some
		point in the afternoon we reached the exit.
	</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0462.jpg"
	width="2200"
	height="1461"
	alt="Back exit at the Forbidden City in Beijing"
/>
<TextContent>
	<p>
		You used to be able to exit at all gates, but because of the crowds, the Forbidden City is a
		one-way deal. This means street vendors know exactly where you'll be. .
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0466.jpg"
	width="2200"
	height="1461"
	alt="Hustlers at the Forbidden City in Beijing"
/>
<TextContent>
	<p>Since our hotel was next to the entrance, we had to circle the complex to get back.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0467.jpg"
	width="2200"
	height="1461"
	alt="Outside wall of the Forbidden City in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0469.jpg"
		width="2200"
		height="1461"
		alt="Wall of the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0470.jpg"
		width="2200"
		height="1461"
		alt="Moat around the Forbidden City in Beijing"
	/>
</Panels>
<TextContent>
	<p>
		After having done mostly tours and only walked to the nearest subway stop, we finally get to see
		some of the non-touristy Beijing.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0480.jpg"
	width="2200"
	height="1461"
	alt="Bycles and scooter in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0478.jpg"
		width="1461"
		height="2200"
		alt="Alley in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0496.jpg"
		width="1461"
		height="2200"
		alt="Alley in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0483.jpg"
	width="2200"
	height="1461"
	alt="Houses in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0503.jpg"
	width="2200"
	height="1461"
	alt="Public bathrooms in Beijing"
/>

<TextContent>
	<p>Near our hotel, at the front of the palace, things were fancy again.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0498.jpg"
	width="2200"
	height="1461"
	alt="Stream near the Forbidden City in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0499.jpg"
		width="2200"
		height="1461"
		alt="Potted plants in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0502.jpg"
		width="2200"
		height="1461"
		alt="Man writing with water in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0500.jpg"
	width="2200"
	height="1461"
	alt="Man resting near garden in Beijing"
/>

<TextContent>
	<p>After freshing up in the hotel, we set out for food.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0506.jpg"
		width="2200"
		height="1461"
		alt="Night view of the wall surrounding the Forbidden City in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0508.jpg"
		width="2200"
		height="1461"
		alt="Tunnel with broken chair in Beijing"
	/>
</Panels>

<TextContent>
	<p>The forbidden city is located at the People's Square with lots of government buildings.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0516.jpg"
	width="2200"
	height="1461"
	alt="Night view of the entrance of the Forbidden City in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0536.jpg"
		width="2200"
		height="1461"
		alt="Night view of the People's square in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0538.jpg"
		width="2200"
		height="1461"
		alt="Night view of the People's square in Beijing"
	/>
</Panels>
<TextContent>
	<p>
		We ducked into a random side-alley and found some tables on the sidewalk outside a restaurant.
		With hand and feet we managed to order food and we got the best Chicken Cashew meal I have ever
		eaten. It was _so_ good.
	</p>
	<p>
		Half-way in the meal it started raining and together with the staff and other diners we moved
		everything inside. It might not sound like much, but it's these little things that makes travel
		awesome
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0543.jpg"
	width="2200"
	height="1461"
	alt="Night view near the People's square in Beijing"
/>
<TextContent>
	<p>
		After the delicious meal we wandered around some more and finally got back to the hotel for a
		nightcap in the hotel gardens.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0549.jpg"
	width="2200"
	height="1461"
	alt="Hotel garden Forbidden City Inn, Beijing"
/>
