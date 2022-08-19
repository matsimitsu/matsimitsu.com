// Use load function to get the current trip posts
export async function load({ fetch }) {
	const req = await fetch(`/notes.json`);

	return { posts: await req.json() };
}
