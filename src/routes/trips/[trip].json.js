import { getPosts } from './_posts'

export async function get({ params }) {
  let posts = await getPosts()
  if (params.trip) {
    posts = posts.filter(p => p.trip == params.trip)
  }
  return {
    body: posts
  };
}
