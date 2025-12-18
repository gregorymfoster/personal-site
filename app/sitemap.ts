import { getBlogPosts } from '@/lib/mdx';
import type { MetadataRoute } from 'next';

function getPostPriority(postDate: string): number {
  const now = new Date();
  const date = new Date(postDate);
  const daysSincePublished = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (daysSincePublished <= 30) {
    return 0.9; // Recent posts (last 30 days)
  }
  if (daysSincePublished <= 90) {
    return 0.7; // Medium age posts (30-90 days)
  }
  return 0.5; // Older posts (90+ days)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts(['campus-cutie-2017']);
  const baseUrl = 'https://gmfoster.com';

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: getPostPriority(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
