<script>
	export let posts = [];
	import Date from '$lib/Date.svelte';
</script>

{#each posts as post (post.url)}
  <a sveltekit:prefetch href={post.url} class="max-w-2xl mx-auto block mb-8 transform hover:scale-105 duration-200 transition transition-transform">
    <p class="mx-auto text-sm text-gray-400 dark:text-gray-600">
      <Date date={post.date} />
    </p>
    <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">{post.title}</h2>
    <p class="text-md text-gray-500">{post.summary}</p>
  </a>
{/each}
