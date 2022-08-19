import { getNeighbours } from '$lib/utils/neighbours';

// Use load function to get the current trip posts
export async function load({ url, fetch }) {
	const req = await fetch(`/notes.json`);
	const notes = await req.json();

	const [nextNote, prevNote] = getNeighbours(url, notes);
	return { notes, prevNote, nextNote };
}
