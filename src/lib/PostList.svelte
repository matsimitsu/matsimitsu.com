<script>
	export let posts = [];
	import Date from '$lib/Date.svelte';
</script>

{#each posts as post (post.url)}
  <a sveltekit:prefetch href={post.url} class="max-w-xl mx-auto block mb-12 transform hover:scale-105 duration-200 transition transition-transform">
    <p class="mx-auto text-sm text-gray-400 dark:text-gray-600">
      <Date date={post.date} />
      {#if post.appsignal}
      <span class="inline-block text-xs rounded py-1 px-2 bg-green-500 text-white dark:bg-green-800">AppSignal</span>
    {/if}
    </p>
    <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">
      {post.title}
    </h2>
    <p class="text-md text-gray-500 mt-1">{post.summary}</p>
  </a>
{/each}
