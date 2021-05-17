<script context="module">
	// Use load function to get the current trip posts
	export async function load({ fetch }) {
		const req = await fetch(`/notes.json`);

		return {
			props: { notes: await req.json() }
		};
	}
</script>

<script>
	import Note from '$lib/Note.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let notes = [];
</script>

<slot />

<div class="mt-24 mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-4">
	{#each notes.slice(0, 10) as note (note.url)}
		<Note {note} />
	{/each}
</div>
<ReturnToCategory path="/notes" text="Return to notes" />
