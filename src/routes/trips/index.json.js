import { getTrips } from './_trips'

export async function get({ params }) {
  let trips = await getTrips()

  return {
    body: trips
  };
}
