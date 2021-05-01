<script context="module">
	export const tripData = {
		title: 'USA 2011',
		subtitle: 'Land of the free.',
		trip: 'usa-2011',
		startDate: new Date('2011-07-04'),
		endDate: new Date('2011-08-02'),
		image: {
      "src": "https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0155.jpg",
      "width": 2200,
      "height": 1461,
      "alt": "View of valley in Rocky Mountains Nat. Park."
    }
	}
</script>

<script>
	import Map from '$lib/Map.svelte';
	import TripHeader from '$lib/TripHeader.svelte';
</script>

<TripHeader {...tripData} />

<div class="max-w-screen-xl mx-auto">
	<Map highlight={['United States of America']} height={800} zoom={250} center={[0, 10]} />
</div>
