<script>
	import { getContext } from 'svelte';
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';

	export let block = {};
	const { versions = {}, width, height, attrs } = block;
	const { display = 'default', title } = attrs || {};

	export let nested = false;
	export let noPadding = false;
	export let rounded = false;
	export let full = display == 'full';
	export let nextType = null;
	export let prevType = null;

	const renderStyle = getContext('renderStyle');

	const style = `flex: ${width / height}`;

	const srcsetForExtension = (ext) => {
		return Object.entries(versions[ext])
			.map(([size, src]) => {
				return `https://cdn.matsimitsu.dev${src} ${size}w`;
			})
			.join(', ');
	};
	let alt = block?.attrs?.alt || block.name || block.file;
	let isOpen = false;
	const setIsOpen = (newIsOpen) => {
		isOpen = newIsOpen;
	};
</script>

<picture
	{style}
	class:mb-20={!nested && renderStyle == 'wide' && !['panel', 'img'].includes(nextType)}
	class:mt-20={!nested && renderStyle == 'wide' && !['panel', 'img'].includes(prevType)}
	class:single={!nested}
	class:full
	class:wide={!nested && renderStyle == 'wide'}
	class="mx-auto block overflow-hidden cursor-pointer"
	class:nested
	class:noPadding
	class:rounded
	on:click={() => setIsOpen(true)}
>
	<source type="image/jpeg" srcset={srcsetForExtension('jpg')} />
	<img
		{width}
		{height}
		class="block mx-auto h-auto"
		src="https://cdn.matsimitsu.dev{versions?.jpg[720]}"
		{alt}
	/>
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
						<source type="image/jpeg" srcset={srcsetForExtension('jpg')} />
						<img
							{width}
							{height}
							src="https://cdn.matsimitsu.dev{versions?.jpg[720]}"
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
	.single:not(.wide) {
		@apply px-4 max-w-screen-2xl mt-2 lg:mt-2 px-2 2xl:px-0;
	}
	.nested {
		@apply ml-2 lg:ml-2 first:ml-0;
	}
	.noPadding {
		@apply px-0;
	}

	.rounded > img {
		@apply rounded-md;
	}
	.full {
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		position: relative;
		right: 50%;
		width: 100vw;
	}

	.wide {
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		position: relative;
		right: 50%;
		width: 100vw;
	}
	img {
		margin-top: 0;
		margin-bottom: 0;
	}
	.wide img {
		@apply max-w-screen-2xl;
	}
</style>
