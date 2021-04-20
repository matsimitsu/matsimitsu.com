<script>
	export let snug = false;
</script>

<div
	class:loose={!snug}
	class:snug={snug}
	class="flex mx-auto container max-w-screen-2xl px-2 lg:px-0 overflow-hidden"
>
	<slot />
</div>

<style>
	.snug {
		@apply mt-2 lg:mt-6
	}
	.loose {
		@apply my-2 lg:my-12
	}

</style>
