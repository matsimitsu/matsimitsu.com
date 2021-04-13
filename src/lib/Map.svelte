<script>
  import { geoMercator, geoPath } from "d3-geo";
  import * as topojson from "topojson-client";
  import Feature from '$lib/Feature.svelte'
  import Marker from '$lib/Marker.svelte'
  import fap from '../../static/middle-east.js'

  console.log(fap.features)
  let data = [];
  const width = "960";
  const height = "500";
  const projection = geoMercator()
    .center([ 31.033333, 28.233334])
    .scale(1800)
  $: path = geoPath().projection(projection);
  data = topojson.feature(fap, fap.objects.egypt).features;

  var marks = [{lat: 27.25738, long: 33.81291, name: "Hurghada"}, {lat: 25.687243, long: 32.639637, name: "Luxor"}];
</script>

<style>
  svg {
    background-color: "#eeeeee";
  }
</style>

<svg width="960" height="500">
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
