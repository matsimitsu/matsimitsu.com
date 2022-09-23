import { enrichContentWithFiles } from '$lib/utils/content.js'

export async function load({ params, fetch }) {
  const req = await fetch('/trips.json')
  const trips = await req.json()
  const trip = trips.find(t => t.url === `/trips/${params.trip}/`)

  const url = `https://pocketbase.matsimitsu.com/api/collections/trip_posts/records?sort=+start&perPage=1000&expand=cover,files,locations&filter=(${encodeURIComponent("trip=\"" + trip.id + "\"&&public=true")})`
  const data = await fetch(url)
  const posts = await data.json()
  const enrichedPosts = posts.items.map(({ content = {}, ...post }) => {
    return {
      ...post,
      url: `${trip.url}${post.slug}`,
      cover: post["@expand"].cover,
      locations: post["@expand"].locations,
      content: enrichContentWithFiles(content?.content || [], post["@expand"].files),
    }
  })

  if (trip) {
    return { trip, posts: enrichedPosts, nextPost: enrichedPosts[0] }
  } else {
    throw error(404, 'Not found');
  }
}
