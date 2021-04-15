<script>
	export let coords;
	export let text;
	export let textPosition = 'right';
</script>

<circle class="text-gray-600 fill-current dark:text-gray-400" cx={coords[0]} cy={coords[1]} r="4" />
<text
	class:leftPosition={textPosition == 'left'}
	class="text-xs text-gray-500 fill-current dark:text-gray-500"
	x={textPosition == 'right' ? coords[0] + 10 : coords[0] - 10}
	y={textPosition == 'right' ? coords[1] + 4 : coords[1] + 2}
>{text}</text>

<style>
	.leftPosition {
		direction: rtl;
	}
</style>
