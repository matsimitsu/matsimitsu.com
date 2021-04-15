<script>
  import DarkModeToggle from '$lib/DarkModeToggle.svelte'
</script>

<nav class="mx-auto container flex justify-between pt-4 border-b pb-2 mb-4 dark:border-gray-700">
  <div class="flex">
    <h1>Matsimitsu</h1>
    <h3 class="ml-4 text-gray-500">Robert Beekman</h3>
  </div>
  <ul class="flex items-center dark:text-gray-200">
    <li>Home</li>
    <li class="ml-4">Trips</li>
    <li class="ml-4"><DarkModeToggle /></li>
  </ul>
</nav>
