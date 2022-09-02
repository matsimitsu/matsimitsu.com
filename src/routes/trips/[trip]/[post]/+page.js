import { enrichContentWithFiles } from '$lib/utils/content'
import { getNeighboursBySlug } from '$lib/utils/neighbours'
import { getSeenPosts } from '$lib/utils/seenPosts.js';
import { browser } from '$app/env';

export async function load({ params, fetch }) {
  const req = await fetch('/trips.json')
  const trips = await req.json()
  const trip = trips.find(t => t.url === `/trips/${params.trip}/`)

  const url = `https://pocketbase.matsimitsu.com/api/collections/trip_posts/records?sort=+end&perPage=1000&expand=cover,files,locations&filter=(${encodeURIComponent("trip=\"" + trip.id + "\"&&public=true")})`
  const data = await fetch(url)
  const posts = await data.json()

  const enrichedPosts = posts.items.map(({ content = {}, ...post }) => {
    return {
      ...post,
      startDate: post.start,
      endDate: post.end,
      url: `${trip.url}${post.slug}`,
      cover: post["@expand"].cover,
      locations: post["@expand"].locations,
      content: enrichContentWithFiles(content?.content || [], post["@expand"].files),
    }
  })

  const post = enrichedPosts.find(p => p.slug === params.post)
  const [prevPost, nextPost] = getNeighboursBySlug(params.post, enrichedPosts)

  let seenPosts = [];
  if (browser && post) {
    seenPosts = [...getSeenPosts(), post.url];
  }

  if (post) {
    return { seenPosts, posts: enrichedPosts, post, prevPost, nextPost }
  } else {
    throw error(404, 'Not found');
  }
}
