

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Location
	name="Chiang Mai, Thailand"
	height={360}
	zoom={400}
	focus={true}
	center={[98.979263, 18.796143]}
	markers={postData.locations}
>
	<p>It's been a week since I've flown to Chiang Mai in the northern part of Thailand.</p>
	<p>
		The goal was to find a nice hotel and a co-working space to work together with my colleague in
		Thailand for the next couple of weeks.
	</p>
	<p>
		Before and after work, we wandered around the city, but taking photos was not really a priority,
		so the amount of photos taken this week is relatively low.
	</p>
	<p>Here's a collection of what I encountered this week.</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04514.jpg"
		width="4000"
		height="2281"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04516.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>Around the various squares in the city, you can find the skater-youth performing tricks.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04528.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04523.jpg"
		width="4000"
		height="2964"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04543.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04531.jpg"
		width="3764"
		height="2874"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04553.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04557.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220523-04558.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		One night, after a long day of work, we headed to the north of the city center to scout out a
		nice area where we'll maybe book a hotel room for a couple of days.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04560.jpg"
	width="4000"
	height="2667"
	alt=""
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04561.jpg"
		width="4000"
		height="2846"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04568.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04570.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04572.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220525-04574.jpg"
		width="2870"
		height="3166"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		The next day, I visted a temple, only to realise half-way through that I'd seen it before on the
		last trip. D'oh!
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04578.jpg"
		width="2410"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04582.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04596.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04583.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04584.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04597.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04593.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		Street food is everywhere in the city. From "food trucks", to little carts and stalls to
		road-side huts, and they all have one thing in common, it's probably delicious!
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04599.jpg"
		width="4000"
		height="3045"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04600.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>
		One day, on my way back from the co-working space, the central square was cordoned off, and a
		gathering took place.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04602.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04608.jpg"
		width="2472"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220526-04613.jpg"
	width="4000"
	height="3484"
	alt=""
/>

<TextContent>
	<p>
		On another nightly wander around the city we visited yet another nightmarket. (There are many,
		every evening).
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04622.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04624.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04628.jpg"
		width="2696"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04634.jpg"
		width="3079"
		height="3701"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04637.jpg"
		width="2473"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04656.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04648.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04649.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04650.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220527-04653.jpg"
	width="4000"
	height="2830"
	alt=""
/>

<TextContent>
	<p>
		On Saturday we rented a private driver and headed out of the city to do some Ziplining and
		visiting a few towns in the area.
	</p>
	<p>We started with a visit to a botanical garden, which was nice, but it was hot :)</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04674.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04660.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04669.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04675.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<h2>Baan Mae Kampong</h2>
	<p>
		After ziplining (where I didn't take photo's), we headed to Baan Mae Kampong village, for a nice
		lunch next to a stream.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04677.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04680.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04681.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04687.jpg"
		width="4000"
		height="2667"
		alt=""
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04682.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>There was a waterfall nearby.</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04695.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04703.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04712.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<p>And on our way back we hit a local viewpoint.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04719.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04729.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04726.jpg"
	width="4000"
	height="2667"
	alt=""
/>
