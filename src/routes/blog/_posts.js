export async function getPosts() {
  const modules = import.meta.glob("/src/routes/blog/**/*.svx");
  const posts = []

  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const post = await module();

    if (post && post.metadata) {
      const url = post.metadata.appsignal || file
        .replace('/src/routes', '')
        .replace(".svx", "");
      posts.push({ ...post.metadata, url });
    }
  }));

  // Oldest first
  posts.sort((a, b) => (a.date > b.date) ? -1 : 1);
  return posts
}
