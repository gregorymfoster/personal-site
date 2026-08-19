import { getBlogPosts } from '@/lib/mdx';

const baseUrl = 'https://gmfoster.com';

export const dynamic = 'force-static';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRssDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toUTCString();
}

export async function GET() {
  const posts = await getBlogPosts(['campus-cutie-2017']);

  const rssItems = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/writing/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/writing/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${formatRssDate(post.date)}</pubDate>
      <author>greg@gmfoster.com (Greg Foster)</author>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Greg Foster</title>
    <link>${baseUrl}</link>
    <description>Essays and reflections on code, startups, and learning.</description>
    <language>en-us</language>
    <lastBuildDate>${formatRssDate(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>greg@gmfoster.com (Greg Foster)</managingEditor>
    <webMaster>greg@gmfoster.com (Greg Foster)</webMaster>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
