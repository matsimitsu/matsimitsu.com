<script>
  export let featurePath;
  export let initialColor;

</script>

<style>
  .provinceShape {
    stroke: #bdbdbd;
    fill: #f0f0f0;
    stroke-width: 0.5;
  }
</style>

<path
  d={featurePath}
  class="provinceShape"
  fill={initialColor} />
