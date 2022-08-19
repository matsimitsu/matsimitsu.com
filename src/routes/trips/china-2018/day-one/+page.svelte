

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

<Location
	name="Amsterdam > Hong Kong"
	height={420}
	zoom={200}
	focus={true}
	center={[50, 30]}
	markers={postData.locations}
>
	<p>
		With just three hours to spare, our China visum finally arrived and we were ready to head to the
		airport. According to the Schiphol site it was supposed to be a busy day, but it took us only 10
		minutes from arriving to passing security.
	</p>
	<p>
		Our first flight was a short hop to Frankfurt from where we boarded their best plane (we think),
		an Airbus A340s.
	</p>
	<p>
		For the first time ever we paid an additional fee to reserve seats two weeks before the flight,
		this way we were sure to get the best economy seats on the plane. The flight itself was
		uneventfull and we arrived in HongKong at 16:00 the next day.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180501-00662-3.jpg"
	width="5999"
	height="2712"
	alt="Schiphol Airport"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180501-00663.jpg"
	width="6000"
	height="4000"
	alt="Lufthansa to Frankfurt"
/>

<TextContent>
	<h2>Hong Kong</h2>
	<p>
		First tings first, Onno needed a new phone so we headed to the Apple store in the central
		district.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00665.jpg"
	width="4314"
	height="3693"
	alt="Hong Kong apartments"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00667.jpg"
		width="6000"
		height="4000"
		alt="Fortress Hill station"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00669.jpg"
		width="6000"
		height="4000"
		alt="Great hopes make great men"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00668.jpg"
	width="6000"
	height="4000"
	alt="Times square"
/>
<TextContent>
	<p>
		After successfully buying a new iPhone, we got a bite to eat at CoCo's curry house (a Japanese
		curry chain). After dinner, we wandered around the area a bit before heading back to the hotel
		to catch up on some sleep.
	</p>
</TextContent>


<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one/5ae9c0f12a86920215035224.jpg"
	width="1100"
	height="733"
	alt="Hong Kong"
/>

<Panels>
	<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00671.jpg"
	width="6000"
	height="4000"
	alt="Hong Kong Tram"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00677.jpg"
	width="5803"
	height="3869"
	alt="Hong Kong Tram"
/>
</Panels>


<ResponsiveImage
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00673.jpg"
	width="6000"
	height="4000"
	alt="Hong Kong Apartments"
/>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00675.jpg"
	width="5924"
	height="2578"
	alt="Hong Kong streets"
/>
