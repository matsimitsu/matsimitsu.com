export async function get() {
  const modules = import.meta.glob("/src/routes/trips/**/*.svelte");
  const posts = []
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { metadata } = await module();

    if (metadata) {
      const url = file
        .replace('/src/routes', '')
        .replace("index.svelte", "")
        .replace(".svelte", "")
      posts.push({ ...metadata, url });
    }
  }));

  return {
    body: posts,
  };
}
