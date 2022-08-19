import { getNeighbours } from '$lib/utils/neighbours';
import { getSeenPosts } from '$lib/utils/seenPosts.js';
import { browser } from '$app/env';

// Use load function to get the current trip posts
export async function load({ url, fetch }) {
	const [_root, _trips, trip, _post] = url.pathname.split('/');

	let tripPosts = []
	if (trip) {
		const postsReq = await fetch(`/trips/${trip}.json`);
		tripPosts = await postsReq.json();
	}

	const tripReq = await fetch('/trips.json');
	const trips = await tripReq.json();

	const currentTrip = trips.find((t) => t.trip == trip);
	const currentPost = tripPosts.find((p) => p.url == url.pathname);
	const isSinglePost = tripPosts.length == 1 && tripPosts[0].isSinglePost;

	let seenPosts = [];
	if (browser && currentPost) {
		seenPosts = [...getSeenPosts(), currentPost.url];
	}

	// No neighbours by default
	let [prevPost, nextPost] = [null, null];

	// If we are on an index page, show neighbours
	// (e.g. the trip is not a single post, but has one post)
	if (!isSinglePost && !currentPost) {
		[prevPost, nextPost] = getNeighbours(url, tripPosts);
	}

	// If we have more than one post, we can always show neighbours
	if (tripPosts.length > 1) {
		[prevPost, nextPost] = getNeighbours(url, tripPosts);
	}

	return { tripPosts, prevPost, nextPost, currentTrip, currentPost, seenPosts };
}
