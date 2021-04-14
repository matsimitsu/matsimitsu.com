<script>
	export let coords;
	export let text;
	export let textPosition = 'right';
</script>

<circle class="marker" cx={coords[0]} cy={coords[1]} r="4" />
<text
	class:leftPosition={textPosition == 'left'}
	class="text"
	x={textPosition == 'right' ? coords[0] + 10 : coords[0] - 10}
	y={textPosition == 'right' ? coords[1] + 4 : coords[1] + 2}
>{text}</text>

<style>
	.marker {
		@apply text-gray-600 fill-current;
	}
	.text {
		@apply text-xs text-gray-900 fill-current;
	}
	.leftPosition {
		direction: rtl;
	}
</style>
