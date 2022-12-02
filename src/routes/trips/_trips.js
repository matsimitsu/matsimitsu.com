import { parsedTimestamp } from "$lib/utils/timestamps";

export async function getTrips() {
  const modules = import.meta.glob("/src/routes/trips/*/+page.js");
  const trips = []
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { tripData } = await module();
    if (tripData && !tripData.private) {
      const { startDate, endDate } = tripData;
      const url = file
        .replace('/src/routes', '')
        .replace("+page.js", "");
      trips.push({ url, ...tripData, startDate: parsedTimestamp(startDate), endDate: (parsedTimestamp(endDate)) });
    }
  }));

  const url = `https://pocketbase.home.matsimitsu.dev/api/collections/trips/records?sort=-end&perPage=1000&expand=cover,locations`
  let res = await fetch(url)
  let parsed = await res.json();
  for (const { start, end, slug, ...rest } of parsed.items) {
    const { cover, locations, } = rest["@expand"]
    trips.push({
      ...rest,
      startDate: parsedTimestamp(start),
      endDate: parsedTimestamp(end),
      url: `/trips/${slug}/`,
      cover: cover,
      locations: locations || []
    })
  }

  // Oldest first
  trips.sort((a, b) => (a.startDate > b.startDate) ? -1 : 1);

  return trips
}
