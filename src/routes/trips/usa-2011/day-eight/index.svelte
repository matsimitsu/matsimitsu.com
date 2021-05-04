<script context="module">
	export const postData = {
		title: 'Day eight',
		subtitle: 'Bryce Canyon',
		trip: 'usa-2011',
		startDate: new Date('2011-07-11'),
		image: {
			src: 'https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0527.jpg',
			width: 2200,
			height: 1461,
			alt: 'Far view of Bryce Canyon National Park'
		}
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	import Explanation from '$lib/Explanation.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		I'll be honest, the details are a bit hazy after all these years. I didn't to a great job of
		journaling this trip when I made it and due to camera time settings and timezones it's tricky to
		determine what was visited on which day.
	</p>
	<p>
		I <i>think</i> it was day eight when we visited Bryce Canyon, but it could also have been the second
		park on the seventh day ¯\_(ツ)_/¯.
	</p>
	<p>
		The weather wasn't super great, with lots of cloud and rain every now and then. Luckily we stuck
		to our ways and never wandered far from the viewpoints.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0457.jpg"
	width="2200"
	height="1461"
	alt="Road leading up to Bryce Canyon, stuck behind a CruiseAmerica camper"
/>

<Location
	name="Bryce Canyon National Park"
	height={300}
	zoom={800}
	focus={true}
	center={[-110.613953, 37.477791]}
	markers={[
		{ lat: 39.7392, long: -104.9903, name: 'Denver' },
		{ lat: 38.7331, long: -109.5925, name: 'Arches Nat. Park', textPosition: 'left' },
		{ lat: 37.593, long: -112.1871, name: 'Bryce Canyon Nat. Park' },
		{ lat: 36.1699, long: -115.1398, name: 'Las Vegas' }
	]}
>
	<p>
		As before, the main parks almost everyone on a east-west roadtrip visits are <strong
			>Arches National Park</strong
		>, <strong>Bryce Canyon National Park</strong>, <strong>Zion National Park</strong> and
		<strong>Canyonlands National Park</strong>.
	</p>
	<p>
		Today was the day of Bryce Canyon National Park. It's is such a weird place. You drive through a
		flat valley for what seems ages and there's just no way that this valley can hide what
		eventually are the views of the canyon.
	</p>
	<p>But it does, and when you finally get there, the views are amazing!</p>
</Location>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-panorama4.jpg"
	width="2200"
	height="614"
	alt="Panorama of Bryce Canyon"
/>

<Explanation>
	<p>
		Just a heads up, I just discovered you could take Panorama photos by just bursting a ton of
		photos and let Photoshop figure it out.
	</p>
	<p>
		I wish I hadn't learned that, because most photos at the viewpoint now consist of tons of
		vertical photo bursts with no straight horizon whatsoever. So enjoy the letterbox Panorama
		photos :P.
	</p>
</Explanation>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-panorama5.jpg"
	width="2200"
	height="968"
	alt="Panorama of Bryce Canyon National Park"
/>

<TextContent>
	<p>
		Well I did <i>try</i> to frame the photo's ;)
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0492.jpg"
	width="2200"
	height="1461"
	alt="Framing a view of Bryce Canyon National Park"
/>

<TextContent>
	<p>
		The main route through the park takes you along the rim and every couple of hundred meters
		there's a new viewpoint with a completely different view of the valley.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0498-Pano.jpg"
	width="2200"
	height="1209"
	alt="scenic view of Bryce Canyon National Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0508.jpg"
		width="1461"
		height="2200"
		alt="Dead tree in Bryce Canyon National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0509.jpg"
		width="1461"
		height="2200"
		alt="Valley view in Bryce Canyon National Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0505.jpg"
	width="2200"
	height="1461"
	alt="scenic view of Bryce Canyon National Park"
/>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0530-Pano.jpg"
	width="2200"
	height="1028"
	alt="Bryce Canyon National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0527.jpg"
	width="2200"
	height="1461"
	alt="Far view of Bryce Canyon National Park"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0523.jpg"
		width="1461"
		height="2200"
		alt="View of rock arch in Bryce Canyon National Park"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0537.jpg"
		width="1461"
		height="2200"
		alt="Bryce Canyon National Park"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0539.jpg"
	width="2200"
	height="1461"
	alt="Bryce Canyon National Park"
/>

<TextContent>
	<p>Ah, right we also saw some deer near the road on our way back!</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0546.jpg"
	width="2200"
	height="1461"
	alt="Bryce Canyon National Park"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0549-Pano.jpg"
	width="2200"
	height="1205"
	alt="Bryce Canyon?"
/>

<TextContent>
	<p>
		In our hotel/inn that evening we were watching TV and suddenly there was this horrendous noise,
		wich turned out to be the Emergency Alert sytem notifying us of flood warnings. Pretty neat to
		have experienced that without some bigger disaster.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-IMG_0067.jpg"
			width="2200"
			height="1650"
			alt="Emergency Alert System flood warning"
		/>
	</PhonePic>
</TextContent>
