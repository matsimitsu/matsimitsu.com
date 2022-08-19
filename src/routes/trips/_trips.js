export async function getTrips() {
  const modules = import.meta.glob("/src/routes/trips/*/+page.js");
  const trips = []
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { tripData } = await module();
    if (tripData && !tripData.private) {
      const url = file
        .replace('/src/routes', '')
        .replace("+page.js", "");
      trips.push({ url, ...tripData });
    }
  }));

  // Oldest first
  trips.sort((a, b) => (a.startDate > b.startDate) ? -1 : 1);

  return trips
}
