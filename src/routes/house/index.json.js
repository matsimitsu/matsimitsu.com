import { getPosts } from './_posts'

export async function get() {
  let posts = await getPosts()

  return {
    body: posts
  };
}
