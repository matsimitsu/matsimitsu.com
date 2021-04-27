<script>
	export let featurePath, properties;
	export let highlight = false;
</script>

<path d={featurePath} class:highlight="{highlight}" class="{`provinceShape ${properties.name}`}" />

<style>
	.provinceShape {
		stroke: #9ca3af;
		fill: #f3f4f6;
		stroke-width: 0.5;
	}
	.highlight {
		fill: #D1D5DB;
	}
</style>
