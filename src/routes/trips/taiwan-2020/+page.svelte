<script>
	import Map from '$lib/Map.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import TextContent from '$lib/TextContent.svelte';
	import Location from '$lib/Location.svelte';

	export let data = {};
	const { tripData } = data;
</script>

<TripHeader {...tripData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<TextContent>
	<p>
		Talk about last-minute, just two days before the planned trip I whipped out the credit card and
		purchased a flight to Taipei with KLM. With everything going on in China (Corona virus) I
		decided to wait until the last moment before deciding to go or not.
	</p>
	<p>
		The flight was about two-thirds full and I didn&#39;t have any neighbours. This gave me the
		luxury to sleep lying down across a row of 3 chairs.
	</p>
</TextContent>

<Location
	name="Taiwan"
	height={600}
	zoom={5000}
	focus={true}
	center={[120.673645, 24.147736]}
	markers={tripData.locations}
>
	<p>
		I've been in Taiwan once before, on my <a href="/trips/asia-2016">Asia 2016 trip</a>, but that
		was just a short lay-over in <strong>Taipei</strong>, the capital city of Taiwan.
	</p>
	<p>
		This time the plan is to circle the island, starting at <strong>Taichung</strong>, a city south
		of Taipei.
	</p>
	<p>
		The next logical step would be Alishan, which is further down the country, but instead I drove
		(by train) right past it to <strong>Tainan</strong>, where I visited a Dutch fort.
	</p>
	<p>
		The reason for bypassing <strong>Alishan</strong> was timing, I wanted to visit Alishan during a
		weekday so it would be less crowded. So back north it was, to Alishan.
	</p>
	<p>
		From Alishan I went back down again to <strong>Kaohsiung</strong>, a large city in the south of
		the country.
	</p>
	<p>
		At this point it was back up north to Taipei, but this time on the east coast of the country,
		stopping over at the beautiful <strong>Taroko Gorge</strong>, before reaching
		<strong>Taipei</strong>strong again.
	</p>
</Location>

<TextContent>
	<p>
		At Taipei airport you had to fill out a health declaration wich they check two times and keep.
		You also pass the, now common in asia, temperature check and there are plenty of notices telling
		you to wash your hands and wear a mask if you have a cough.
	</p>
	<p>
		From the airport I took a 2-hour bus to Taichung where I arrived at about eight in the evening.
		After a quick 7-Eleven for water it was time for sleep.
	</p>
</TextContent>
