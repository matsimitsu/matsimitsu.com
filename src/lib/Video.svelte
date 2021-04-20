<script>
	export let src;
	export let title;
	let videoElement
	let playing = false
	let showOverlay = true

	function onPlayPauseButtonPointerUp(_e) {
    videoElement.play()
		playing = true
  }

	function onContainerMouseEnter(_e) {
		if (playing) {
			showOverlay = true
		}
	}

	function onContainerMouseLeave(_e) {
		if (playing) {
			showOverlay = false
		}
	}

</script>
<div class="mt-2 lg:mt-6 px-2 lg:px-0 relative container mx-auto max-w-screen-2xl" on:mouseenter={onContainerMouseEnter} on:mouseleave={onContainerMouseLeave}>
	<div class="absolute bg-black w-full h-full transition-opacity bg-opacity-30 {showOverlay ? 'opacity-100' : 'opacity-0'}" >
		<div class="absolute inset-x-0 bottom-0 w-full p-8 text-right flex items-center">
			{#if title}
				<h3 class="block ml-auto text-gray-100 font-normal text-4xl">{title}</h3>
			{/if}
			<svg on:pointerup={onPlayPauseButtonPointerUp} class:ml-4="{title}" class="font-bold text-gray-300 block ml-4 cursor-pointer hover:text-white w-10 h-10 stroke-1"  fill="none" stroke="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
		</div>
	</div>

	<video bind:this={videoElement}	class="w-full object-cover" loop muted poster="{src}.jpg">
		<source src="{src}.mp4" type="video/mp4" />
		<source src="{src}.webm" type="video/webm" />
		<source src="{src}.ogv" type="video/ogv" />
		<track kind="captions">
	</video>
</div>
