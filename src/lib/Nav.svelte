<script>
	import NavLink from '$lib/NavLink.svelte';
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header
	class="mx-auto px-4 text-md md:text-lg flex justify-end content-center pt-4 border-b pb-2 mb-4 dark:border-gray-700"
>
	<div class="flex mr-auto">
		<a href="/" class="hoverable"><h1 class="h-8 text-lg dark:text-gray-100">Matsimitsu</h1></a>
		<h3
			class="border-l dark:border-gray-600 ml-2 pl-2 text-gray-600 hidden md:block dark:text-gray-400"
		>
			Robert Beekman
		</h3>
	</div>
	<ul
		class="md:mr-4 absolute md:relative top-14 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold md:font-normal w-full md:w-auto bg-white dark:bg-gray-900 dark:text-white md:rounded-none md:background-transparent md:shadow-none p-6 md:p-0"
		class:open={isMenuOpen}
		class:hidden={!isMenuOpen}
	>
		<li class="ml-4"><NavLink on:click={closeMenu} href="/blog" title="Blog" /></li>
		<li class="ml-4"><NavLink on:click={closeMenu} href="/trips" title="Trips" /></li>
		<li class="ml-4"><NavLink on:click={closeMenu} href="/notes" title="Notes" /></li>
		<li class="ml-4"><NavLink on:click={closeMenu} href="/about" title="About" /></li>
		<li class="ml-4"><NavLink on:click={closeMenu} href="/uses" title="Tech" /></li>
	</ul>
	<DarkModeToggle />
	<button on:click={toggleMenu} class="ml-2 md:hidden w-8 h-8 p-1 dark:text-gray-100">
		{#if isMenuOpen}
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="times"
				class="svg-inline--fa fa-times fa-w-11  w-7 h-7 "
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 352 512"
				><path
					fill="currentColor"
					d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
				/></svg
			>
		{:else}
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="bars"
				class="hoverable svg-inline--fa fa-bars fa-w-14  w-7 h-7 "
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				><path
					fill="currentColor"
					d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
				/></svg
			>
		{/if}
	</button>
</header>

<style>
	.hoverable {
		@apply hover:opacity-70 opacity-100 duration-200 transition transition-opacity;
		@apply m-0 p-0;
	}

	.open {
		@apply flex text-2xl border-b dark:border-gray-600;
	}

	.open li {
		@apply mb-4;
	}
</style>
