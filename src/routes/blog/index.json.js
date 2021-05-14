import { getPosts } from './_posts'

export async function get({ params }) {
  let posts = await getPosts()

  return {
    body: posts
  };
}
