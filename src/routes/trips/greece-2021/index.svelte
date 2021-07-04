<script context="module">
	export const postData = {
		title: 'Greece 2021',
		subtitle:
			'I know the title of the trip says "Greece", but it\'s really Athens :) I have 4 days here to visit the many sites Athens has to offer.',
		trip: 'greece-2021',
		startDate: new Date('2021-07-04'),
		endDate: new Date('2021-07-07'),
		image: {
			src: 'https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01361.jpg',
			width: 2200,
			height: 1467,
			alt: 'Acropolis'
		},
		locations: [
			{
				name: 'Athens',
				long: 23.727539,
				lat: 37.98381,
				textPosition: 'left'
			},
			{ name: 'Amsterdam', long: 4.89707, lat: 52.377956, textPosition: 'left' }
		]
	};
	export const tripData = {
		title: 'Greece 2021',
		subtitle:
			'With Athens turning "yellow", meaning we can travel there, but with caution, it was time to pack the bags and get on a plane for the first time in a year.',
		trip: 'greece-2021',
		startDate: new Date('2021-07-04'),
		endDate: new Date('2021-07-07'),
		image: {
			src: 'https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01361.jpg',
			width: 2200,
			height: 1467,
			alt: 'Acropolis'
		},
		countries: ['Greece']
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>
<Location
	name="Athens"
	height={550}
	zoom={1000}
	focus={true}
	center={[14, 45]}
	markers={postData.locations}
>
	<p>
		After filling out many forms and getting a PRC test especially for travel, paid by the
		government I had the coveted QR code that would allow me to travel.
	</p>
	<p>
		The flight was more packed than I thought it would be, but I had an entire row for myself
		regardless.
	</p>
	<p>
		At Athens airport they checked our QR codes (not scanned, but just stared at it for a second and
		then waved us through.
	</p>
	<p>
		From the airport I took a metro ride to the Acropolis station, close to where my Airbnb was
		located. After a quick Souvlaki wrap as a late dinner I took a shower and went to bed.
	</p>
	<p>
		The next morning I made a quick coffee in the appartment and headed out, towards Filopappou Hill
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01357.jpg"
	width="2200"
	height="1467"
	alt="Scoorter with plants"
/>

<TextContent>
	<h2>Filopappou Hill</h2>
	<p>
		Filopappou Hill is a hill next to the Acropolys and gives great views of the various buildings
		on the mountaintop.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01359.jpg"
	width="2200"
	height="1467"
	alt="broken bridge"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01360.jpg"
	width="2200"
	height="1467"
	alt="Acropolys from Filopappou Hill"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01369.jpg"
	width="2200"
	height="1467"
	alt="The ocean from Filopappou Hill"
/>

<TextContent>
	<p>
		One of the main attractions on Filopappou Hill is the Philopappos Monument, an ancient greek
		mausoleum dedicated to.. you guessed it, Philopappos.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01383.jpg"
		width="1467"
		height="2200"
		alt="Philopappos Monument"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01388.jpg"
		width="2200"
		height="1467"
		alt="Philopappos Monument"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01398.jpg"
	width="2200"
	height="1467"
	alt="Filopappou Hill"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01391.jpg"
	width="2200"
	height="1467"
	alt="Acropolis from Filopappou Hill"
/>

<TextContent>
	<p>Another attraction is the Observatory.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01396.jpg"
	width="2200"
	height="1467"
	alt="Observatory"
/>

<TextContent>
	<h2>Hephaistos temple and Stoa of Attalos.</h2>
	<p>
		Next to the Observatory is a path that leads down the mountain to the city and after a delicious
		Souvlaki brunch I crossed the ditch with a Subway line and made my way to the entrance of the
		Hephaistos temple and Stoa of Attalos. complex.
	</p>
	<p>
		I paid for a 5-day ticket which gives you access to six sites in Athens, including the
		Acropolis, it's 30 euro's saving you money if you visit more than 3 sites, as each site is 10
		euro's to enter.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01494.jpg"
	width="2200"
	height="1467"
	alt="Metro in a ditch"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01404.jpg"
	width="2200"
	height="1578"
	alt="Hephaistos temple"
/>
<TextContent>
	<p>
		The Hephaistos temple is one of the best preserved temples in Athens and was build around the
		second half of the 5th century before Christ.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01415.jpg"
		width="2200"
		height="1467"
		alt="Hephaistos temple"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01413.jpg"
		width="1467"
		height="2200"
		alt="Hephaistos temple"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01409.jpg"
	width="2200"
	height="1467"
	alt="Hephaistos temple"
/>

<TextContent>
	<p>
		Across from the temple lies the Stoa of Attalos. Stoa means covered walkway and it was built by
		King Attalos II, who ruled between 159 BC and 138 BC.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01407.jpg"
	width="2200"
	height="1467"
	alt="Stoa of Attalos."
/>

<TextContent>
	<p>But before we go there, we have to cross the ruins in between.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01401.jpg"
	width="2200"
	height="1467"
	alt="Greek ruins"
/>

<TextContent>
	<p>Most ruins in Athens look like this, it's usually only the foundations that are left.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01422.jpg"
	width="2200"
	height="1467"
	alt="Greek church"
/>

<TextContent>
	<p>Along the way there's a little church where you can look inside.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01445.jpg"
		width="2200"
		height="1605"
		alt="church"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01451.jpg"
		width="2200"
		height="1467"
		alt="church"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01452.jpg"
		width="2200"
		height="1467"
		alt="church"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01459.jpg"
		width="1467"
		height="2200"
		alt="church"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01428.jpg"
		width="1467"
		height="2200"
		alt="church bell"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01454.jpg"
		width="2200"
		height="1467"
		alt="column"
	/>
</Panels>

<TextContent>
	<p>Stray cats are everywhere and usually taken care of by the local people.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01431.jpg"
	width="2200"
	height="1467"
	alt="cat"
/>

<TextContent>
	<p>
		Right the Stoa. Inside are various statues found near the site there's an upstairs for more
		great views of Athens.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01463.jpg"
	width="2200"
	height="1467"
	alt="Stoa of Attalos"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01483.jpg"
		width="2200"
		height="1467"
		alt="Greek statue"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01480.jpg"
		width="2200"
		height="1467"
		alt="temple view"
	/>
</Panels>

<TextContent>
	<p>Priorities...</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01488.jpg"
		width="970"
		height="2200"
		alt="Greek statue"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01486.jpg"
		width="1467"
		height="2200"
		alt="Priorities"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01496.jpg"
		width="2200"
		height="1467"
		alt="Stoa of Attalos"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01498.jpg"
		width="2200"
		height="1467"
		alt="Stoa of Attalos"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01500.jpg"
		width="2200"
		height="1467"
		alt="Stoa of Attalos"
	/>
</Panels>

<TextContent>
	<p>There's also a little museum with good preserved relics in the back of the Stoa</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01503.jpg"
		width="2200"
		height="1467"
		alt="Stoa of Attalos relics"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01504.jpg"
		width="2200"
		height="1467"
		alt="Stoa of Attalos relics"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01510.jpg"
	width="2200"
	height="1467"
	alt="Stoa of Attalos"
/>

<TextContent>
	<h2>Hadrianus Library</h2>
	<p>
		Not all sites were created equally. After the Stoa I walked down the road to the Hadrianus
		Library. And apart from a few columns and rubble there isn't a whole lot left.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01521.jpg"
	width="2200"
	height="1467"
	alt="Hadrianus Library remnants"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01519.jpg"
		width="1467"
		height="2200"
		alt="Hadrianus Library remnants"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01526.jpg"
		width="2200"
		height="1467"
		alt="Hadrianus Library remnants"
	/>
</Panels>

<TextContent>
	After dodging a number of touts selling bracelets, wallets and who knows what else, I made it to
	Monastiraki Square.
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01533.jpg"
	width="2200"
	height="1467"
	alt="Monastiraki Square"
/>

<TextContent>
	Not that I <em>wanted</em> to go there, but still! After walking down a number of winding alleys I
	made it to the next site on the 5-day ticket.
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01538.jpg"
		width="2200"
		height="1467"
		alt="Monastiraki Square alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01539.jpg"
		width="1467"
		height="2200"
		alt="Monastiraki Square alleys"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01541.jpg"
	width="2200"
	height="1467"
	alt="Greek church"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01556.jpg"
	width="2200"
	height="1467"
	alt="Old greek building"
/>

<TextContent>
	<h2>Agora and the Tower of Winds</h2>
	<p>
		You have to again really use your imagination to get a sense of what really stood here centuries
		ago, as now it's mostly rubble and a few columns. Luckily, as with every site, there are plenty
		of plaques that describe the buildings.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01569.jpg"
	width="2200"
	height="1467"
	alt="Agora"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01570.jpg"
	width="2200"
	height="1467"
	alt="Agora"
/>

<TextContent>
	<p>
		THe Tower of Winds requies less imagination. It's a clock tower and it's considered the world's
		first meteorological stations. It features sundials, a vane and a water clock.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01554.jpg"
		width="1467"
		height="2200"
		alt="Tower of the winds"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01546.jpg"
		width="2200"
		height="1467"
		alt="Tower of the winds"
	/>
</Panels>

<TextContent>
	<p>Across from the Tower of Winds there's a little Mosque with a nice view of the Tower</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01565.jpg"
		width="2200"
		height="1467"
		alt="Mosque"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01559.jpg"
		width="1467"
		height="2200"
		alt="Tower of the winds"
	/>
</Panels>

<TextContent>
	<h2>Plaka alleys</h2>
	<p>
		Plaka is a neighbourhood near the Acropolis and it consists of many small alleys filled with
		bars, restaurants, gelato and coffee places.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01572.jpg"
	width="2200"
	height="1467"
	alt="Plaka alleys"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01576.jpg"
		width="2200"
		height="1467"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01577.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01578.jpg"
	width="2200"
	height="1467"
	alt="Plaka alleys"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01573.jpg"
		width="2200"
		height="1467"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01582.jpg"
		width="2200"
		height="1467"
		alt="Plaka alleys"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01585.jpg"
	width="2200"
	height="1467"
	alt="Plaka alleys"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01588.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01590.jpg"
		width="2200"
		height="1467"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01591.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01600.jpg"
	width="2200"
	height="1467"
	alt="Plaka alleys"
/>
<TextContent>
	<p>After a super nice Vanilla and Pistache Gelato I headed towards the next site.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01596.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01598.jpg"
		width="2200"
		height="1467"
		alt="Plaka alleys"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01599.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01607.jpg"
		width="1467"
		height="2200"
		alt="Plaka alleys"
	/>
</Panels>

<TextContent>
	Walking to the Temple of the Olympic Zeus, I came across the Hadrianus Gate. A marble structure
	named after an old emperor.
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01612.jpg"
	width="2200"
	height="1467"
	alt="Hadrianus gate"
/>

<TextContent>
	<h2>Temple of the Olympic Zeus</h2>
	<p>
		It's again imagination time, though it's still amazing to see how big those columns are in
		person. It must have been a hell of a job to get these kinds of structures erected in those
		days.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01618.jpg"
		width="1467"
		height="2200"
		alt="Temple of the Olympische Zeus"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01621.jpg"
		width="1467"
		height="2200"
		alt="Temple of the Olympische Zeus"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01623.jpg"
	width="2200"
	height="1467"
	alt="Temple of the Olympische Zeus"
/>

<TextContent>
	<h2>National Gardens</h2>
	<p>
		Across the road from the Temple of the Olympic Zeus are the National Gardens. An excellent place
		to take a breather in the shade.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01627.jpg"
	width="2200"
	height="1467"
	alt="Zappeion"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01630.jpg"
	width="2200"
	height="1467"
	alt="National Gardens"
/>
<TextContent
	><p>Strewn around the gardens are relics that remind you of the old days.</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01632.jpg"
		width="2200"
		height="1467"
		alt="National Gardens"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01633.jpg"
		width="2200"
		height="1467"
		alt="National Gardens"
	/>
</Panels>
<TextContent
	><p>
		There are plenty of places with lots of shade, such as this plant-covered area.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01631.jpg"
	width="2200"
	height="1467"
	alt="National Gardens"
/>

<TextContent>
	<h2>Panathenaic Stadium and Kallimármaro alleys</h2>
	<p>
		The Panathenaic Stadium is the largest stadium in the world that's built completely out of
		marble. There's also not a lot of shade and I opted to not do the audio tour but instead do a
		quick lap and get out.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01639.jpg"
	width="2200"
	height="1467"
	alt="Panathenaic Stadium"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01645.jpg"
		width="2200"
		height="1467"
		alt="Panathenaic Stadium"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01648.jpg"
		width="2200"
		height="1496"
		alt="Panathenaic Stadium"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01636.jpg"
	width="2200"
	height="1467"
	alt="Panathenaic Stadium"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01652.jpg"
	width="2200"
	height="1132"
	alt="Panathenaic Stadium"
/>

<TextContent>
	<p>
		After the entire day exposed to the sun it was time for dinner and a nice cold beer in the area
		around my hotel called Kallimármaro.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01653.jpg"
	width="2200"
	height="1467"
	alt="Church"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01654.jpg"
		width="2200"
		height="1467"
		alt="Kallimármaro alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01655.jpg"
		width="1467"
		height="2200"
		alt="Kallimármaro alleys"
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01656.jpg"
		width="2200"
		height="1467"
		alt="Kallimármaro alleys"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01657.jpg"
		width="1467"
		height="2200"
		alt="Kallimármaro alleys"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01658.jpg"
	width="2200"
	height="1467"
	alt="Kallimármaro alleys"
/>

<TextContent>
	<p>After a nice burger and a beer it was time to head to the apartment for a nice cold shower.</p>
</TextContent>
