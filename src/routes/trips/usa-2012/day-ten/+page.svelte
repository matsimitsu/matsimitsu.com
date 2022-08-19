

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
		After Arches it was time for the next park: <strong>Bryce Canyon</strong>. Again details are a
		bit hazy as I write this about nine years later, but it was either on the same day, or the next.
		I really can't remember.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0550.jpg"
	width="2200"
	height="1461"
	alt="View through dirty windscreen of Utah landscape"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0538.jpg"
		width="2200"
		height="1461"
		alt="Utah landscape"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0540.jpg"
		width="2200"
		height="1461"
		alt="Utah landscape"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120615-_DSC0779.jpg"
	width="2200"
	height="1461"
	alt="Sign of Bryce Canyon National park"
/>

<Location
	name="Bryce Canyon National Park"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 38.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 37.593, long: -112.1871, name: 'Bryce Canyon Nat. Park' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' }
	]}
>
	<p>
		Where we only stopped at the viewpoints for a quick look last year. (well not entirely true we
		did do some small hikes).
	</p>
	<p>
		This time we took a trail to the bottom of the valley, where you can walk in between the rock
		formations. Really cool!
	</p>
	<p>
		It was super hot and we weren't really prepared for the trek, so no backpackes with drinks or
		anything. Luckily the trek was only about an hour-hour and a half before we were back at the car
		for refreshments.
	</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0561-Pano.jpg"
	width="2200"
	height="933"
	alt="Panorama of Bryce Canyon Nat. Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0595.jpg"
		width="1461"
		height="2200"
		alt="Bottom of Bryce Canyon Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0607.jpg"
		width="1461"
		height="2200"
		alt="Bottom of Bryce Canyon Nat. Park"
	/>
</Panels>

<TextContent>
	<p>
		It's hard to imagine from the top that there's an actual trail through valley, but once you head
		down to the valley floor, you get a whole different view of the rock formations, amazing.
	</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0576.jpg"
	width="2200"
	height="1461"
	alt="View of "
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0581.jpg"
		width="1461"
		height="2200"
		alt="View down to the bottom of Bryce Canyon Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0575.jpg"
		width="2200"
		height="1461"
		alt="View of Bryce Canyon Nat. Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0589.jpg"
	width="2200"
	height="1461"
	alt="Rock formation at Bryce Canyon Nat. Park"
/>
<TextContent>
	<p>
		It's hard to capture the scale of where you're walking. A desire for a wide-angle lens was born
		that day.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0630.jpg"
		width="1461"
		height="2200"
		alt="Bryce Canyon Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0675.jpg"
		width="1461"
		height="2200"
		alt="Bryce Canyon Nat. Park"
	/>
</Panels>

<TextContent>
	<p>
		Dealing with the light in Utah is tricky everyting becomes too yellow and green quickly,
		something I still haven't mastered correcting yet.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0635.jpg"
	width="2200"
	height="1461"
	alt="Bryce Canyon Nat. Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0658.jpg"
		width="2200"
		height="1461"
		alt="Bryce Canyon Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0649.jpg"
		width="1461"
		height="2200"
		alt="Dead tree at Bryce Canyon Nat. Park"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0642.jpg"
	width="2200"
	height="1461"
	alt="Bryce Canyon Nat. Park"
/>

<TextContent>
	<p>
		What goes down must unfortunately also make it's way back up, which was quite the exercise in
		the heat, but we made it! The next couple of viewpoints were done by car only :)
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0672.jpg"
		width="1461"
		height="2200"
		alt="Bryce Canyon Nat. Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120615-_DSC0684.jpg"
		width="2200"
		height="1461"
		alt="Bryce Canyon Nat. Park"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-ten/20120615-_DSC0732-Pano.jpg"
	width="2200"
	height="680"
	alt="Panorama of Bryce Canyon Nat. Park"
/>
