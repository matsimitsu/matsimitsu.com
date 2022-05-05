<script context="module">
	export const postData = {
		title: 'Day Two',
		subtitle: 'MacRitchie Reservoir, Singapore',
		trip: 'asia-2022',
		startDate: new Date('2022-05-05'),
		image: {
			src: 'https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03518-2.jpg',
			width: 2928,
			height: 2346,
			alt: 'Oriental Whip Snake'
		},
		locations: [
			{
				name: 'Singapore',
				long: 103.851959,
				lat: 1.29027,
				textPosition: 'left'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<TextContent>
	<p>
		I shouldn't have taken that power nap yesterday, as it made sleeping last night very difficult.
		I was wide awake at 05:00 in the morning.
	</p>
	<p>
		To fix this problem, I did a full lap of the "MacRitchie Reservoir." One of the oldest
		reservoirs in Singapore holds water for the city's consumption.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03398.jpg"
		width="2667"
		height="4000"
		alt="Boardwalk at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03399.jpg"
		width="4000"
		height="2667"
		alt="View of MacRitchie Reservoir"
	/>
</Panels>
<TextContent>
	<p>
		The land surrounding the reservoir is a protected catchment area, and there are a couple of
		trails leading through the dense forest.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03499.jpg"
	width="4000"
	height="2667"
	alt="MacRitchie Reservoir"
/>

<TextContent>
	<p>
		In total, I walked about 15 Kilometers around the reservoir, taking detours on boardwalks near
		the water and the Treetop walk.
	</p>
	<p>
		Many animals live around the reservoir, such as chickens and monkeys. You can usually hear them
		from afar from the commotion in the trees.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03405.jpg"
		width="2482"
		height="3657"
		alt="Monkey at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03415.jpg"
		width="3334"
		height="4000"
		alt="Monkey at MacRitchie Reservoir"
	/>
</Panels>

<TextContent>
	<p>
		Besides the more common animals, I found a few more... Such as this snake, a beautiful Blue
		Coral Snake, which I learned after I met it, is highly venomous. Though it usually feeds on
		other snakes, not people.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03429.jpg"
	width="4000"
	height="2165"
	alt="Blue Coral Snake at MacRitchie Reservoir"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03437.jpg"
	width="4000"
	height="2667"
	alt="Blue Coral Snake at MacRitchie Reservoir"
/>

<TextContent>
	<p>
		Another reptile I stumbled upon was this Malayan water monitor, just chilling next to the
		pathway.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03443.jpg"
	width="4000"
	height="2667"
	alt="Water monitor at MacRitchie Reservoir"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03445.jpg"
	width="4000"
	height="2667"
	alt="Thingy at MacRitchie Reservoir"
/>

<TextContent>
	<h2>Treetop Walk</h2>
	<p>
		The treetop walk is halfway around the reservoir and deeper in the forest, away from the water.
		It gives nice views of the surrounding area, though it's pretty hot and humid.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03459.jpg"
	width="4000"
	height="2667"
	alt="Treetop Walk at MacRitchie Reservoir"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03457.jpg"
		width="2667"
		height="4000"
		alt="Treetop Walk at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03455.jpg"
		width="4000"
		height="2667"
		alt="Canopy at MacRitchie Reservoir"
	/>
</Panels>

<TextContent>
	<p>
		The trail continued past the reservoir, where I encountered a watch tower, tons of butterflies
		and more water monitors.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03464.jpg"
	width="4000"
	height="2667"
	alt="Canopy at MacRitchie Reservoir"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03463.jpg"
		width="2667"
		height="4000"
		alt="Boardwalk at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03471.jpg"
		width="4000"
		height="2667"
		alt="Canopy at MacRitchie Reservoir"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03484.jpg"
	width="4000"
	height="2929"
	alt="Water Monitor at MacRitchie Reservoir"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03493.jpg"
		width="2667"
		height="4000"
		alt="Tree at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03492.jpg"
		width="4000"
		height="2667"
		alt="MacRitchie Reservoir"
	/>
</Panels>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03496.jpg"
	width="3524"
	height="2021"
	alt="Squirrel at MacRitchie Reservoir"
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03500.jpg"
		width="4000"
		height="2667"
		alt="A Water Monitor at MacRitchie Reservoir"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03498.jpg"
		width="4000"
		height="2667"
		alt="MacRitchie Reservoir"
	/>
</Panels>

<TextContent>
	<p>
		The lack of sleep and hot weather started to take their toll. At a covered bench, I took a break
		when I noticed movement from the corner of my eye. And lo and behold, this fella made its way
		through the shrubs.
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03507.jpg"
		width="2667"
		height="4000"
		alt="Oriental Whip Snake"
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03516.jpg"
		width="4000"
		height="2662"
		alt="Oriental Whip Snake"
	/>
</Panels>

<ResponsiveImage
	full
	src="https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03518.jpg"
	width="4000"
	height="2578"
	alt="Oriental Whip Snake"
/>

<TextContent>
	<p>
		It's an Oriental Whip Snake, only mildly venomous and pretty docile, though I didn't test it out
		and kept my distance.
	</p>
</TextContent>
