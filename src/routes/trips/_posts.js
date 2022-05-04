export async function getPosts() {
  const modules = import.meta.glob("/src/routes/trips/**/*.svelte");
  const posts = []
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { postData } = await module();

    if (postData) {
      const isSinglePost = file.endsWith("index.svelte")
      const url = file
        .replace('/src/routes', '')
        .replace("index.svelte", "")
        .replace(".svelte", "") + '/';
      posts.push({ ...postData, url, isSinglePost, file });
    }
  }));

  // Oldest first
  posts.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

  return posts
}
