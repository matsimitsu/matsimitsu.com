<script context="module">
	export const postData = {
		title: 'Day Six',
		subtitle: 'South Korea - North Korea (Panmunjeom) & N Seoul Tower',
		trip: 'asia-2014',
		startDate: new Date('2014-05-20'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3743.jpg',
			width: 2200,
			height: 1650,
			alt: 'Guards at the border between North and South Korea at the Joint Security Area'
		}
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Explanation from '$lib/Explanation.svelte';
</script>

<TripHeader {...postData} />

<TextContent>
	<p />
</TextContent>

<Location
	name="Panmunjeom (North Korea)"
	height={300}
	zoom={4000}
	focus={true}
	center={[127.024612, 37.5326]}
	markers={[
		{ lat: 37.5326, long: 127.024612, name: 'Seoul', textPosition: 'left' },
		{ lat: 37.954117, long: 126.6768167, name: 'Panmunjeom', textPosition: 'left' }
	]}
>
	<p>
		The amount of photo's from today will be very low. Most of the time we weren't allowed to take
		photos. And i also kinda forgot my memory cards...
	</p>
	<p>
		We got up very early (what else is new) to meet our driver who took us to the bus heading for
		the DMZ.
	</p>
	<p>
		We visited the No. 3 tunnel dug by the North Koreans to invade Seoul. After that we got lunch
		and headed for the DMZ. First stop: the Bridge.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3717.jpg"
	width="2200"
	height="1650"
	alt="Bridge to North Korea"
/>
<TextContent>
	<h2>The 3rd Infiltration Tunnel</h2>
	<p>There are mine warnings everywhere, best to stay on the marked paths.</p>
	<p>
		We got issued a helmet (wich is absolutely requried as a tall Dutch person, I bumped my head <i
			>so many times</i
		>) and you enter the tunnel that the North Koreans dug to South Korea. You venture in quite a
		long way and the guide explains what happened and how the tunnel was discovered.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3718.jpg"
	width="2200"
	height="1650"
	alt="Mine warnings"
/>

<TextContent>
	<h2>Dora Observatory</h2>
	<p>
		Next up was the <strong>Dora Observatory</strong>, from where you can.. observe North Korea.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3720.jpg"
	width="2200"
	height="1650"
	alt="Dora Observatory"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3719.jpg"
	width="2200"
	height="1650"
	alt="Dora Observatory"
/>

<TextContent>
	<h2>Dorasan Station</h2>
	<p>
		This is the most northern Railway station. And it was supposed to connect with the tracks to
		North Korea, but after South Korea built the station, nothing really happened.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3723.jpg"
	width="2200"
	height="1650"
	alt="Dorasan Station"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3725.jpg"
	width="2200"
	height="1650"
	alt="Train outside of Dorasan Station"
/>

<TextContent>
	<h2>The Joint Security Area</h2>
	<p>
		After countless ID clothing checks and always accompanied by guards, it was finally time to
		visit the famous blue buildings on the border of North and South Korea.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3743.jpg"
	width="2200"
	height="1650"
	alt="Guards at the Joint Security Area"
/>

<Explanation>
	<h2 class="text-left">Korean border tour</h2>
	<p>
		If you have the option I'd definitely recommend taking this tour to the border. It's a really
		weird experience that begins with lots of guard posts and barbed wire next to the river that you
		follow to the area.
	</p>
	<p>
		Then you start driving through narrow roads with huge concreate blocks at either side, rigged
		with explosives to block the road if North Korea happens to invade.
	</p>
	<p>
		You are guarded constantly and you have a set dress-code when you visit the area. No T-Shirts
		with big brands or any flashy clothes. Dress modest.
	</p>
	<p>
		They count the group more times than I can count and you get very clear instructions on what to
		do and when.
	</p>
	<p>
		The tour is dependent on the mood of the North Korean government and can be cancelled at any
		time, when tensions rise. This happened quite a lot in the past few years so you have to be
		lucky to get a spot on a tour that is not cancelled.
	</p>
	<p>It's an unique experience worth the daytrip.</p>
</Explanation>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3727.jpg"
		width="2200"
		height="1650"
		alt="Blue houses at the border with North Korea at the Joint Security Area"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3728.jpg"
		width="2200"
		height="1650"
		alt="Looking into North Korea from the blue houses at the Joint Security Area"
	/>
</Panels>
<TextContent>
	<p>Sand/Concrete is North Korea, gravel is South Korea.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3730.jpg"
	width="2200"
	height="1650"
	alt="The border between North and South Korea at the Joint Security Area"
/>

<TextContent>
	<p>The tour was at it's end and we headed back to Seoul, where we found a spot for dinner.</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3745.jpg"
	width="2200"
	height="1650"
	alt="Seoul streets"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3746.jpg"
	width="2200"
	height="1650"
	alt="Seoul streets"
/>

<TextContent>
	<h2>N-Seoul Tower</h2>
	<p>
		After a delicious dinner it was time for the final attraction of Seoul on this trip, the N Seoul
		Tower.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-_DSC0279.jpg"
	width="2200"
	height="1461"
	alt="Seoul streets at night"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-_DSC0284.jpg"
		width="2200"
		height="1461"
		alt="View from the N-Seoul tower"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-_DSC0300.jpg"
		width="2200"
		height="1461"
		alt="View from the N-Seoul tower"
	/>
</Panels>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-_DSC0334.jpg"
		width="2200"
		height="1461"
		alt="View from the N-Seoul tower"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2014/day-six/20140520-_DSC0360.jpg"
		width="1461"
		height="2200"
		alt="N-Seoul tower"
	/>
</Panels>
