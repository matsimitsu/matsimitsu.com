<script>
	import FormattedDate from '$lib/FormattedDate.svelte';
  export let post;
</script>

<a href={post.url} class="block mb-12 transform hover:scale-105 duration-200 transition transition-transform font-mono">
  <p class="mx-auto text-sm text-gray-400 dark:text-gray-600 font-mono">
    <FormattedDate date={post.date} />
    {#if post.slug.startsWith("https://blog.appsignal.com")}
      <span class="inline-block text-xs rounded py-1 px-2 bg-green-500 text-white dark:bg-green-800 font-mono">AppSignal</span>
    {/if}
  </p>
  <h2 class="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200">
    {post.title}
  </h2>
  <p class="text-md text-gray-500 mt-1">{post.summary}</p>
</a>
