<script>
	import Hls from 'hls.js';
	export let block = {};
	const { name, title: blockTitle, bunny_id } = block;

	let videoElement;
	let playing = false;
	let showOverlay = true;

	function onPlayButtonPointerUp(_e) {
		if (Hls.isSupported()) {
			var hls = new Hls();
			hls.loadSource(videoElement.src);
			hls.attachMedia(videoElement);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				videoElement.play();
				playing = true;
			});
		} else {
			videoElement.play();
			playing = true;
		}
	}

	function onPauseButtonPointerUp(_e) {
		videoElement.pause();
		playing = false;
	}

	function onContainerMouseEnter(_e) {
		if (playing) {
			showOverlay = true;
		}
	}

	function onContainerMouseLeave(_e) {
		if (playing) {
			showOverlay = false;
		}
	}
</script>

<div
	class="mt-2 lg:mt-6 px-2 lg:px-0 relative container mx-auto max-w-screen-2xl"
	on:mouseenter={onContainerMouseEnter}
	on:mouseleave={onContainerMouseLeave}
>
	<div
		class="absolute bg-black w-full h-full transition-opacity bg-opacity-30 {showOverlay
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="absolute inset-x-0 bottom-0 w-full p-8 text-right flex items-center justify-end">
			{#if playing}
				<svg
					on:pointerup={onPauseButtonPointerUp}
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="pause-circle"
					class="z-50 font-bold text-gray-300 block ml-4 cursor-pointer hover:text-white w-10 h-10 stroke-1"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"
					/></svg
				>
			{:else}
				<svg
					on:pointerup={onPlayButtonPointerUp}
					class="z-50 font-bold text-gray-300 block ml-4 cursor-pointer hover:text-white w-10 h-10 stroke-1"
					fill="none"
					stroke="currentColor"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
					/></svg
				>
			{/if}
		</div>
	</div>

	<video
		bind:this={videoElement}
		class="w-full object-cover"
		poster={`https://vz-898a1b1b-43e.b-cdn.net/${bunny_id}/thumbnail.jpg`}
		src={`https://vz-898a1b1b-43e.b-cdn.net/${bunny_id}/playlist.m3u8`}
	>
		<track kind="captions" />
	</video>
</div>
