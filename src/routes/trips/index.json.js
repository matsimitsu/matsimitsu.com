import { getTrips } from './_trips'

export async function get({ params }) {
  let posts = await getTrips()

  if (params.trip) {
    posts = posts.filter(p => p.trip == params.trip)
  }

  return {
    body: posts
  };
}
