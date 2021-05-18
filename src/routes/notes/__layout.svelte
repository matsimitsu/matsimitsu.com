<script context="module">
	import { getNeighbours } from '$lib/utils/neighbours';

	// Use load function to get the current trip posts
	export async function load({ page, fetch }) {
		const req = await fetch(`/notes.json`);
		const notes = await req.json();

		const [nextNote, prevNote] = getNeighbours(page, notes);
		return {
			props: { notes, prevNote, nextNote }
		};
	}
</script>

<script>
	import Note from '$lib/Note.svelte';
	import FormattedDate from '$lib/FormattedDate.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let notes = [];
	export let prevNote = null;
	export let nextNote = null;
</script>

<slot />
<div class="mt-24 border-t dark:border-gray-600 border-gray-200 py-12 px-4 bg-gray-100">
	<div class="flex justify-between mx-auto ">
		{#if prevNote}
			<a
				href={prevNote.url}
				sveltekit:prefetch
				class="flex justify-end flex-1 text-right content-center transform hover:scale-105 duration-200 transition transition-transform"
			>
				<div class=" ml-4">
					<h3 class="text-md mb-2 lg:text-xl text-gray-600 dark:text-gray-400">Previous note</h3>
					<p class="text-sm text-gray-400 dark:text-gray-600 w-30">
						<FormattedDate date={prevNote.date} />
					</p>
					<h2 class="text-lg lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
						{prevNote.title}
					</h2>
				</div>
			</a>
		{:else}
			<div class="flex-1"/>
		{/if}
		<div class="border-l mx-12"></div>
		{#if nextNote}
			<a
				href={nextNote.url}
				sveltekit:prefetch
				class="flex flex-1  content-center transform hover:scale-105 duration-200 transition transition-transform"
			>
				<div class="mr-4">
					<h3 class="text-md mb-2 lg:text-xl text-gray-600 dark:text-gray-400">Next note</h3>
					<p class="text-sm text-gray-400 dark:text-gray-600 w-30">
						<FormattedDate date={nextNote.date} />
					</p>
					<h2 class="text-lg lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
						{nextNote.title}
					</h2>
				</div>
			</a>
		{:else}
		<div class="flex-1"/>
		{/if}
	</div>
</div>
<div class="mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
	{#each notes.slice(0, 10) as note (note.url)}
		<Note {note} />
	{/each}
</div>
<ReturnToCategory path="/notes" text="Return to notes" />
