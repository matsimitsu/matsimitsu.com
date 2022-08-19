import { json } from '@sveltejs/kit';
import { getTrips } from '../trips/_trips'

export async function GET({ params }) {
  let trips = await getTrips()

  return json(trips);
}
