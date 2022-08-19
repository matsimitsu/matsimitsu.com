

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

<TextContent>
	<p>
		After another delicious breakfast, I set off to the rental car company. They upgraded me from a
		plain sedan to a Hybrid, which came in handy later on.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02369.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Location
	name="Kings Highway"
	height={340}
	zoom={5000}
	focus={true}
	center={[35, 31]}
	markers={postData.locations}
>
	<p>
		There are three ways to get from Amman to Petra; one is the Dead Sea highway. The name should be
		pretty self-explanatory.
	</p>

	<p>
		The second one is the Desert Highway, which is the fastest way between the two places and the
		most boring since it runs through the desert.
	</p>

	<p>
		The final road is the King's Highway, a road that has been followed before Jesus Christ was
		born. It's also the longest road and winds through valleys and small towns.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02375.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02377.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02384.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Kerak Castle</h2>
	<p>
		Kerak is a large crusader castle, and its construction began in the 1140s. Over time it changed
		hands a couple of times, and each new owner built new addons to the place.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02418.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02466.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02467.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02419.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02393.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02399.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02404.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02411.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02412.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent>
	<p>It's not super well maintained, but you can explore freely, including the inside.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02420.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02424.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02442.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02437.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02447.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02452.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02464.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02453.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<h2>Road to Petra</h2>
	<p>
		After Kerak, it was still a good 2 hours to the hotel near Petra, and daylight was fading
		quickly. The Jordan landscape at sunset is fantastic.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02471.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02475.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02474.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02477.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02478.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02483.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02485.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02501.jpg"
	width="4000"
	height="2667"
	alt=""
/>
