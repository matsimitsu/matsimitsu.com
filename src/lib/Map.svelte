<script>
  import * as d3 from "d3-geo";
  import * as topojson from "topojson-client";
  import { onMount } from 'svelte';

  import Feature from '$lib/Feature.svelte'
  import Marker from '$lib/Marker.svelte'
  import fap from '../../static/middle-east.js'

  let width = 400;
  let height = width;

  let data = [];
  const projection = d3.geoMercator()
    .center([ 31.033333, 28.233334])
    .scale(1800)
    .translate([width / 2, height / 2]);
  $: path = d3.geoPath().projection(projection);
  data = topojson.feature(fap, fap.objects.egypt).features;

  var marks = [{lat: 27.25738, long: 33.81291, name: "Hurghada"}];

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
