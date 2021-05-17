<script>
  export let path;
  export let text;
</script>
<div class="mt-24 border-t border-b dark:border-gray-600 border-gray-200 py-8 px-4">
	<div class="mx-auto container">
		<a
		sveltekit:prefetch
		href="{path}"
		class="flex mr-auto items-center px-2 2xl:px-0 overflow-hidden text-gray-600 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-800"
	>
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="arrow-left"
			class="w-12 h-12 p-3 rounded-full border border-gray-600 dark:border-gray-600"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			><path
				fill="currentColor"
				d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
			/></svg
		>
		<span
			class="ml-4 mr-auto font-extrabold leading-8 text-2xl font-bold"
			>{text}</span
		>
	</a>
	</div>
</div>
