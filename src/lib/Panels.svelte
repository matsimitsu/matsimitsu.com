<script>
	export let snug = false;
</script>

<div
	class:loose={!snug}
	class:snug={snug}
	class="flex mx-auto container max-w-screen-2xl px-4 lg:px-0 overflow-hidden"
>
	<slot />
</div>

<style>
	.snug {
		@apply mt-6
	}
	.loose {
		@apply my-12
	}

</style>
