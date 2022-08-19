

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
		We flew from Schiphol Airport (AMS) to Newark Liberty International Airport (EWR) in New Jersey.
		We had an airbnb on the Jersey side of the Hudson river, and we hopped the hudson every day with
		the PATH subway.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120604-IMG_07822.jpg"
			width="2200"
			height="1650"
			alt="View of airbridge at Schiphol airport"
		/>
	</PhonePic>
	<p>
		No friends with uncles that could get us cheap flights this time. It was a trip on a KLM
		airplane, back in a time where In Flight Entertainment wasn't a given yet. Unfortutely the
		screen at the bulkhead didn't do us much good either.
	</p>
	<PhonePic>
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120604-IMG_07862.jpg"
			width="1650"
			height="2200"
			alt="Blocking the view"
		/>
	</PhonePic>
</TextContent>

<TextContent>
	<h2>New York City</h2>
	<p>
		The first few days were spend wandering around New York City, with no clear plan. Just getting
		good food and enjoying the views.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120605-IMG_0801.jpg"
		width="2200"
		height="1650"
		alt="View down a New York Avenue"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120605-IMG_0797.jpg"
		width="1650"
		height="2200"
		alt="Freedom tower under construction"
	/>
</Panels>

<TextContent>
	<h3>Top of the Rock</h3>
	<p>
		A must-do in New York is Top of the Rock. I think it gives a better view of New York than the
		Chrystler building and the NBC store at the bottom is nice to get some Community swag.
	</p>
</TextContent>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120128-new_york_panorama.jpg"
	width="2200"
	height="875"
	alt="New York panorama from Top of the Rock"
/>

<TextContent>
	<h3>Times Square</h3>
	<p>
		Hated by locals, loved by tourists. Still it's fun to visit Times Square every once in a while.
		Even if it's just to check if the people in Elmo costumes are still there.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120606-IMG_0834.jpg"
		width="2200"
		height="1650"
		alt="View of Times Square"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120606-IMG_0837.jpg"
		width="2200"
		height="1650"
		alt="View of Times Square"
	/>
</Panels>

<TextContent>
	<h3>Yankee Stadium</h3>
	<p>
		At the end of the day we took a subway to Harlem, towards Yankee Stadium. We had no issues
		figuring out what train to take as the ones heading to the stadium were packed with Yankee fans
		in full kit.
	</p>
	<p>
		We enjoyed a nice baseball game with all the traditions such as the Anthem and the games in
		between rounds, very fun!
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120606-IMG_0840.jpg"
		width="2200"
		height="1650"
		alt="Inside Yankee stadium"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120606-IMG_0842.jpg"
		width="2200"
		height="1650"
		alt="Yankee stadium baseball match"
	/>
</Panels>

<Location
	name="New York to Denver"
	height={380}
	zoom={600}
	focus={true}
	center={[-90.613953, 38.477791]}
	markers={[
		{ lat: 40.7128, long: -74.006, name: 'New York' },
		{ lat: 41.8781, long: -87.6298, name: 'Chicago' },
		{ lat: 41.2565, long: -95.9345, name: 'Omaha' },
		{ lat: 39.7392, long: -104.9903, name: 'Denver' }
	]}
>
	<p>
		After the first few days in New York it was time to get the rental car, I believe we picked it
		up from the Airport, but I can't remember. Anyway it's a nice Nissan SUV with loads of space
		that would soon be taken up by a giant cooler for drinks, lunch and snacks.
	</p>
	<p>
		We're not quite sure why but birds seemed to love the front-bumper of this car, shame we were
		doing 50+ miles an hour when it happened (multiple times!).
	</p>
	<p>
		It may not be the most interesting part of the country, view wise, but it's nice to do the trip
		to Denver regardless. Just to get used to the Hotel/Motel/Inn life on the road without the
		stress of having to be at places on time.
	</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120607-_DSC0038.jpg"
		width="2200"
		height="1461"
		alt="View of highway with truck"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120608-IMG_08662.jpg"
		width="2200"
		height="1156"
		alt="Sign that says Toledo and Detroit"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120610-_DSC0152.jpg"
	width="2200"
	height="1461"
	alt="Windmill"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120609-IMG_08792.jpg"
		width="2200"
		height="1650"
		alt="Farmland"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120609-_DSC0120.jpg"
		width="2200"
		height="1461"
		alt="Boo Cruiser Haunted Hollow"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120610-_DSC0142.jpg"
	width="2200"
	height="1461"
	alt="Union Pacific train"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120610-_DSC0169.jpg"
	width="2200"
	height="1461"
	alt="Farmland"
/>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120610-_DSC0171.jpg"
	width="2200"
	height="1461"
	alt="Denver without traffic"
/>
