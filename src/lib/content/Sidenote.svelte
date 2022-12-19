<script>
	import { generateKey } from '$lib/utils/content';

	import Content from './Content.svelte';
	export let block = {};
</script>

<div class="max-w-xl my-40 mx-auto">
	<div
		class="mx-4 px-8 py-8 bg-white dark:bg-black shadow-lg rounded-lg border dark:border-gray-900"
	>
		<div class="flex justify-end -mt-16">
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="info-circle"
				class="border w-16 h-16 p-3 rounded-full dark:bg-black bg-white border text-gray-400 dark:text-gray-600 dark:border-gray-900"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 192 512"
				><path
					fill="currentColor"
					d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
				/></svg
			>
		</div>
		<div class="prose prose-lg dark:prose-dark">
			<Content content={block.content} id={generateKey()} />
		</div>
	</div>
</div>
