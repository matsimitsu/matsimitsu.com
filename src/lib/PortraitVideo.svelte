<script>
	import Video from '$lib/Video.svelte';
</script>

<div class="flex container mx-auto my-24 overflow-hidden max-w-2xl" >
  <div class="mr-12 max-w-lg prose" >
    <slot></slot>
  </div>
  <div class=" max-w-lg rounded">
    <Video src="https://cdn.matsimitsu.com/video/blog/svelte/64/t/VID_20210327_182715" title="At Schiphol" />
  </div>
</div>
