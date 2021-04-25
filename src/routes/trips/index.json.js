export async function get({ context }) {
  const posts = context.pages.filter(p => p.title !== undefined )


  return {
    body: posts,
  };
}
