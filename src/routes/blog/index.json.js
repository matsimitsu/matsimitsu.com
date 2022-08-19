import { getPosts } from './_posts'

export async function GET() {
  let posts = await getPosts()

  return {
    body: posts
  };
}
