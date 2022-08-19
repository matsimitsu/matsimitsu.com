import { getNeighboursBySlug } from '$lib/utils/neighbours';

export async function load({ params, fetch }) {
	const req = await fetch('/blog.json')
  const posts = await req.json()

	const [prevPost, nextPost] = getNeighboursBySlug(params.slug, posts)

	return { posts, prevPost, nextPost};
}
