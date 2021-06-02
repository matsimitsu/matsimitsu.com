<script>
  export let title
  export let align = "center"
</script>

<div class="mx-auto max-w-4xl my-24 px-4" class:text-center={align == "center"}>
  <slot name="hat" />
	<h1
		class="font-extrabold tracking-snug text-2xl md:text-6xl font-bold text-gray-800 dark:text-gray-200"
		class:mb-8={$$slots.subtitle}
		class:mb-4={!$$slots.subtitle}
	>
		{title}
	</h1>
	{#if $$slots.subtitle}
		<div class="max-w-4xl text-lg prose prose-lg" class:mx-auto={align == "center"}>
			<slot name="subtitle" />
		</div>
	{/if}
	<hr class="w-64 mt-4 dark:border-gray-600" class:mx-auto={align == "center"} />
</div>
