<script>
  import DarkModeToggle from '$lib/DarkModeToggle.svelte'
</script>

<nav class="mx-auto px-4 text-lg flex justify-between pt-4 border-b pb-2 mb-4 dark:border-gray-700">
  <div class="flex">
    <a href="/" class="hoverable"><h1 class="dark:text-gray-100">Matsimitsu</h1></a>
    <h3 class="border-l dark:border-gray-600 ml-2 pl-2 text-gray-600 hidden md:block dark:text-gray-400">Robert Beekman</h3>
  </div>
  <ul class="flex items-center dark:text-gray-200">
    <li class="ml-4"><a class="hoverable" sveltekit:prefetch href="/blog">Blog</a></li>
    <li class="ml-4"><a class="hoverable" sveltekit:prefetch href="/trips">Trips</a></li>
    <li class="ml-4"><a class="hoverable" sveltekit:prefetch href="/notes">Notes</a></li>
    <li class="ml-4"><a class="hoverable" sveltekit:prefetch href="/about">About</a></li>
    <li class="ml-4"><a class="hoverable" sveltekit:prefetch href="/uses">Tech</a></li>
    <li class="ml-4 hoverable"><DarkModeToggle /></li>
  </ul>
</nav>

<style>
  .hoverable {
    @apply hover:opacity-50 opacity-100 duration-200 transition transition-opacity;
  }
</style>
