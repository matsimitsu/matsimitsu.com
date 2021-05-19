<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
	export let note;
</script>

<a
	sveltekit:prefetch
	href={note.url}
	class="flex items-center max-w-xl mx-auto mb-4 border-b dark:border-gray-800 pb-2 transform hover:scale-105 duration-200 transition transition-transform"
>
	<p class="text-xs sm:text-sm text-gray-400 dark:text-gray-600 w-30 block">
		<FormattedDate date={note.date} />
			{#if note.category == 'photos'}
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="camera"
					class="hidden sm:inline h-5 w-5 mx-2 fa-camera fa-w-16"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
					/></svg
				>
			{:else if note.category == 'recipes'}
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="utensils"
					class="hidden sm:inline h-5 w-5 mx-2 fa-utensils fa-w-13"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 416 512"
					><path
						fill="currentColor"
						d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
					/></svg
				>
			{:else if note.category == 'reviews'}
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="video"
					class="hidden sm:inline h-5 w-5 mx-2 fa-video fa-w-18"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					><path
						fill="currentColor"
						d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
					/></svg
				>
			{:else if note.category == 'notes'}
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="sticky-note"
					class="hidden sm:inline h-5 w-5 mx-2 fa-sticky-note fa-w-14"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					><path
						fill="currentColor"
						d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"
					/></svg
				>
			{/if}
	</p>
	<h2 class="text-md sm:text-lg lg:text-2xl ml-2 font-bold text-gray-700 dark:text-gray-200">
		{note.title}
	</h2>
</a>
