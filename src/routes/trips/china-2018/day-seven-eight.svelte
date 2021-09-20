<script context="module">
	export const postData = {
		title: 'Day Seven & Eight',
		subtitle: 'Guangzhou',
		trip: 'china-2018',
		startDate: new Date('2018-05-07'),
		endDate: new Date('2018-05-08'),
		image: {
			src: 'https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01214.jpg',
			width: 4000,
			height: 2667,
			alt: 'Guangzhou tower'
		},
		locations: [
			{
				lat: 22.542883,
				long: 114.062996,
				name: 'Shenzen'
			},
			{
				lat: 23.116388,
				long: 113.326134,
				name: 'Guangzhou',
				textPosition: 'left'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Location from '$lib/Location.svelte';
</script>

<TripHeader {...postData} />
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180507-01105.jpg"
	width="4000"
	height="2667"
	alt="CRH High-Speed train to Guangzhou"
/>

<Location
	name="Shenzhen > Guangzhou"
	height={600}
	zoom={1000}
	focus={true}
	center={[114, 22]}
	markers={postData.locations}
>
	<p>
		Yesterday mainly consisted of traveling to Guangzhou and camera problems. The amount of dust on
		my camera's sensor is so significant that I have to spend most of my editing time using the
		spot-removal tool in Lightroom to get a decent photo.
	</p>
	<p>
		Despite being in the world's hardware capital, it was impossible to get a sensor cleaning kit
		for my camera, and eventually, I bought an obviously fake Canon sensor cleaning kit.
		Surprisingly, it got the job done (mostly).
	</p>
	<p>
		It took most of the day navigating the many buildings with hundreds of stalls selling everything
		from iPhone batteries to 3d printers to get my camera fixed. We spent the remaining afternoon
		traveling from Shenzhen to Guangzhou.
	</p>
	<p>
		Today we had a pretty lousy weather prediction of mostly rain, so we opted to explore the city
		instead of hiking up a mountain.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01113.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01120.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01117.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		Our hotel is located on a small island that used to be divided between the British and the
		French; you can see this in the colonial architecture of the buildings.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01118.jpg"
	width="4000"
	height="2667"
	alt="Bronze statue of man holding camera"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01122.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01123.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01125.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<TextContent>
	<p>
		After our morning coffee, we headed to the Temple of the Six Banyan Trees; on our way, we also
		ran into the Sun Yat-sen Memorial Hall and the park behind it.
	</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01133.jpg"
	width="4000"
	height="2667"
	alt="Sun Yat-sen Memorial Hall"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01135.jpg"
		width="2667"
		height="4000"
		alt="Woman sitting in front of the Sun Yat-sen Memorial Hall"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01139.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou FC"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01143.jpg"
		width="2667"
		height="4000"
		alt="Statue of goats"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01140.jpg"
		width="2667"
		height="4000"
		alt="Tree growing from a wall"
	/>
</Panels>
<TextContent>
	<p>The park was nice, but we still had the temple to find.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01144.jpg"
	width="4000"
	height="2667"
	alt="Road covered by trees in Guangzhou"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01145.jpg"
		width="4000"
		height="2667"
		alt="Apartment building"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01146.jpg"
		width="2667"
		height="4000"
		alt="Bamboo"
	/>
</Panels>
<TextContent>
	<p>
		It's fun to see how we like to explore parts of the city that we would never have dared to enter
		a few years ago, such as these alleys.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01151-2.jpg"
	width="4000"
	height="3887"
	alt="Narrow alley in Guangzhou"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01152.jpg"
		width="4000"
		height="2667"
		alt="Woman chopping things"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01156.jpg"
		width="4000"
		height="2667"
		alt="Plant growing from a thermos"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01153.jpg"
	width="4000"
	height="2667"
	alt="Woman selling meat"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01159.jpg"
	width="4000"
	height="2667"
	alt="Mailboxes"
/>

<TextContent>
	<p>There are little shops everywhere, and people playing games on the street.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01165.jpg"
	width="4000"
	height="2667"
	alt="People playing games on the street"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01161.jpg"
		width="4000"
		height="2667"
		alt="Shops in Guangzhou"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01164.jpg"
		width="4000"
		height="2667"
		alt="Shops in Guangzhou"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01180.jpg"
		width="4000"
		height="2667"
		alt="Shops in Guangzhou"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01169.jpg"
	width="4000"
	height="2667"
	alt="Police bikes"
/>
<TextContent>
	<p>
		We finally made it to the temple, and just as we suspected, it resembles a lot of the other
		temples we've visited over the past few years ;)
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01173.jpg"
	width="4000"
	height="2667"
	alt="Shrine"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01170.jpg"
		width="2667"
		height="4000"
		alt="Pagode"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01172.jpg"
		width="4000"
		height="2667"
		alt="Shrine with gifts in front"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01174.jpg"
	width="4000"
	height="2667"
	alt="Temple garden"
/>
<TextContent>
	<p>
		Apparently, the goal is to throw a coin into the little hole at the top, something this person
		here took quite a few attempts to achieve.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01175.jpg"
		width="4000"
		height="2667"
		alt="Temple with insence"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01178.jpg"
		width="2667"
		height="4000"
		alt="Coin throwing"
	/>
</Panels>
<TextContent>
	<p>
		With our first couple of goals done for the day, it was time for lunch, and for once, I managed
		to snap a picture before we ate it all. After lunch, we headed to another park to sit down and
		relax in the hot and humid weather.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01181.jpg"
	width="4000"
	height="2667"
	alt="Paksoi with rice and meat dinner"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01182.jpg"
		width="4000"
		height="2667"
		alt="Walk next to a canal"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01185.jpg"
		width="4000"
		height="2667"
		alt="Place to rest in Guangzhou"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01183.jpg"
		width="4000"
		height="2667"
		alt="Lake in Guangzhou"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01187.jpg"
		width="4000"
		height="2667"
		alt="Lake in Guangzhou"
	/>
</Panels>
<TextContent>
	<p>
		The park was a bit of a let-down, and the air was getting more and more humid, a sign that rain
		was about to pour down. Time to get into the subway and head back to the hotel for a quick
		refresh.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01195.jpg"
	width="4000"
	height="2667"
	alt="Woman working in front of a shop"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01190.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01192.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01194.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01196.jpg"
	width="4000"
	height="2667"
	alt="Packing"
/>
<TextContent>
	<p>
		After a bit of relaxing and waiting for the rain to disappear, we headed back out again to take
		photos of the Canton tower.
	</p>
</TextContent>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01203.jpg"
	width="4000"
	height="2667"
	alt="Police vehicle"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01198.jpg"
		width="4000"
		height="2667"
		alt="Bridge"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01204.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou skyline"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01214.jpg"
	width="4000"
	height="2667"
	alt="Guangzhou tower"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01233.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou skyline"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01224.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou skyline"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01225.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou skyline"
	/>
</Panels>
