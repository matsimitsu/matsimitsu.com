import { getPosts } from './_posts'

export async function get({ query }) {
  let posts = await getPosts()
  if (query.get("trip")) {
    posts = posts.filter(p => p.trip == query.get("trip"))
  }
  return {
    body: posts
  };
}
