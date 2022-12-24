export async function load({ params, fetch }) {
  const req = await fetch('/notes.json')
  const notes = await req.json()

  const note = notes.find(p => p.slug === params.slug)

  if (note) {
    return { note }
  } else {
    throw error(404, 'Not found');
  }
}
