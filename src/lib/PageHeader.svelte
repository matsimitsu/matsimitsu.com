<script>
  export let title
  export let align = "center"
</script>

<div class="mx-auto max-w-4xl my-24 px-4" class:text-center={align == "center"}>
  <slot name="hat" />
	<h1
		class="font-extrabold tracking-snug text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8"
	>
		{title}
	</h1>
	<div class="text-lg text-gray-600 dark:text-gray-400" class:mx-auto={align == "center"}>
    <slot name="subtitle" />
  </div>
	<hr class="w-64 mt-4 dark:border-gray-600" class:mx-auto={align == "center"} />
</div>
