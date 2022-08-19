

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

<TextContent
	><p>
		We started the day with some fun in the nearby dunes, we rented a bunch of &quot;Quads&quot; and
		drove around for a couple of hours before heading to Los Angeles, a city I&#39;ve avoided on all
		previous trips, mostly because of the stories about everyone always being stuck in traffic.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/quad2.jpg"
		width="1600"
		height="1200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/quad.jpg"
		width="1600"
		height="1200"
	/>
</Panels>

<Location
	name="Hollywood"
	height={300}
	zoom={2000}
	focus={true}
	center={[-118.4685631, 33.9796472]}
	markers={postData.locations}
>
	<p>
		Our hotel was located in Hollywood. Fun fact there are two Travelodge&#39;s in Hollywood, make
		sure you set your navigation to the right one ;). We arrived pretty late and after delicous
		Burrito&#39;s we headed to bed.
	</p>
	<p>
		The next morning we all installed the Scoot app on our phones, this allows you to unlock one of
		the 30.000 &quot;scooters&quot; (electric steps) that are placed all around LA. With the scooter
		unlocked we drove north towards Hollywood Boulevard.
	</p>
</Location>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/scooter1.jpg"
		width="1651"
		height="2200"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09767.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><h2>Venice Beach</h2>
	<p>
		After wandering around the boulevard (quite touristy), we dove into the metro station and took
		the metro downtown and transferred to the lightrail towards Venice Beach.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09768.jpg"
	width="2200"
	height="1467"
/>
<TextContent><p>We were greeted by the Pier, which is the end of Route 66.</p></TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09772.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09770.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09777.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09773.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09778.jpg"
	width="2200"
	height="1467"
/>
<TextContent
	><p>
		From the pier we headed to the beach, attempting to walk our way to &quot;Muscle beach&quot;,
		but we soon found out it was a lot further than we thought, so out came the phones and scooters
		were unlocked again. Crossing through the back-alleys of the beach we finally arrived at
		&quot;Muscle beach&quot;, where the people work out, only to find out it was closed for
		renovation. Fortunately there was plenty of other stuff to see around there.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09795.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09793.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		Event the trees have graffiti here and the local Police force shot some hoops with the locals.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09794.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09789.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09786.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09792.jpg"
	width="2200"
	height="1467"
	full
/>
<TextContent
	><p>
		After spending some time on the beach we had the great idea to go back by scooter. The route was
		through some semi-questionable neighbourhoods, but the weather was nice and the scooters were
		fun, so what the heck. Nearly an hour later and and some encouragement from the locals underway
		we made it back to our hotel.
	</p></TextContent
>
