<script context="module">
	// Use load function to get the current trip posts
	export async function load({ _page, fetch }) {
		const req = await fetch(`/trips.json`);

		return {
			props: { trips: await req.json() }
		};
	}
</script>

<script>
	import Trip from '$lib/Trip.svelte';
	import Map from '$lib/Map.svelte';
	import PageHeader from '$lib/PageHeader.svelte';

	export let trips = [];
	let countries = trips.map((t) => t.countries || []).flat();
	const description = "Over the years I've visited quite a few countries on many trips, below I'll share these with you."
</script>

<svelte:head>
	<title>Blog - Matsimitsu.com</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Matsimitsu" />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@matsimitsu" />
	<meta property="og:url" content="https://matsimitsu.com/blog" />
	<link rel="canonical" href="https://matsimitsu.com/blog" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Matsimitsu.com - Robert Beekman - Trips RSS Feed"
		href="/feeds/trips.xml"
	/>
</svelte:head>


<PageHeader title="Trips I made">
	<span slot="subtitle">
		<p>
			{description}
		</p>
	</span>
</PageHeader>

<div class="px-4">
	{#each trips as trip (trip.trip)}
		<Trip trip={trip} />
	{/each}
</div>
<div class="max-w-screen-xl mx-auto border-t">
	<Map highlight={countries} height={800} zoom={250} center={[0, 10]} />
</div>
