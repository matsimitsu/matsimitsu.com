<script context="module">
	export const postData = {
		title: 'AMS ✈️ NRT',
		subtitle: 'Flying from Amsterdam to Tokyo',
		trip: 'japan-2018',
		startDate: new Date('2018-10-31'),
		endDate: new Date('2018-11-01'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdcf8cf2a86927dd4423009.jpg',
			width: '4369',
			height: '4000',
			alt: ''
		},
		locations: [
			{
				lat: 52.377956,
				long: 4.89707,
				name: 'Amsterdam'
			},
			{
				lat: 60.192059,
				long: 24.945831,
				name: 'Helsinki'
			},
			{
				lat: 35.652832,
				long: 139.839478,
				name: 'Tokyo',
				textPosition: 'left'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad4be2a86927dd4422fe9.jpg"
	width="6000"
	height="4000"
/>

<Location
	name="Tokyo, Japan"
	height={240}
	zoom={200}
	focus={true}
	center={[80, 40.6263868]}
	markers={postData.locations}
>
	<p>
		It&#39;s 07:00 when my alarm goes of, time to get up and head to the airport where I&quot;ll be
		flying to Tokyo through Helsinki with Finnair and Japan Airlines.
	</p>
	<p>
		After arriving in Narita airport a good 15 hours later, I headed to my hotel and set out to get
		the basic trip supplies such as a data simcard and coffee in Ikebekuro a few train stops away
		from my hotel.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad5042a86927dd4422ff2.jpg"
		width="4705"
		height="3137"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad50a2a86927dd4422ff3.jpg"
		width="4000"
		height="6000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad53c2a86927dd4422fff.jpg"
		width="6000"
		height="4000"
	/>
</Panels><TextContent
	><h2>Sugamo, Toshima, Tokyo</h2>
	<p>
		On the way back I decided not to take the train but walk through the neighbourhoods and it
		wouldn&#39;t be Japan if you don&#39;t stumble upon a temple every now and then.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad5222a86927dd4422ffb.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad5222a86927dd4422ffa.jpg"
		width="4000"
		height="6000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad5272a86927dd4422ffd.jpg"
		width="6000"
		height="4000"
	/>
</Panels><ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdad5272a86927dd4422ffc.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		After a short nap I wandered around the neighbourhood and found myself in an alley near a temple
		where they had all kinds of stalls with street food. Due to the jetlag I wasn&#39;t keen on
		getting a full dinner so these <em>Takoyaki</em> (octopus ball) were perfect!
	</p></TextContent
>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdaf0162a86927dd4423003.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdaf0162a86927dd4423004.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
