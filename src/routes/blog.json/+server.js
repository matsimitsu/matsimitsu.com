import { json } from '@sveltejs/kit';
import { enrichContentWithFiles } from '$lib/utils/content'

export async function GET() {
  let res = await fetch("https://pocketbase.home.matsimitsu.dev/api/collections/blog_posts/records?sort=-date&perPage=1000&expand=files&filter=(public=true)")
  let parsed = await res.json();

  const posts = parsed.items.map(item => {
    const { content } = item
    const url = item.slug.startsWith("http") ? item.slug : `/blog/${item.slug}/`
    return {
      ...item,
      content: enrichContentWithFiles(content?.content || [], item['@expand']?.files || []),
      url
    }
  })

  return json(posts);
}
