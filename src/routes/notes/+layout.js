import { getNeighboursBySlug } from '$lib/utils/neighbours';

// Use load function to get the current trip posts
export async function load({ params, fetch }) {
	const req = await fetch(`/notes.json`);
	const notes = await req.json();

	const [nextNote, prevNote] = getNeighboursBySlug(params.slug, notes);
	return { notes, prevNote, nextNote };
}
