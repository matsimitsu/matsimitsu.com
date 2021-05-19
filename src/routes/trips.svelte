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

	export let trips = [];
	let countries = trips.map((t) => t.countries || []).flat();
</script>

<div class="mx-auto container my-24 text-center">
	<h1
		class="font-extrabold tracking-snug leading-8 text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8"
	>
		Trips I made
	</h1>
	<p class="text-lg text-gray-600 dark:text-gray-400">
		Over the years I've visited quite a few countries on many trips, below I'll share these with
		you.
	</p>
	<hr class="mx-auto w-64 mt-4 dark:border-gray-600" />
</div>

{#each trips as trip (trip.trip)}
	<Trip trip={trip} />
{/each}

<div class="max-w-screen-xl mx-auto border-t">
	<Map highlight={countries} height={800} zoom={250} center={[0, 10]} />
</div>
