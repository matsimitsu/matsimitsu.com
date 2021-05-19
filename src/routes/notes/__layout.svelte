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
	import MoreHeader from '$lib/MoreHeader.svelte';
	import Note from '$lib/Note.svelte';
	import PrevNextPost from '$lib/PrevNextPost.svelte';
	import ReturnToCategory from '$lib/ReturnToCategory.svelte';

	export let notes = [];
	export let prevNote = null;
	export let nextNote = null;
</script>

<slot />

<PrevNextPost prevPost={prevNote} nextPost={nextNote} subject="note" />
<div class="mb-24 border-t dark:border-gray-600 border-gray-200 pt-24 px-8">
	<MoreHeader>More notes</MoreHeader>

	{#each notes.slice(0, 10) as note (note.url)}
		<Note {note} />
	{/each}
</div>
<ReturnToCategory path="/notes" text="Return to notes" />
