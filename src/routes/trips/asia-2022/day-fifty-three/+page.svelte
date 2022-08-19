

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Location from '$lib/Location.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
	export let data = {}
	const { postData } = data;
</script>

<TripHeader {...postData} />

<Location
	name="George Town, Malaysia"
	height={560}
	zoom={800}
	focus={true}
	center={[100.312386, 5.4253]}
	markers={postData.locations}
>
	<p>
		After an exhausting day yesterday with over 30.000 steps and little sleep, it was time to wake
		up at four in the morning to catch the 06:30 flight from Don Mueang Airport, Thailand's
		"domestic" airport.
	</p>
	<p>
		Luckily the hotel was just across the highway from the airport, and a short walk across a walk
		bridge, I was in the terminal, where most shops were still closed.
	</p>
	<p>
		After a quick check-in (everything is automated, including the bag drop, something western
		airports can learn from), and an even speedier security check, it was time to get some
		much-needed coffee and board the plane to the 3rd country of this trip; Malaysia.
	</p>
	<p>
		The flight didn't take long, and after an hour-long bus ride, I was at my hotel, where I took a
		shower and got ready to explore George Town.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05276.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<p>
		Malaysia has had a lot more Chinese immigrants than Thailand, which means delicious breakfast at
		this Hong Kong-style breakfast place.
	</p>
	<PhonePic subtitle="There may have been more egg-tarts before this picture was taken">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-55/PXL_20220626_041025516.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05273.jpg"
	width="4000"
	height="2747"
	alt=""
/>
<TextContent
	><p>
		George Town's architecture is an interesting mix of Chinese clan houses, mansions, skyscrapers,
		and colonial-style buildings.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05279.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05280.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent><p>A shopkeeper takes a nap in the heat of the blistering sun.</p></TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05271.jpg"
		width="2607"
		height="3212"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05277.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05285.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05282.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent
	><p>The city has a grungy feel to it, but is perfectly safe to wander around.</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05291.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05284.jpg"
		width="4000"
		height="3122"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05289.jpg"
		width="4000"
		height="3242"
		alt=""
	/>
</Panels>
<TextContent><p>Towards the ocean, the colonial architecture starts to appear.</p></TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05293.jpg"
		width="4000"
		height="2876"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05294.jpg"
		width="2519"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Char Koay Teow</h2>
	<p>
		Where Thailand has Pad Thai, Penang has Char Koay Teow, and this might just be my new favorite
		dish.
	</p>
	<PhonePic subtitle="Char Koay Teow">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-55/PXL_20220626_092016208.jpg"
			width="4032"
			height="3024"
			alt=""
		/>
	</PhonePic>
	<p>
		Char means stir-fried and Koay Teow refers to the flat rice noodles. It's served at a hawker
		centre and cooked on the spot.
	</p>
	<p>
		The meal consists of a delicious mix of flat rice noodles, Chinese sausage, vegetables and
		various soy sauces. Cooked at high heat it contains <i>juust</i> a little charring for additional
		taste.
	</p>
</TextContent>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05297.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05299.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05300.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05301.jpg"
		width="2502"
		height="4000"
		alt=""
	/>
</Panels>

<TextContent
	><p>
		The ocean front is quite busy and I get why, it's the best place to cool off from the light
		ocean breeze on this sweltering evening.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05302.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<p>
		When walking back from the waterfront I noticed a little food cart where people were drinking
		peculiar coloured drinks.
	</p>
	<p>
		After some pointing to the drinks and to money in my hand, I was the proud owner of whatever
		this concoction was.
	</p>
	<PhonePic subtitle="Pretty colours">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-55/PXL_20220626_102016898.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
	<p>I suspect it was a variant of Cendol (which we'll come bak to later).</p>
</TextContent>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05307.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05308.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05312.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05310.jpg"
	width="4000"
	height="2667"
	alt=""
/>
<TextContent
	><p>
		The city put heavy rent controls on the buildings for most of the past century, hence the
		dilapidated state of quite a few buildings. There was simply no money for maintenance.
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05314.jpg"
		width="4000"
		height="2774"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05316.jpg"
		width="3223"
		height="3412"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05318.jpg"
		width="2667"
		height="4000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05319.jpg"
		width="4000"
		height="2667"
		alt=""
	/>
</Panels>

<TextContent
	><p>
		Tomorrow it's time to explore the surrounding mountains (and temples, always temples) on the
		island.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05322.jpg"
	width="4000"
	height="2667"
	alt=""
/>

<TextContent>
	<p>
		Back to that weird drink. On the way back to the hotel I came across a café that served <a
			href="https://en.wikipedia.org/wiki/Cendol"
			target="_blank"
			rel="noopener noreferrer">Cendol</a
		>, a combination of ingredients that should taste awful when combined, but is in fact delicious.
	</p>
	<PhonePic subtitle="Cendol">
		<ResponsiveImage
			src="https://cdn.matsimitsu.com/asia-2022/day-55/PXL_20220626_110806821.jpg"
			width="3024"
			height="4032"
			alt=""
		/>
	</PhonePic>
	<p>
		Cendol is a combination of shaved ice, green rice flour jelly, coconut milk and palm sugar
		syrop. In this case additional toppings included corn and sweetened red azuki beans.
	</p>
</TextContent>
