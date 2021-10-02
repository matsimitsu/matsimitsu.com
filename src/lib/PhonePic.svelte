<script>
	import { getContext } from 'svelte';
	export let subtitle = "Shot on an old phone, hence the lack of quality.";
	let inTextContent = getContext('inTextContent') || false;
</script>

<div class="max-w-xl mx-auto" class:my-40={!inTextContent} class:mt-16={inTextContent} class:mb-16={inTextContent}>
	<div
		class="mx-4 px-8 pt-8 pb-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg border dark:border-gray-700"
	>
		<div class="flex justify-end -mt-16">
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="mobile-alt"
				class="border w-16 h-16 p-3 rounded-full dark:bg-gray-900 bg-white border text-gray-400 dark:text-gray-600 dark:border-gray-700"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
				><path
					fill="currentColor"
					d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
				/></svg
			>
		</div>
		<div class="rounded overflow-hidden">
			<slot />
		</div>
		<div class="flex justify-end mt-4 prose prose-lg dark:prose-dark">
			<small>{subtitle}</small>
		</div>
	</div>
</div>
