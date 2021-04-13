<script context="module">
  import p from '$lib/markdown/p.svelte'
	export { p }
</script>

<script>
	import '../app.postcss';
</script>

<div class="mx-auto">
	<slot />
</div>
