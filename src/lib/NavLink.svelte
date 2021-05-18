<script>
	import { page } from '$app/stores';
	export let href;
	export let title;

	$: active = $page.path.startsWith(href);
</script>

<a class="hoverable" class:active sveltekit:prefetch {href}>{title}</a>

<style>
	.hoverable {
		@apply hover:opacity-100 opacity-70 duration-200 transition transition-opacity;
	}
	.active {
		@apply opacity-100 font-semibold
	}
</style>
