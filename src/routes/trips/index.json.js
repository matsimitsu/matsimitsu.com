import { getTrips } from './_trips'

export async function GET({ params }) {
  let trips = await getTrips()

  return {
    body: trips
  };
}
