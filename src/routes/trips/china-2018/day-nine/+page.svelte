

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Location from '$lib/Location.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />
<TextContent>
	<p>
		After a good night's sleep in a nice hotel, we wandered the neighborhood for a bit in search of
		coffee.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01239.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01247.jpg"
		width="4000"
		height="2667"
		alt="Mailboxes"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01242.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou"
	/>
</Panels>
<Location
	name="Guangzhou > Guilin"
	height={360}
	zoom={1000}
	focus={true}
	center={[114, 22]}
	markers={postData.locations}
>
	<p>
		It's time to head to the next city on our list, Guilin, which involves taking the high-speed
		train.
	</p>
	<p>
		High-speed train travel works more like a flight instead of a train ride in China. You have to
		check-in, then go to the "gate" and wait there until the train arrives. Only then will you be
		allowed access to the platforms and board your train.
	</p>
	<p>
		At your destination your ticket will be checked again and you can only exit the station if your
		ticket's destination is correct.
	</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01258.jpg"
	width="4000"
	height="2777"
	alt="Guangzhou railway station"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01259.jpg"
		width="4000"
		height="2667"
		alt="Guangzhou railway station"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01271.jpg"
		width="4000"
		height="2667"
		alt="China High Speed Rail Trains"
	/>
</Panels>

<TextContent>
	<h2>Guilin</h2>
	<p>
		Around 17:00, we arrived at our hotel in Guilin, and after waiting out most of the heavy rain
		for a couple of hours, we headed out to get dinner, in this case, Korean BBQ.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01276.jpg"
		width="4000"
		height="2667"
		alt="Guilin streets"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01272.jpg"
		width="4000"
		height="1617"
		alt="Korean BBQ"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01286.jpg"
	width="4000"
	height="2667"
	alt="Guilin Pagodes"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01277.jpg"
		width="4000"
		height="2667"
		alt="Guilin streets"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01289.jpg"
		width="4000"
		height="3806"
		alt="Guilin Crossing"
	/>
</Panels>
