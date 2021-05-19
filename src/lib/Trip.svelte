<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
	import ResponsiveImage from '$lib/ResponsiveImage.svelte';
	export let trip;
</script>

<a
	sveltekit:prefetch
	href={trip.url}
	class="block max-w-screen-lg mx-auto relative overflow-hidden transform hover:scale-105 duration-300 transition transition-transform my-24 rounded-md overflow-hidden"
>
	<div
		class="absolute inset-x-0 bottom-0 h-72 text-center bg-gradient-to-t from-black to-transparent opacity-80"
	/>
	<div class="absolute inset-x-0 bottom-0 h-48 text-center">
    <p class="mx-auto text-sm text-gray-300 mb-2">
      <FormattedDate date={trip.startDate} />
      {#if trip.endDate}
        <span>-</span>
        <FormattedDate date={trip.endDate} />
      {/if}
    </p>
		<h2 class="text-white text-6xl font-bold mb-4">{trip.title}</h2>
		<p class="text-gray-300 text-lg">{trip.subtitle}</p>
	</div>
	<ResponsiveImage noPadding rounded {...trip.image} />
</a>
