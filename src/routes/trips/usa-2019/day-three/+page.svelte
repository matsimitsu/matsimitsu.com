

<script>
  import TextContent from '$lib/TextContent.svelte';
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import Panels from '$lib/Panels.svelte';
  import Map from '$lib/Map.svelte';
  import Explanation from '$lib/Explanation.svelte';
  import Location from '$lib/Location.svelte';
  import TripHeader from '$lib/TripHeader.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Location
	name="Hoover Dam"
	height={220}
	zoom={1000}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={postData.locations}
>
<p>After a nice breakfast at the Stratosphere hotel we headed for our first destination of the trip, the Hoover dam.</p>
<p>Built between 1931 and 1936, the Hoover dam provides two states with power and provides Las Vegas with water, though the drought recently did drop the water in Lake Mead quite a bit.</p>
</Location>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00454.jpg"
  width="2200"
  height="1467"
  full
/>
<Panels>
  <ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00416.jpg"
  width="2200"
  height="1467"

/>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00429.jpg"
  width="1467"
  height="2200"

/>

</Panels>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00451-2.jpg"
  width="2200"
  height="1467"

/>
<TextContent><p>It was 40+ degrees celcius and in the full sun we were happy to get back to the airconditioned car and head to the next destination.</p>
  <h2>Grand Canyon, South Rim, AZ</h2>
  <p>During the drive up to the Canyon you have no idea of the amazing views that lay ahead. Nothing gives any hint, you just drive through slightly hilly countryside and suddenly you end up at the National park and are greeted with this amazing view.</p></TextContent>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00639.jpg"
  width="2200"
  height="1467"
  full
/>
<Panels>
  <ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00635.jpg"
  width="2200"
  height="1467"

/>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00631.jpg"
  width="2200"
  height="1467"

/>
</Panels>

<TextContent><p>We took a (free) shuttle bus to Hopi point, that has one of the best views of the canyon and made our way back to the canyon village on foot, following the South Rim.</p></TextContent>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00596.jpg"
  width="2200"
  height="1467"

/>
<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00473.jpg"
  width="2200"
  height="1467"
  full
/>
<Panels>
  <ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00532.jpg"
  width="2200"
  height="1467"

/>

<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00657.jpg"
  width="2200"
  height="1467"

/>
</Panels>
<ResponsiveImage
  src="https://cdn.matsimitsu.com/usa-2019/day-three/DSC00535.jpg"
  width="2200"
  height="1467"
  full
/>
