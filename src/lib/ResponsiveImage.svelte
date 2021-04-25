<script>
	import { getContext } from 'svelte';

	export let src;
	export let alt;
	export let width, height;
	export let full = false;
	export let single = false;
	let style;
	let inPanel = getContext('inPanel') || false

	// Remove file extension from source
	if (src) {
		src = src.split('.');
		src.pop();
		src = src.join('.');
	}
	if (!alt) {
		const [name] = src.split('/').slice(-1);
		alt = name;
	}

	function srcsetForExtension(ext) {
		return [360, 720, 1200, 2200]
			.map((size) => {
				return `${src}-${size}.${ext} ${size}w`;
			})
			.join(', ');
	}

	style = `flex: ${width / height}`;
</script>

<picture
	{style}
	class:single={!inPanel}
	class:full={full}
	class="mx-auto block overflow-hidden"
	class:inPanel={inPanel}
>
	<source type="image/jpg" srcset={srcsetForExtension('jpg')} />
	<source type="image/webp" srcset={srcsetForExtension('webp')} />
	<source type="image/avif" srcset={srcsetForExtension('avif')} />
	<img {width} {height} class="block mx-auto h-auto" src="{src}-720.jpg" {alt} />
</picture>

<style>
	.single {
		@apply px-4 max-w-screen-2xl mt-2 lg:mt-6 px-2 2xl:px-0
	}
	.inPanel {
		@apply ml-2 lg:ml-6 first:ml-0
	}
	.full {
		@apply max-w-full
	}

	img {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
