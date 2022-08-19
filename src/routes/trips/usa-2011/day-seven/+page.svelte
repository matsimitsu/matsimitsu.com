

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
		After a good night's sleep we were on our way to our second National park, named Arches National
		Park, but not before corssing into UTAH with it's beautiful desert-like scenery.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0231.jpg"
	width="2200"
	height="1461"
	alt="US Highway with truck passing, in Utah"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0224.jpg"
		width="2200"
		height="1461"
		alt="Utah scenery on the way to Moab"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0226.jpg"
		width="2200"
		height="1461"
		alt="Utah scenery on the way to Moab"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0233.jpg"
	width="2200"
	height="1461"
	alt="View in rear-view mirror, showing Utah Highway"
/>

<TextContent>
	<p>
		After a couple of hours the landscape began to change from flat-ish desert to more Rock-like
		formations, a sign we were getting closer to the park.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0242.jpg"
	width="2200"
	height="1461"
	alt="View of the road leading up to Arches Nat. Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0243.jpg"
	width="2200"
	height="1461"
	alt="View of rock near Arches Nat. Park"
/>

<TextContent>
	<p>
		A couple of kilometers before the park there's a little pull-out with a small church, and more
		amazing views, which we decided to explore.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0252.jpg"
	width="2200"
	height="1461"
	alt="Small church near Arches Nat. park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0249.jpg"
	width="2200"
	height="1461"
	alt="View of rock near Arches Nat. Park"
/>

<Location
	name="Arches National Park"
	height={320}
	zoom={600}
	focus={true}
	center={[-100.613953, 38.477791]}
	markers={[
		{ lat: 40.7128, long: -74.006, name: 'New York', textPosition: 'left' },
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 38.7331, long: -109.5925, name: 'Arches Nat. Park', textPosition: 'left' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' }
	]}
>
	<p>
		The United States have many great national parks and the state of Utah happens to have a coulpe
		of the highlight parks.
	</p>
	<p>
		The main parks almost everyone on a east-west roadtrip visits are <strong
			>Arches National Park</strong
		>, <strong>Bryce Canyon National Park</strong>, <strong>Zion National Park</strong> and
		<strong>Canyonlands National Park</strong>.
	</p>
	<p>
		The park tour starts with a bang, beautiful views of spectacular rock formations just around the
		first bend after climbing a big hill.
	</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0310.jpg"
	width="2200"
	height="1461"
	alt="View of stones in Arches Nat. Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0311.jpg"
		width="1461"
		height="2200"
		alt="View in Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0312.jpg"
		width="1461"
		height="2200"
		alt="Rock in Arches Nat. Park"
	/>
</Panels>
<TextContent>
	<p>
		Making our way down into the flats, there were lots of pull-outs from the main route with great
		views.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0320.jpg"
	width="2200"
	height="1461"
	alt="Scenery in Arches Nat. Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0321.jpg"
		width="2200"
		height="1461"
		alt="Landscape scenery in Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0322.jpg"
		width="2200"
		height="1461"
		alt="Landscape scenery with a large rock in Arches Nat. Park"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-panorama2.jpg"
	width="2200"
	height="686"
	alt="Panorama of scenery in Arches Nat. Park"
/>
<TextContent>
	<h2>Ancient Sand Dunes</h2>
	<p>
		Names of things in the park are generally pretty grand, such as this view of the Ancient Sand
		Dunes
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0337.jpg"
	width="2200"
	height="1461"
	alt="Scenery showing little vegetation in Arches Nat. Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0339.jpg"
		width="2200"
		height="1461"
		alt="Information sign of Ancient Sand Dunes in Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0342.jpg"
		width="1461"
		height="2200"
		alt="Vertical boulders in Arches Nat. Park"
	/>
</Panels>

<TextContent>
	<p>In the distance we could finally see our first Arches.</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0345.jpg"
	width="2200"
	height="1461"
	alt="View of arches in Arches Nat. Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0347.jpg"
		width="2200"
		height="1461"
		alt="View of balancing boulder in Arches Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0359.jpg"
		width="2200"
		height="1461"
		alt="Vertical rock in Arches Nat. Park"
	/>
</Panels>

<TextContent>
	<p>
		True to our American way of visiting parks on this trip we didn't venture far from our car,
		missing out on some truely spectacular views. Luckly I was able to make it up on future trips.
		Always explore the area around the viewpoints, folks!
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0364.jpg"
	width="2200"
	height="1461"
	alt="Arch in Arches Nat. Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0366.jpg"
	width="2200"
	height="1461"
	alt="Arch in Arches Nat. Park"
/>

<TextContent>
	<p>We took a side-road down to the valley floor where we spotted some local critters.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0392.jpg"
	width="2200"
	height="1318"
	alt="Lizzard/Gekko in Arches Nat. Park"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0395.jpg"
	width="2200"
	height="1461"
	alt="Desert view in Arches Nat. Park"
/>

<TextContent>
	<h2>Dead Horse Point State Park</h2>
	<p>
		Across from Arches is a lesser known park, called Dead Horse Point State Park. It's still quite
		a trip from the road leading up to Arches climbing pretty steeply all the way. At the end is a
		parking spot and a restaurant almost hanging over the cliff where we got some coffee to
		energize.
	</p>
	<p>
		It is worth the trouble, though as once you're up there, the views are <strong>amazing</strong>.
		I highly recommend the detour!
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0423-Edit.jpg"
	width="2200"
	height="715"
	alt="View of the Colorado river in Dead Horse Point State Park"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0437.jpg"
		width="1461"
		height="2200"
		alt="View of the Colorado river in Dead Horse Point State Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0453.jpg"
		width="2200"
		height="1461"
		alt="View of the Colorado river in Dead Horse Point State Park"
	/>
</Panels>
<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0428-Edit.jpg"
	width="2200"
	height="856"
	alt="Panoramic view of the Colorado river in Dead Horse Point State Park"
/>
