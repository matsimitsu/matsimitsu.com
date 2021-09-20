import { getPosts } from '../house/_posts';

const siteUrl = 'https://matsimitsu.com';

const renderXmlRssFeed = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[Matsimitsu.com - Trips]]></title>
    <description><![CDATA[Personal weblog of Robert Beekman. Feed of the progress of my newly built house.]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feeds/house.xml" rel="self" type="application/rss+xml" />
    <generator>SvelteKit</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(post => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}${post.url}</link>
          <guid isPermaLink="false">${siteUrl}${post.url}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>
        `,
      ).join('\n')
    }
  </channel>
</rss>`;

export async function get() {
  let posts = await getPosts();
  const feed = renderXmlRssFeed(posts.reverse());

  return {
    body: feed,
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
      'Content-Type': 'application/rss+xml'
    }
  };
}
