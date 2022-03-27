<script context="module">
	export const postData = {
		title: 'France 2022',
		subtitle: 'A relaxing week in southern Spain with friends.',
		trip: 'france-2022',
		startDate: new Date('2022-03-14'),
		endDate: new Date('2022-03-20'),
		image: {
			src: 'https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--18.jpg',
			width: 2048,
			height: 1536,
			alt: 'Chatel ski area'
		},
		locations: [
			{
				name: 'Châtel',
				long: 6.841152,
				lat: 46.267395,
				textPosition: 'left'
			}
		]
	};
	export const tripData = {
    private: true,
		title: 'France 2022',
		subtitle: 'A relaxing week in southern Spain with friends.',
		trip: 'france-2022',
		startDate: new Date('2022-03-14'),
		endDate: new Date('2022-03-20'),
		image: {
			src: 'https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--18.jpg',
			width: 2048,
			height: 1536,
			alt: 'Chatel ski area'
		},
		countries: ['France', 'Switzerland']
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Map from '$lib/Map.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
	import Video from '$lib/Video.svelte';
	import PhonePic from '$lib/PhonePic.svelte';
</script>

<TripHeader {...postData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={tripData.countries} height={800} zoom={250} center={[0, 10]} />
</div>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--58.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--57.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
</Panels>

<Location
	name="Châtel, France"
	height={220}
	zoom={800}
	focus={true}
	center={[6.841152, 46.267395]}
	markers={postData.locations}
>
	<p>
		After two missed seasons due to Covid, we were finally back on the slopes, well, almost. First a
		10-hour drive through The Netherlands, Germany, Swiss and finally France, we reached our
		apartment near Châtel, France had to be made.
	</p>
	<p>Luckily traffic was light and progress was fast.</p>
</Location>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--55.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--32.jpg"
		width="2016"
		height="1512"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Day one - Saharan sand</h2>
	<p>
		On the first day we had Saharan sand blowing over the mountains, this made the mountains a lot
		more gloomy than I remembered. It was only after getting back to the apartment we learned the
		reason.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--50.jpg"
	width="1600"
	height="1200"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--46.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--39.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--46.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--45.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
</Panels>

<TextContent>
	<p>Luckily the Saharan sand did not influence the taste of beer.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--48.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--38.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Day two</h2>
	<p>
		With the sand from the air, the mountains looked a lot more like I remembered. The deposited
		sand on the slopes did make it obvious no fresh snow had fallen that night.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--37.jpg"
	width="1600"
	height="1200"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--43.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--35.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
</Panels>

<TextContent>
	<p>A good lunch is important.</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--36.jpg"
		width="1200"
		height="1600"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--29.jpg"
		width="2000"
		height="1500"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--33.jpg"
		width="1512"
		height="2016"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--26.jpg"
		width="2000"
		height="1500"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--31.jpg"
		width="2000"
		height="1500"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Day three</h2>
	<p>
		The nice thing about longer ski-trips is that you don't _have_ to go every day, you can skip a
		day if you feel like it. Today the crew was just 4 out of 6
	</p>
</TextContent>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--24.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--25.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--22.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
</Panels>

<PhonePic subtitle="Phone video">
	<Video
		src="https://cdn.matsimitsu.com/france-2022/WhatsApp Video 2022-03-17 at 10.18.31 AM"
		title="&nbsp;"
	/>
</PhonePic>

<TextContent>
	<h2>Day four</h2>
	<p>
		There were just two of us today with two more people staying in. Not that it mattered, the
		clouds were so thick, you couldn't see each other anyway.
	</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--21.jpg"
	width="2016"
	height="1512"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--20.jpg"
		width="2016"
		height="1512"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--19.jpg"
		width="2016"
		height="1512"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--18.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--17.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
</Panels>

<TextContent>
	<h2>Day five</h2>
	<p>The last day, with a full crew.</p>
</TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--16.jpg"
	width="2048"
	height="1536"
	alt=""
/>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--15.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--14.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--13.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--2.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--7.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
</Panels>

<PhonePic subtitle="Phone video">
	<Video
		src="https://cdn.matsimitsu.com/france-2022/WhatsApp Video 2022-03-19 at 1.10.45 PM"
		title="&nbsp;"
	/>
</PhonePic>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--10.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--6.jpg"
		width="1600"
		height="1200"
		alt=""
	/>
</Panels>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--8.jpg"
		width="2048"
		height="1536"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--11.jpg"
		width="1536"
		height="2048"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--5.jpg"
		width="1500"
		height="2000"
		alt=""
	/>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/france-2022/processed-lg/20220327-.jpg"
		width="1500"
		height="2000"
		alt=""
	/>
</Panels>
