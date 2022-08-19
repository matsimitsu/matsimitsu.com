import { json } from '@sveltejs/kit';
import { getPosts } from '../notes/_posts'

export async function GET() {
  let posts = await getPosts()
  return json(posts);
}
