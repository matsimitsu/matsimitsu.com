export async function getContext(_props) {
  const posts = []
  const modules = import.meta.glob("../routes/trips/**/*.svelte")
  for (const modulePath in modules) {
    const file = `./src/${modulePath.replace('../', '')}`
    const path = modulePath
      .replace('../routes', '')
      .replace("index.svelte", "")
      .replace(".svelte", "")

    const { metadata } = await import(file)
    if (metadata) {
      posts.push({ path: path, ...metadata })
    }
  }
  return {
    posts: posts
  }
}
