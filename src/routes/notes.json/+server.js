import { json } from '@sveltejs/kit';
import { enrichContentWithFiles } from '$lib/utils/content'

export async function GET() {
  let res = await fetch("https://pocketbase.home.matsimitsu.dev/api/collections/notes/records?sort=-date&perPage=1000&expand=files&filter=(public=true)")
  let parsed = await res.json();

  const notes = parsed.items.map(item => {
    const { content } = item
    return {
      ...item,
      content: enrichContentWithFiles(content?.content || [], item['@expand']?.files || []),
      url: `/notes/${item.slug}`
    }
  })

  return json(notes);
}
