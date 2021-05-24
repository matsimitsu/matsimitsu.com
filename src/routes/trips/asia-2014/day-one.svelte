<script context="module">
	export const postData = {
		title: 'Day One',
		subtitle: 'China - Temple of Heaven',
		trip: 'asia-2014',
		startDate: new Date('2014-05-15'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0002.jpg',
			width: 2200,
			height: 1461,
			alt: 'Map of Temple of Heaven in Beijing'
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
</script>

<TripHeader {...postData} />

<TextContent>
	<p>Our first stop is Beijing, where we go on a 72 hour transfer visa. This visa does not require anything upfront, which is quite new. At Schiphol they check your visa before boarding and when it was our turn and told them we didn't have one, we could hear the sighs of the people behind us.</p>
	<p>It took a good couple of minutes of explaining and verifying before we could board. In their defense, the visa is for 72 hours maximum and between landing in Beijing and taking off again where 71 hours and fourty minutes.
	<p>
		After an 8.5 hour flight from Amsterdam and a very confusing ride to our hotel we finally made
		it to Beijing!
	</p>
		<p>
		We decided to head to the Temple of Heaven, a giant park with temples and people playing card
		games, as it was quite close to our hotel near the Forbidden City.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0002.jpg"
	width="2200"
	height="1461"
	alt="Map of Temple of Heaven in Beijing"
/>

<Location
	name="Temple of Heaven, Beijing (天坛)"
	height={360}
	zoom={400}
	focus={true}
	center={[116.4039, 39.876]}
	markers={[{ lat: 39.876, long: 116.4039, name: 'Beijing' }]}
>
	<p>
		Built in 1420 in the Ming Dynasty, this complex is four times bigger than the most famous
		landmark in Beijing, the Forbidden City.
	</p>
	<p>
		In the morning the park in the complex is mostly used by the elderly to exercise, some do Tai
		Chi and others Chinese Kung Fu.
	</p>
	<p>
		Originally, the complex was used by emperors to perform ceremonies to ask the gods for a good
		harvest. Three days before the ceremony, the emperor started fasting in a dedicated building
		before performing the cermony.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0004.jpg"
	width="2200"
	height="1461"
	alt="Long corridor at the Temple of Heaven in Beijing"
/>

<TextContent>
	<h2>Long corridor</h2>
	<p>
		On the map above, there's a corridor on the right, this <strong>Long corridor</strong> us used by
		locals to stay out of the sun and play games.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0008.jpg"
		width="2200"
		height="1461"
		alt="Poeple playing games in the Long corridor at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0009.jpg"
		width="2200"
		height="1461"
		alt="Poeple playing games in the Long corridor at the Temple of Heaven in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0005.jpg"
	width="2200"
	height="1461"
	alt="Poeple playing games in the Long corridor at the Temple of Heaven in Beijing"
/>

<TextContent>
	<h2>Hall of prayer</h2>
	<p>
		Next was the main attraction of the complex, the <strong>Hall of prayer</strong>, or Altar of
		Prayer. This is the place where the worship ceremonies were held.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0038.jpg"
	width="2200"
	height="1461"
	alt="Hall of prayer at the Temple of Heaven in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0018.jpg"
		width="1461"
		height="2200"
		alt="Hall of prayer for good harvests at at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0016.jpg"
		width="2200"
		height="1461"
		alt="Hall of prayer for good harvests at at the Temple of Heaven in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0022.jpg"
	width="2200"
	height="1461"
	alt="Hall of prayer for good harvests at at the Temple of Heaven in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0035.jpg"
		width="2200"
		height="1461"
		alt="Hall of prayer at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0043.jpg"
		width="2200"
		height="1461"
		alt="View of square around the Hall of prayer at the Temple of Heaven in Beijing"
	/>
</Panels>

<Explanation>
	<h2 class="text-left">Seventy year old door</h2>
	<p>
		Mislabeled on the map as the "Sixty year old door", this door was built for the emperor to take
		a shortcut so he didn't have to walk that far due to his age.
	</p>
	<p>
		He didn't want his children to use this gate so he made a rule that only emperors above the age
		of 70 can use this gate. After his death no other emperor made it to the age of 70, so the gate
		has been unused since then.
	</p>
</Explanation>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0029.jpg"
	width="2200"
	height="1461"
	alt="Sixty-year old door at the Temple of Heaven in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0032.jpg"
		width="2200"
		height="1461"
		alt="Roof ornaments at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0055.jpg"
		width="2200"
		height="1461"
		alt="Door ornaments at the Temple of Heaven in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0045.jpg"
	width="2200"
	height="1461"
	alt="View through the gate at the Temple of Heaven in Beijing"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0053.jpg"
	width="2200"
	height="1461"
	alt="View of the North Heaven gate at the Temple of Heaven in Beijing"
/>

<TextContent>
	<h2>Imperial Vault of Heaven</h2>
	<p>
		Located at the south side of the complex, this vault was used to store the tablets, used in the
		ceremony.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0065.jpg"
	width="2200"
	height="1461"
	alt="View at the Temple of Heaven in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0067.jpg"
		width="2200"
		height="1461"
		alt="Altars at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0057.jpg"
		width="2200"
		height="1461"
		alt="View at the Temple of Heaven in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0061.jpg"
	width="2200"
	height="1461"
	alt="View through the gate at the Temple of Heaven in Beijing"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0062.jpg"
	width="2200"
	height="1461"
	alt="View through the gate at the Temple of Heaven in Beijing"
/>

<TextContent>
	<h2>Palace of Abstinence</h2>
	<p>
		Two days before the ceremony the emperor would move to the <strong>Palace of Abstinence</strong>
		where he would fast to show the imperial respect to the god.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0082.jpg"
	width="2200"
	height="1461"
	alt="Closed gate at the Temple of Heaven in Beijing"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0076.jpg"
		width="2200"
		height="1461"
		alt="Gardens at the Temple of Heaven in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0081.jpg"
		width="1461"
		height="2200"
		alt="Two bridges at the Temple of Heaven in Beijing"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0079.jpg"
	width="2200"
	height="1461"
	alt="Dried up mote at the Temple of Heaven in Beijing"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0084.jpg"
	width="2200"
	height="1461"
	alt="Open gate at the Temple of Heaven in Beijing"
/>
<TextContent>
	<p>
		After wandering through the park/complex some more, we headed for the exit, it was getting late
		and we were quite jetlagged.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0087.jpg"
	width="2200"
	height="1461"
	alt="Entrance of the Temple of Heaven in Beijing"
/>

<TextContent>
	<p>As dutchies, it was nice to see another country embracing the good old bycicle.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0103.jpg"
	width="2200"
	height="1461"
	alt="Chinese sign in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0090.jpg"
		width="1461"
		height="2200"
		alt="Cyclists in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0093.jpg"
		width="1592"
		height="2200"
		alt="Cyclist in Beijing"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0106.jpg"
	width="2200"
	height="1461"
	alt="Person pushing a wheelchir on Qinian Daje in Beijing"
/>

<TextContent>
	<p>
		Though there were plenty of cars on wide avenues too, but overall the part where our hotel was
		had plenty of trees and other greenery.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0097.jpg"
	width="2200"
	height="1461"
	alt="Thoroughfare in in Beijing"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0113.jpg"
		width="2200"
		height="1461"
		alt="Church in Beijing"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0114.jpg"
		width="2200"
		height="1461"
		alt="Airconditioner in Beijing"
	/>
</Panels>
