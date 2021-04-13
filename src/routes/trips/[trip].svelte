<script context="module">
	const posts = import.meta.glob('./**/*.svx');
	let body = [];

	for (const path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => ({
				path: path.substring(2).replace('.svx', ''),
				metadata
			}))
		);
	}

	export async function load({ page, fetch }) {
		const posts = await Promise.all(body);
		const tripPosts = posts.filter((p) => p.path.startsWith(page.params.trip));

		return {
			props: {
				tripPosts
			}
		};
	}
</script>

<script>
	export let tripPosts;
</script>

<a href={`/trips/${tripPosts[0].path}`}>{tripPosts[0].metadata.title}</a>
