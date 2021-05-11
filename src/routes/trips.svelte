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
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
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
	<a
		sveltekit:prefetch
		href={trip.url}
		class="block max-w-screen-lg mx-auto relative overflow-hidden transform hover:scale-105 duration-300 transition transition-transform my-24 rounded-md overflow-hidden"
	>
		<div
			class="absolute inset-x-0 bottom-0 h-64 text-center bg-gradient-to-t from-black to-transparent opacity-80"
		/>
		<div class="absolute inset-x-0 bottom-0 h-40 text-center">
			<h2 class="text-white text-6xl font-bold mb-4">{trip.title}</h2>
			<p class="text-gray-300 text-lg">{trip.subtitle}</p>
		</div>
		<ResponsiveImage noPadding rounded {...trip.image} />
	</a>
{/each}

<div class="max-w-screen-xl mx-auto border-t">
	<Map highlight={countries} height={800} zoom={250} center={[0, 10]} />
</div>
