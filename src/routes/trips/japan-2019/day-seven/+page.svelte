

<script>
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Location
	name="Teamlab Borderless"
	height={250}
	zoom={1000}
	focus={true}
	center={[139.7831051, 35.6263868]}
	markers={postData.locations}
>
<p>
  The weather forecast wasn&#39;t great and when we stepped outside of the hotel it was raining
  extremely hard. Even armed with umbrella&#39;s our legs were soaked in minutes. This meant we
  had to find indoor stuff to do.
</p>

<p>
  Luckily Tokyo had us covered and we went to the Teamlab Borderless exhibition. I was there last
  year as well, but I don&#39;t mind going again, it&#39;s still as amazing as the first time.
</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00172.jpg"
	width="2200"
	height="1398"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00174.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00175.jpg"
		width="2200"
		height="1000"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00185.jpg"
	width="2200"
	height="1467"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00186.jpg"
	width="2200"
	height="1094"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00193.jpg"
	width="2200"
	height="1780"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00194.jpg"
		width="2200"
		height="1467"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00217.jpg"
		width="2200"
		height="1467"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00210.jpg"
	width="2200"
	height="1467"
	full
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2019/day-7/DSC00211.jpg"
	width="2200"
	height="1467"
/>
