<script>
  export let coords;
  export let text;
</script>

<style>
  .marker {
    stroke: #444444;
    stroke-width: 0.5;
  }
  .text {
    @apply text-xs
  }
</style>

<circle
  class="marker"
  cx={coords[0]}
  cy={coords[1]}
  r="5"
/>
<text
  class="text"
  x={coords[0] + 10}
  y={coords[1] + 5}
>{text}</text>
