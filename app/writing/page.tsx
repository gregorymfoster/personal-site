import { getBlogPosts } from '@/lib/mdx';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://gmfoster.com';

export const metadata: Metadata = {
  title: 'Writing - Greg Foster',
  description: 'Essays and reflections on code, startups, and learning.',
  alternates: {
    canonical: `${baseUrl}/writing`,
  },
  openGraph: {
    title: 'Writing - Greg Foster',
    description: 'Essays and reflections on code, startups, and learning.',
    url: `${baseUrl}/writing`,
    siteName: 'Greg Foster',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gregmfoster',
    site: '@gregmfoster',
  },
};

export default async function WritingPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <h1>Writing</h1>
      <p>Essays and reflections on code, startups, and learning.</p>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="link-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`}>
                <strong>{post.title}</strong>
              </Link>
              <p className="post-meta">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              {post.description && <p>{post.description}</p>}
            </li>
          ))}
        </ul>
      )}
      <p>
        <Link href="/">← Home</Link>
      </p>
    </>
  );
}
