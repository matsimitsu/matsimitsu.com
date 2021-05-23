<script context="module">
	export const postData = {
		title: 'Day Two',
		subtitle: 'The Great Wall of China & Emperors Tomb.',
		trip: 'asia-2014',
		startDate: new Date('2014-05-16'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0216.jpg',
			width: 2200,
			height: 1461,
			alt: 'View down the Great Wall of China'
		}
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import { circIn } from 'svelte/easing';
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		At 8 o clock your private tour guide and driver pulled up to the hotel parking lot. Today the
		plan is to visit the Great Wall of China and a few other historic sites.
	</p>
</TextContent>
<Location
	name="Beijing"
	height={360}
	zoom={9000}
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
		Yesterday we visited the <strong>Temple of Heaven</strong>, just south of our hotel next to the
		<strong>Forbidden City</strong>.
	</p>
	<p>
		Today we're on a guided tour to the <strong>Juyong Pass</strong> to see the Great Wall of China.
		After the wall, we're going to see the <strong>Ming Dynasty Tombs.</strong>
	</p>
	<p>
		Tomorrow, we're going to the "main" attractions of the city, the <strong>Forbidden City</strong>
		and the <strong>Summer Palace</strong>.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0117.jpg"
	width="2200"
	height="1461"
	alt="View of the Great Wall of China"
/>
<TextContent>
	<h2>Juyong Pass</h2>
	<p>
		It's already 25 degrees and the sun is out in full force. The stairs turn out to be incredibly
		steep and there's not a great amount of shade. The tour guide opted to stay near the car and
		gave us an hour to an hour and a half to wander around. Our (self-imposed) mission was to see
		how far we could make it up the wall.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0134.jpg"
		width="2200"
		height="1461"
		alt="Looking down to the Great Wall of China"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0152.jpg"
		width="1461"
		height="2200"
		alt="Watch tower at the Great Wall of China"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0149.jpg"
	width="2200"
	height="1461"
	alt="View towards Beijing from the Great Wall of China"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0160.jpg"
		width="2200"
		height="1461"
		alt="Window at the Great Wall of China"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0192.jpg"
		width="2200"
		height="1461"
		alt="Window at the Great Wall of China"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0170.jpg"
	width="2200"
	height="1461"
	alt="Looking down from the Great Wall of China"
/>
<TextContent>
	<p>
		As we climb higher up the wall, the crowds start to diminish. Most only make it to the first
		tower before heading back. Eventually we're all alone on the wall.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0156.jpg"
	width="2200"
	height="1461"
	alt="View down the valley from the Great Wall of China"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0162.jpg"
		width="2200"
		height="1461"
		alt="Looking down to the valley from the Great Wall of China"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0168.jpg"
		width="2200"
		height="1461"
		alt="Top of the Great Wall of China"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0180-Pano.jpg"
	width="2200"
	height="1160"
	alt="Valley view from the Great Wall of China"
/>
<TextContent>
	<p>In the distance you can see the outskirts of Beijing.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0187.jpg"
	width="2200"
	height="1461"
	alt="Valley view from the Great Wall of China"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0198.jpg"
	width="2200"
	height="1461"
	alt="Stair view from the Great Wall of China"
/>
<TextContent>
	<p>We finally made it to the top! It took a good hour to climb this far.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0210.jpg"
	width="2200"
	height="1461"
	alt="Watchtower view from the Great Wall of China"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0189.jpg"
	width="2200"
	height="1544"
	alt="House on the Great Wall of China"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0216.jpg"
	width="2200"
	height="1461"
	alt="View down the Great Wall of China"
/>

<Explanation>
	<h2 class="text-left">The great wall and tours</h2>
	<p>
		This was our first time in Asia, and also the first time booking tours, which we did on, I
		believe, TripAdvisor.
	</p>
	<p>
		The tour took us to the Great Wall and to the Ming Dynasty Tombs, wich lunch in between (at what
		can only be described as a giftshop with food, though the food was great!). And I believe we did
		a Tea Ceremony at the end.
	</p>
	<p>
		The "problem" with these tours is mostly they want you to buy things, but being at the start of
		a month-long trip, we didn't feel like dragging more weight along on day one.
	</p>
	<p>
		There Great Wall is... great, which means there are many places to see/visit it and the one we
		booked isn't necessarily the most beautiful spot you can see from Beijing.
	</p>
	<p>
		If you're planning to see the wall I'd recommend doing a bit of research to see what options to
		see the wall are available and what to book.
	</p>
	<p>
		For example I'd love to have done <a href="https://www.youtube.com/watch?v=-b3tZkT2gfQ"
			>this tour by Claire</a
		>. Then again, I'm still quite happy with what we say and it's a great reason to go back some
		day :).
	</p>
</Explanation>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0220.jpg"
	width="2200"
	height="1461"
	alt="Looking up to the Great Wall of China"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0217.jpg"
	width="2200"
	height="1461"
	alt="Village at the bottom of the Great Wall of China"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0222.jpg"
		width="2200"
		height="1461"
		alt="Cannon at the Great Wall of China"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0223.jpg"
		width="2200"
		height="1461"
		alt="Gate tower at the Great Wall of China"
	/>
</Panels>
<TextContent>
	<p>From across the river you can see the various lookout/signal towers.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0226.jpg"
	width="2200"
	height="1461"
	alt="Water crossing at the Great Wall of China"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0228.jpg"
	width="2200"
	height="1461"
	alt="Watch and signal towers at the Great Wall of China"
/>
<TextContent>
	<p>
		There's a nice quiet temple(?) at the bottom, nice to catch our breath before we headed to the
		next destination.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0238.jpg"
	width="2200"
	height="1461"
	alt="Temple building at the Great Wall of China"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0236.jpg"
		width="2200"
		height="1461"
		alt="Prairs with red string at a temple at the Great Wall of China"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0241.jpg"
		width="2200"
		height="1461"
		alt="Red strings at the Great Wall of China"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0239.jpg"
	width="2200"
	height="1461"
	alt="Red strings hanging from trees at the Great Wall of China"
/>

<TextContent>
	<h2>Ming Dynasty Tombs</h2>
	<p>
		After getting dinner we head out to visit the next site. The Ming Dynasty Tombs. Depending on
		the mood of your tour guide, you can either start at the tombs, or at the other end, called <strong
			>The Spirit Way</strong
		>. One of the few places of the emperor wasn't carried but had to walk himself.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0242.jpg"
	width="2200"
	height="1461"
	alt="Gate house at the Emperors Tomb in Beijing"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0246.jpg"
	width="2200"
	height="1461"
	alt="Path towards the Emperors Tomb in Beijing"
/>

<TextContent>
	<p>The "Way" is lined with various animals, either sitting or standing.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0249.jpg"
	width="2200"
	height="1461"
	alt="Stone standing Elephant at the Emperors Tomb in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0247.jpg"
		width="2200"
		height="1461"
		alt="Stone animal at the Emperors Tomb in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0248.jpg"
		width="1461"
		height="2200"
		alt="Stone Elephant at the Emperors Tomb in Beijing"
	/>
</Panels>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0252.jpg" width="2200" height="1461" alt="Gate at the Emperors Tomb in Beijing" />
<TextContent>
	<p>The spirit walk is the first part of making our way to the Tomb of China's first emperor.</p>
</TextContent>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0253.jpg" width="2200" height="1461" alt="Building at the Emperors Tomb in Beijing" />
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0254.jpg" width="2200" height="1461" alt="Building at the Emperors Tomb in Beijing" />
<ResponsiveImage full src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0256.jpg" width="2200" height="1461" alt="Red carpet between buildings at the Emperors Tomb in Beijing" />

<TextContent>
	<h2>Changling Tomb</h2>
	<p>
		Open for public, the main building of the Changling Tomb building houses a museum and a Copper Statue of Emperor <strong>Zhu Di</strong>. Among the 16 emperors of the <strong>Ming Dynasty</strong>, he made the greatest impact on History</p>
		<p>
			During his reign, the Ming empire reached it's peak. After his demise, another 12 tombs were build for the emperors after him, but this one is the best preserved.
	</p>
</TextContent>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0261.jpg" width="2200" height="1461" alt="Statue of emperor at the Emperors Tomb in Beijing" />
<Panels>
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0264.jpg" width="2200" height="1461" alt="Inside the the Emperors Tomb in Beijing" />
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0266.jpg" width="2200" height="1461" alt="Museum pieces at the Emperors Tomb in Beijing" />
</Panels>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0263.jpg" width="2200" height="1461" alt="View outside from the Emperors Tomb in Beijing" />

<TextContent>
	<p>
		We're at the right place!
	</p>
</TextContent>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0269.jpg" width="2200" height="1461" alt="Tourist stop at the Emperors Tomb in Beijing" />
<Panels>
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0272.jpg" width="2200" height="1461" alt="Buildingt at the Emperors Tomb in Beijing" />
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0295.jpg" width="2200" height="1461" alt="Guards guarding door at the Emperors Tomb in Beijing" />
</Panels>

<TextContent>
	<p>
		Behind the main building lies the actual Tomb, you can take a path up the tomb for a nice view.
	</p>
</TextContent>

<ResponsiveImage full src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0275.jpg" width="2200" height="1461" alt="Building with ancient relics at the Emperors Tomb in Beijing" />
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0277.jpg" width="2200" height="1461" alt="Look up the stairs towards a tower at the Emperors Tomb in Beijing" />

<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0279.jpg" width="2200" height="1461" alt="View from above at the Emperors Tomb in Beijing" />
<TextContent>
	<p>Inside the tomb, you can see the grave.</p>
</TextContent>
<Panels>
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0280.jpg" width="2200" height="1461" alt="Stone with scripted text with child running past at the Emperors Tomb in Beijing" />
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0283.jpg" width="1461" height="2200" alt="Scripted stone at the Emperors Tomb in Beijing" />
</Panels>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0281.jpg" width="2200" height="1461" alt="View from above at the Emperors Tomb in Beijing" />

<TextContent>
	<p>After a bathroom break it was time to head back to the city.</p>
</TextContent>
<Panels>
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0298.jpg" width="2200" height="1461" alt="Toilets at the Emperors Tomb in Beijing" />
	<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0297.jpg" width="1461" height="2200" alt="Corner of building at the Emperors Tomb in Beijing" />
</Panels>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0291.jpg" width="2200" height="1461" alt="Wide paved path lined with trees at the Emperors Tomb in Beijing" />

<TextContent>
	<h2>Beijing Olympic Pool</h2>
	<p>The (obligatory) tea ceremony took place near the Olympic Pool, which was in the news all the time. We took a small detour to see it in person.</p>
</TextContent>

<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0301.jpg" width="2200" height="1461" alt="Olympic swimming pool in Beijing" />
<TextContent>
	<p>Yep.. That's a pool! After the detour we went back to our hotel for dinner and a nice relaxing evening in the gardens of the hotel.</p>
</TextContent>
<ResponsiveImage src="https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0305.jpg" width="2200" height="1461" alt="Street next to Olympic swimming pool in Beijing" />
