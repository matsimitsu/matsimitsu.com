export async function load({ params, fetch }) {
  const req = await fetch('/blog.json')
  const posts = await req.json()

  const post = posts.find(p => p.slug === params.slug)

  if (post) {
    return { post }
  } else {
    throw error(404, 'Not found');
  }
}
