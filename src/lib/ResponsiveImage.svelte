<script>
	import { getContext } from 'svelte';
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';

	export let src;
	export let alt;
	export let noPadding = false;
	export let rounded = false;
	export let width, height;
	export let full = false;
	export let noZoom = false;
	let style;
	let inPanel = getContext('inPanel') || false;

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

	// Lightbox
	let isOpen = false;
	const setIsOpen = (newIsOpen) => {
		if (noZoom) {
			return;
		}

		isOpen = newIsOpen;
	};
</script>

<picture
	{style}
	class:single={!inPanel}
	class:full
	class="mx-auto block overflow-hidden cursor-pointer"
	class:inPanel
	class:noPadding
	class:rounded
	on:click={() => setIsOpen(true)}
>
	<source type="image/jpg" srcset={srcsetForExtension('jpg')} />
	<source type="image/webp" srcset={srcsetForExtension('webp')} />
	<source type="image/avif" srcset={srcsetForExtension('avif')} />
	<img {width} {height} class="block mx-auto h-auto" src="{src}-720.jpg" {alt} />
</picture>

<Transition show={isOpen}>
	<Dialog
		open={isOpen}
		on:close={() => setIsOpen(false)}
		class="fixed z-50 inset-0 bg-gray-800 cursor-zoom-out"
	>
		<TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-75"
			leave="ease-in duration-200"
			leaveFrom="opacity-75"
			leaveTo="opacity-0"
			entered="opacity-75"
		>
			<DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
		</TransitionChild>
		<TransitionChild
			enter="ease-out transform duration-300"
			enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			enterTo="opacity-100 translate-y-0 sm:scale-100"
			leave="ease-in transform duration-200"
			leaveFrom="opacity-100 translate-y-0 sm:scale-100"
			leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
		>
			<div class="flex h-screen w-screen">
				<div class="relative m-auto overflow-hidden">
					<picture
						on:click={() => setIsOpen(false)}
						class="mx-auto block rounded-md border-2 bg-white"
					>
						<source type="image/jpg" srcset={srcsetForExtension('jpg')} />
						<source type="image/webp" srcset={srcsetForExtension('webp')} />
						<source type="image/avif" srcset={srcsetForExtension('avif')} />
						<img
							{width}
							{height}
							src="{src}-720.jpg"
							{alt}
							class="block object-contain w-auto mx-auto rounded-md"
							style="max-height: 90vh; max-width: 90vw"
						/>
					</picture>
				</div>
			</div>
		</TransitionChild>
	</Dialog>
</Transition>

<style>
	.single {
		@apply px-4 max-w-screen-2xl mt-2 lg:mt-2 px-2 2xl:px-0;
	}
	.inPanel {
		@apply ml-2 lg:ml-2 first:ml-0;
	}
	.noPadding {
		@apply px-0;
	}

	.rounded > img {
		@apply rounded-md;
	}
	.full {
		@apply max-w-full;
	}

	img {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
