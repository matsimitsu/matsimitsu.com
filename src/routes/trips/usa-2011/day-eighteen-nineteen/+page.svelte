

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		After going to a car museum in Reno (I don't have any photo's from there. I can't remember if it
		wasn't allowed or I just didn't take any), we headed north towards the northern city of <strong
			>Portland</strong
		>.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0906.jpg"
	width="2200"
	height="1461"
	alt="View of rural Oregon countryside"
/>

<Location
	name="Crater lake"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={[
		{ lat: 42.9446, long: -122.109, name: 'Crater lake' },
		{ lat: 45.5051, long: -122.675, name: 'Portland' },
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' },
		{ lat: 39.5296, long: -119.8138, name: 'Reno' }
	]}
>
	<p>
		About half-way between Reno and Portland lies a beautiful lake called <strong
			>Crater lake</strong
		>. And you guessed it, it's a lake formed from a crater.
	</p>
	<p>
		From the desert heat in Las Vegas and Death Valley, we went through the beautiful green
		mountains of Yosemite National Park, only to end up in the snow once again around the lake.
	</p>
	<p>Around the lake are a couple of viewpoints from where you can admire the lake.</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0919-Pano.jpg"
	width="2200"
	height="1016"
	alt="Crater lake"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0927.jpg"
		width="2200"
		height="1461"
		alt="Crater lake"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0929-Pano.jpg"
		width="2200"
		height="1073"
		alt="Crater lake"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0943-Pano.jpg"
	width="2200"
	height="1060"
	alt="Crater lake"
/>
<TextContent>
	<p>There are a ton of squirrels around the viewpoints hunting for that delicious human food.</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0931.jpg"
		width="2200"
		height="1461"
		alt="Squirrel at Crater Lake"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0932.jpg"
		width="2200"
		height="1461"
		alt="Squirrel at Crater Lake"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0948.jpg"
		width="1461"
		height="2200"
		alt="Squirrel at Crater Lake"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0951.jpg"
	width="2200"
	height="1461"
	alt="Crater lake"
/>

<TextContent>
	<h2>Oregon mountains</h2>
	<p>From the lake we made our way up to Portland, where we spend the night.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0959-Pano.jpg"
	width="2200"
	height="726"
	alt="Mt. Hood"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0969.jpg"
	width="2200"
	height="1547"
	alt="Oldtimer"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0970.jpg"
		width="2200"
		height="1461"
		alt="Oregon mountains"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0973.jpg"
		width="1461"
		height="2200"
		alt="River or stream in Oregon"
	/>
</Panels>

<TextContent>
	<h2>Portland</h2>
	<p>
		The next day we took a Jetboat from <strong>Portland</strong> to
		<strong>Willamette Falls</strong> that you can recognise from several movies and tv shows. They told
		us you might get wet and that was no exaggeration, we were soaked after just a few hundred meters.
		I don't think I brougth a camera that day, so no photos.
	</p>
	<p>The next day we headed to the coast, to find the famous Highway One.</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110721-IMG_01181.jpg"
			width="2200"
			height="1650"
			alt="Beach at Oregon"
		/>
	</PhonePic>
</TextContent>
