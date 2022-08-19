

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
	name="Zion National Park"
	height={200}
	zoom={1000}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
	<p>
		We had no real plan today, other than to head to Zion National Park, which was an hour or so
		away from the hotel.
	</p>
	<p>
		During breakfast we decided to not do the &quot;Angels Landing&quot; hike, that pretty much
		everyone does, but to take another hike on the opposite side of the park.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01015.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01029.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<TextContent
	><p>
		The description said it would take about 3 hours to complete and it&#39;s a total of 12
		Kilometers.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01016.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01026.jpg"
	width="2200"
	height="1495"
/>
<TextContent
	><p>
		The hike is not really difficult, but the 30+ degrees weather and full sunshine makes a lot
		harder.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01033.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01036.jpg"
		width="2200"
		height="1467"
	/>
</Panels>

<TextContent
	><p>
		You are rewarded with amazing views over the park at the end. We enjoyed it with a late lunch
		and after a few more photo&#39;s we headed back to the car to head to St. George where we will
		stay the night.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01054.jpg"
	width="2200"
	height="1467"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01066.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01084.jpg"
		width="1467"
		height="2200"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01073.jpg"
	width="2200"
	height="1467"
	full
/>
