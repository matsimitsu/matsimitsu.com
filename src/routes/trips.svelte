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
	export let trips = [];
</script>

{#each trips as trip (trip.trip)}
	<a
		sveltekit:prefetch
		href={trip.url}
		class="block max-w-screen-lg mx-auto relative overflow-hidden transform hover:scale-105 duration-300 transition transition-transform my-24"
	>
		<div
			class="absolute inset-x-0 bottom-0 h-64 text-center bg-gradient-to-t from-black to-transparent opacity-80"
		/>
		<div class="absolute inset-x-0 bottom-0 h-40 text-center ">
			<h2 class="text-white text-6xl font-bold mb-4">{trip.title}</h2>
			<p class="text-gray-300 text-lg">{trip.subtitle}</p>
		</div>
		<ResponsiveImage {...trip.image} />
	</a>
{/each}
