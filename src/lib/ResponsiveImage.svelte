<script>
	export let src;
	export let alt;
	export let width, height;
	export let full = false;
	export let single = false;
	export let panel = false;
	let style;

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
	class:single={single}
	class:full={full}
	class="mx-auto block overflow-hidden"
	class:panel={panel}
>
	<source type="image/jpg" srcset={srcsetForExtension('jpg')} />
	<source type="image/webp" srcset={srcsetForExtension('webp')} />
	<source type="image/avif" srcset={srcsetForExtension('avif')} />
	<img {width} {height} class="block mx-auto h-auto" src="{src}-720.jpg" {alt} />
</picture>

<style>
	.single {
		@apply px-4 max-w-screen-2xl pt-6 px-4 lg:px-0
	}
	.panel {
		@apply ml-6 first:ml-0
	}
	.full {
		@apply max-w-full
	}
</style>
