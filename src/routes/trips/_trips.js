export async function getTrips() {
  const modules = import.meta.glob("/src/routes/trips/**/*.svelte");
  const trips = []
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { metadata } = await module();

    if (metadata) {
      const url = file
        .replace('/src/routes', '')
        .replace("index.svelte", "")
        .replace(".svelte", "");
      trips.push({ ...metadata, url });
    }
  }));

  // Oldest first
  trips.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

  return trips
}
