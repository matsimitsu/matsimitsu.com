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
		class="absolute inset-x-0 bottom-0 h-40 md:h-72 text-center bg-gradient-to-t from-black to-transparent opacity-80"
	/>
	<div class="absolute inset-x-0 bottom-0 h-40 md:h-48 text-center px-4">
    <p class="mx-auto text-sm text-gray-300 mb-2">
      <FormattedDate date={trip.startDate} />
      {#if trip.endDate}
        <span>-</span>
        <FormattedDate date={trip.endDate} />
      {/if}
    </p>
		<h2 class="text-white text-2xl sm:text-4xl lg:text-6xl font-bold mb-4">{trip.title}</h2>
		<p class="text-gray-300 text-md md:text-lg">{trip.subtitle}</p>
	</div>
	<ResponsiveImage noPadding rounded src={trip.image.src} width={trip.image.width} height={trip.image.height} alt={trip.image.alt} />
</a>
