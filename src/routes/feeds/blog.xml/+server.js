const siteUrl = 'https://matsimitsu.com';

const siteUrlOrUrl = (givenUrl) => {
  if (givenUrl.startsWith("http")) {
    return givenUrl
  } else {
    return `${siteUrl}/blog/${givenUrl}`
  }
}

const renderXmlRssFeed = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[Matsimitsu.com - Trips]]></title>
    <description><![CDATA[Personal weblog of Robert Beekman. Feed of latest posts from the blog section of my site.]]></description>
    <link>${siteUrl}</link>
    <atom:link href="https://${siteUrl}/feeds/blog.xml" rel="self" type="application/rss+xml" />
    <generator>SvelteKit</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
    .map(post => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.summary}]]></description>
          <link>${siteUrlOrUrl(post.slug)}</link>
          <guid isPermaLink="false">${siteUrlOrUrl(post.slug)}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
        `,
    ).join('\n')
  }
  </channel>
</rss>`;

export async function GET() {
  let res = await fetch("https://pocketbase.home.matsimitsu.dev/api/collections/blog_posts/records?sort=-date&perPage=20&filter=(public=true)")
  let parsed = await res.json();
  const feed = renderXmlRssFeed(parsed.items);

  return new Response(feed, {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/rss+xml'
  })
}
