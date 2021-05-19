<script>
	import NavLink from '$lib/NavLink.svelte';
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
</script>

<nav class="mx-auto px-4 text-md md:text-lg flex justify-between pt-4 border-b pb-2 mb-4 dark:border-gray-700">
	<div class="flex">
		<a href="/" class="hoverable"><h1 class="dark:text-gray-100">Matsimitsu</h1></a>
		<h3
			class="border-l dark:border-gray-600 ml-2 pl-2 text-gray-600 hidden md:block dark:text-gray-400"
		>
			Robert Beekman
		</h3>
	</div>
	<ul class="flex items-center dark:text-gray-200">
		<li class="ml-4"><NavLink href="/blog" title="Blog" /></li>
		<li class="ml-4"><NavLink href="/trips" title="Trips" /></li>
		<li class="ml-4"><NavLink href="/notes" title="Notes" /></li>
		<li class="ml-4"><NavLink href="/about" title="About" /></li>
		<li class="ml-4"><NavLink href="/uses" title="Tech" /></li>
		<li class="ml-4 hoverable"><DarkModeToggle /></li>
	</ul>
</nav>

<style>
	.hoverable {
		@apply hover:opacity-70 opacity-100 duration-200 transition transition-opacity;
	}
</style>
