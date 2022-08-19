// Use load function to get the current trip posts
export async function load({ fetch }) {
	const posts = await fetch(`/blog.json`);
	const notes = await fetch(`/notes.json`);
	const trips = await fetch(`/trips.json`);

	return {
		posts: await posts.json(),
		notes: await notes.json(),
		trips: await trips.json()
	};
}
