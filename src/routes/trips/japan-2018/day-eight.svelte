<script context="module">
	export const postData = {
		title: 'Mt. Nokogiri',
		subtitle: 'Saw Tooth Mountain',
		trip: 'japan-2018',
		startDate: new Date('2018-11-08'),
		image: {
			src: 'https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be43af92a86927dd44231c4.jpg',
			width: '6000',
			height: '4000',
			alt: ''
		},
		locations: [
			{
				lat: 35.1622268,
				long: 139.82329030000005,
				name: 'Mt. Nokogiri'
			},
			{
				lat: 35.652832,
				long: 139.839478,
				name: 'Tokyo'
			}
		]
	};
</script>

<script>
	import TextContent from '$lib/TextContent.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	import Panels from '$lib/Panels.svelte';
	import Location from '$lib/Location.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...postData} />

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be422622a86927dd442316e.jpg"
	width="6000"
	height="4000"
/>

<Location
	name="Mt. Nokogiri"
	height={340}
	zoom={2000}
	focus={true}
	center={[139.839478, 35.652832]}
	markers={postData.locations}
>
	<p>
		It was another early day. To reach Mt. Nokogiriyama I had to travel around Tokyo bay and this
		would take almost 3 hours one-way.
	</p>
	<p>
		After a quick breakfast (same as yesterday, it seems I&#39;ve found my breakfast spot), I headed
		to the train station to catch one of 4 trains to the other end of the bay.
	</p>
	<p>
		Around noon I was at the base of the ropeway up the mountain and a little while later this was
		the view I was rewarded with.
	</p>
</Location>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4229c2a86927dd4423171.jpg"
	width="6000"
	height="4000"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be422a92a86927dd4423175.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be422a42a86927dd4423174.jpg"
		width="4789"
		height="3032"
	/>
</Panels>
<TextContent
	><p>
		Near the entrance of the park is a giant Buddhist goddess Kannon carved out of the rock.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be423752a86927dd442317c.jpg"
	width="6000"
	height="4000"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be423842a86927dd4423180.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be423852a86927dd4423181.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4239f2a86927dd4423183.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>One of the main highlights of visiting Nokogiriyama is “Hells View.”</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be423e72a86927dd4423185.jpg"
	width="6000"
	height="4000"
	full
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4240a2a86927dd442318d.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be423f72a86927dd442318a.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424072a86927dd442318c.jpg"
	width="6000"
	height="4000"
/>
<TextContent><p>The other side of the mountain had nice views too.</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424522a86927dd4423193.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		A master artisan and 27 assistants created around 1500 statues that are scattered around the
		mountain.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424db2a86927dd4423198.jpg"
	width="6000"
	height="4000"
/>
<Panels
	><ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424df2a86927dd4423199.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424e42a86927dd442319b.jpg"
		width="6000"
		height="4000"
	/></Panels
>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424ef2a86927dd442319e.jpg"
		width="5859"
		height="3906"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be424f32a86927dd442319f.jpg"
		width="4000"
		height="6000"
	/>
</Panels>
<TextContent><p>But wait, there&#39;s ~~more~~ another giant budda!</p></TextContent>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be425612a86927dd44231a6.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		It was just after two in the afternoon, time for (a delicious convenience store bought) lunch
		with a nice view.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4259f2a86927dd44231aa.jpg"
	width="6000"
	height="4000"
/>
<TextContent
	><p>
		Knowing it takes 3 hours to get back, I slowly made my way back up the mountain to the ropeway
		and from there down to the train station where only one train departs every 1.5 hours.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426512a86927dd44231b3.jpg"
	width="6000"
	height="4000"
/>
<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426532a86927dd44231b4.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4264d2a86927dd44231b1.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		I had plenty of time to enjoy the train station as I had just missed the train by 10 minutes...
	</p></TextContent
>

<Panels>
	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426632a86927dd44231b9.jpg"
		width="6000"
		height="4000"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be4265d2a86927dd44231b7.jpg"
		width="5827"
		height="3885"
	/>

	<ResponsiveImage
		src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426682a86927dd44231bb.jpg"
		width="6000"
		height="4000"
	/>
</Panels>
<TextContent
	><p>
		Luckily there was a beach nearby to wait for the next train and enjoy the sunset.
	</p></TextContent
>

<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426ad2a86927dd44231c1.jpg"
	width="6000"
	height="4000"
/>
<ResponsiveImage
	src="https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be426af2a86927dd44231c2.jpg"
	width="6000"
	height="4000"
/>
