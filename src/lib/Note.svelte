<script>
  import FormattedDate from '$lib/FormattedDate.svelte'
  export let note;
</script>
<a sveltekit:prefetch href={note.url} class="flex items-center max-w-xl mx-auto block mb-4 border-b pb-2 transform hover:scale-105 duration-200 transition transition-transform">
  <p class="text-sm text-gray-400 dark:text-gray-600">
    <FormattedDate date={note.date} />
  </p>
  <h2 class="text-2xl ml-4 font-bold text-gray-700 dark:text-gray-200">
    {note.title}
  </h2>
</a>
