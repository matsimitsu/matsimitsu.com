<script>
  import { geoMercator, geoPath } from "d3-geo";
  import * as topojson from "topojson-client";
  import { onMount } from 'svelte';
  import Feature from '$lib/Feature.svelte'
  import Marker from '$lib/Marker.svelte'

  export let mapData;
  export let zoom = 100;
  export let center = [];
  export let select = [];
  let width = 400;
  let height = width;

  let data = [];
  const projection = geoMercator()
    .center(center)
    .scale(zoom)
    .translate([width / 2, height / 2]);
  $: path = geoPath().projection(projection);
  let keys = Object.keys(mapData.objects)
  let countries = {...mapData.objects[keys[0]]}

  if (select.length > 0) {
    countries.geometries =countries.geometries.filter(c => select.includes(c.properties.name))
  }
  data = topojson.feature(mapData, countries).features;
  var marks = [{lat: 25.105497, long: 121.597366, name: "Taipei"}];

  onMount(async () => {
    height = width;
  });

</script>

<style>
  svg {
    background-color: "#eeeeee";
  }
</style>

<div bind:offsetWidth={width} class="block">
  <svg width={width} height={height}>
    {#each data as feature}
      <Feature
        featurePath={path(feature)}
       />
    {/each}
    {#each marks as d}
      <Marker
        coords={projection([d.long,d.lat])}
        text={d.name}
      />
    {/each}
  </svg>
</div>
