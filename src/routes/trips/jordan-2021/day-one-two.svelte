<script context="module">
	export const postData = {
		title: 'Day One & Two',
		subtitle: 'Traveling to Amman',
		trip: 'jordan-2021',
		startDate: new Date('2021-10-01'),
		endDate: new Date('2021-10-02'),
		image: {
			src: 'https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02168.jpg',
			width: 2000,
			height: 1333,
			alt: 'Citadel Amman'
		},
		locations: [
			{
				name: 'Amman',
				long: 35.930359,
				lat: 31.963158
			},
			{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' },
			{ name: 'Dead Sea', long: 35.5669042, lat: 31.4553619, textPosition: 'left' },
			{ name: 'Petra', long: 35.4155337, lat: 30.481418 },
			{ name: 'Wadi Rum', long: 35.3214502, lat: 29.505919 }
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Explanation from '$lib/Explanation.svelte';
</script>

<TripHeader {...postData} />
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211001-085401662.jpg"
	width="2000"
	height="1500"
	alt=""
/>

<TextContent>

	<h2>Day One</h2>

	<p>
		The day started early with a train ride to Schiphol Airport, where all my documents for entry
		into Jordan where checked by the Turkish Airlines Crew.
	</p>
	<p>
		After a 3 hour flight to Istanbul I had a 4 hour layover, which I used to visit the Museum at
		the airport.
	</p>
	<p>From Istanbul it was a 2 hour flight to Amman, the capitol of Jordan</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211001-162534069.jpg"
		width="2000"
		height="1500"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211001-192836060.jpg"
		width="2000"
		height="1500"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Day Two</h2>
	<p>After a delicious breakfast, it was time to explore the city of Amman.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-061242796.jpg"
			width="2000"
			height="1500"
			alt=""
		/>
	</PhonePic>
	<p>
		The city was originally built on seven hills, but since then has spread out to over nineteen
		hills, and you'll notice this when walking around.
	</p>
	<p>
		My hotel is near the city center, and once there you'll find many little alleys to wander
		around. Most have shops, but some have fruit markets.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02016.jpg"
		width="2000"
		height="1333"
		alt="Fruit market Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02017.jpg"
		width="4000"
		height="2535"
		alt="Fruit market amman"
	/>
</Panels>

<TextContent>
	<h2>Roman Nymphaeum</h2>
	<p>
		I just happened to stumble across this Roman Nymphaeum, which is a fancy word for fountain. The
		fence to the site was unlocked but not open, and I decided to play the dumb tourist and wander
		onto the site.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02019.jpg"
	width="2000"
	height="1333"
	alt="Roman Nymphaeum"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02024.jpg"
		width="2000"
		height="1333"
		alt="Roman Nymphaeum"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02026.jpg"
		width="2000"
		height="1578"
		alt="Amman"
	/>
</Panels>

<TextContent>
	<h2>Roman Theatre</h2>
	<p>
		My actual goal was to find the Roman Theatre. A few months ago I visited <a
			href="https://www.matsimitsu.com/trips/greece-2021/day-two">the one in Greece</a
		>. And it's interesting to see how this one holds up.
	</p>
	<p>Thanks to my Jordan pass, I could walk right in.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02032.jpg"
	width="2000"
	height="1333"
	alt="Roman Theatre Amman"
/>

<Explanation>
	<h2 class="text-left">The Jordan Pass</h2>
	<p>
		The <a href="https://www.jordanpass.jo">Jordan Pass</a> is an online ticket you can buy from the
		Jordanian government that allows you to visit almost all historic sites in the country, including
		Petra.
	</p>
	<p>
		It also allows you to get a Visa on Arrival without all the hassle of paying the visa in cash,
		like the people behind me were trying to do.
	</p>
	<p>
		If you plan to visit Petra, it's already cheaper to get the pass, and you get to visit all the
		other attractions in the country for free.
	</p>
	<p />
	<p>I highly recommend getting a Jordan Pass when visiting Jordan.</p>
</Explanation>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02033.jpg"
		width="2000"
		height="1333"
		alt="Roman Theatre Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02027.jpg"
		width="1333"
		height="2000"
		alt="Roman Theatre Amman"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02039.jpg"
	width="2000"
	height="1333"
	alt="Roman Theatre Amman"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02058.jpg"
		width="2000"
		height="1333"
		alt="Roman Theatre Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02042.jpg"
		width="2000"
		height="1333"
		alt="Roman Theatre Amman"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02056.jpg"
	width="2000"
	height="1333"
	alt="Roman Theatre Amman"
/>

<TextContent>
	<p>One museum shows relics of the past, such as mosaics found near the site.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02062.jpg"
	width="2000"
	height="1333"
	alt="Museum at the Roman Theatre in Amman"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02063.jpg"
		width="2000"
		height="1265"
		alt="Museum at the Roman Theatre in Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02064.jpg"
		width="2000"
		height="1436"
		alt="Museum at the Roman Theatre in Amman"
	/>
</Panels>

<TextContent>
	<p>The other one shows how people lived and dressed in the day.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02067.jpg"
	width="2000"
	height="1333"
	alt="Museum at the Roman Theatre in Amman"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02066.jpg"
		width="2000"
		height="1333"
		alt="Museum at the Roman Theatre in Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02070.jpg"
		width="1333"
		height="2000"
		alt="Museum at the Roman Theatre in Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02073.jpg"
		width="2000"
		height="1333"
		alt="Museum at the Roman Theatre in Amman"
	/>
</Panels>

<TextContent>
	<h2>Odeon</h2>
	<p>
		Where the Roman Theatre seats about six thousand people, the Odeon next door seats just 500. It
		was used for musical performances, poetry readings and debates or lectures.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02076.jpg"
	width="2000"
	height="1333"
	alt="Odeon Amman"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02075.jpg"
		width="1391"
		height="2000"
		alt="Odeon Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02077.jpg"
		width="2000"
		height="1333"
		alt="Odeon Amman"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02079.jpg"
	width="2000"
	height="1333"
	alt="Odeon Amman"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02082.jpg"
		width="2000"
		height="1333"
		alt="Odeon Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02083.jpg"
		width="2000"
		height="1333"
		alt="Odeon Amman"
	/>
</Panels>

<TextContent>
	<p>
		From the Theatre, I made my way to the Citadel, conveniently located on top of a 805 meter high
		hill.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02093.jpg"
	width="2000"
	height="1333"
	alt="Roman Theatre"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02095.jpg"
		width="2000"
		height="1333"
		alt="Amman city views"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02096.jpg"
		width="1333"
		height="2000"
		alt="Amman city views"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02090.jpg"
	width="2000"
	height="1411"
	alt="Safe city"
/>
<TextContent>
	<p>Seems Amman is a safe city.</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02097.jpg"
		width="1333"
		height="2000"
		alt="Amman city views"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02101.jpg"
		width="2000"
		height="1333"
		alt="Amman city views"
	/>
</Panels>

<TextContent>
	<h2>Citadel</h2>
	<p>
		The Citadel is one of the longest inhabited places on earth and you can find Roman temples,
		Palaces and Churches on this hilltop.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02168.jpg"
	width="2000"
	height="1333"
	alt="Hercules temple Amman"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02108.jpg"
	width="2000"
	height="1333"
	alt="Citadel Amman"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02110.jpg"
		width="1175"
		height="2000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02109.jpg"
		width="2000"
		height="1333"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02112.jpg"
		width="1316"
		height="2000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02160.jpg"
	width="2000"
	height="1333"
	alt="Hercules temple Amman"
/>

<TextContent>
	<p>This might seem like a Mosque, but it's actually a Palace.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02117.jpg"
	width="2000"
	height="1333"
	alt="Palace Citadel Amman"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02126.jpg"
		width="1333"
		height="2000"
		alt="Palace Citadel Amman"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02120.jpg"
		width="2000"
		height="1256"
		alt="Palace Citadel Amman"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02131.jpg"
	width="2000"
	height="1333"
	alt="Palace in Citadel Amman"
/>

<TextContent>
	<p>
		Behind the Palace, there used to be bathhouses, I think it's neat to get a sense of how it would
		have looked by looking through the various alleys and gates.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02124.jpg"
		width="2000"
		height="1333"
		alt="Remnants of bathhouse Amman Citadel"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02146.jpg"
		width="1333"
		height="2000"
		alt="Remnants of bathhouse Amman Citadel"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02147.jpg"
	width="2000"
	height="1333"
	alt="Bathhouse citadel"
/>

<TextContent>
	<p>The views from the Citadel are really nice too.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02134.jpg"
	width="2000"
	height="1333"
	alt="Giant Flag"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02136.jpg"
	width="2000"
	height="1333"
	alt="Citadel views"
/>

<TextContent>
	<p>The bathhouse and palace needed water and they used to store it in this circular building</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02150.jpg"
	width="2000"
	height="1333"
	alt="Water storage"
/>
<TextContent>
	<p>This is the only remaining wall of the actual Mosque in the Citadel.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02151.jpg"
	width="2000"
	height="1333"
	alt="Mosque"
/>
<TextContent>
	<p>And just a few meters away are the remains of a Byzantine Church.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02152.jpg"
	width="2000"
	height="1333"
	alt="Byzantine Church Citadel Amman"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02155.jpg"
	width="2000"
	height="1333"
	alt="Byzantine Church Citadel Amman"
/>

<TextContent>
	<p>After all this walking, it was time for food, back down the hill in Downtown Amman.</p>
	<p>
		I noticed a lot of people sitting around with paper plates eating something I didn't recognize
		and decided to join the nearby queue.
	</p>
	<PhonePic subtitle="Delicious Knafeh"
		><ResponsiveImage
			src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-120830841.jpg"
			width="1500"
			height="2000"
			alt="Knafeh"
		/>
	</PhonePic>
	<p>
		According to Google Lens and Wikipedia Knafeh is a traditional Middle Eastern dessert made with
		spun pastry called kataifi, soaked in sweet, sugar-based syrup, and typically layered with
		cheese, or with other ingredients such as clotted cream, pistachio or nuts, depending on the
		region.
	</p>
	<p>Cheese and Sugar taste delicious!</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02179.jpg"
		width="1333"
		height="2000"
		alt="Amman streets"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-121603385.jpg"
		width="2000"
		height="1500"
		alt="Waiting for Knafeh"
	/>
</Panels>

<TextContent>
	<h2>Rainbow St.</h2>
	<p>After some relaxing at the hotel, I walked to Rainbow Street, which is supposed to be the place to be in the evening.</p>
	<p>I thought it was slightly underwhelming, it's just a street with some shops and restaurants 🤷.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02180.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02183.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02184.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02185.jpg"
		width="4000"
		height="2697"
		alt=""
	/>
</Panels>
