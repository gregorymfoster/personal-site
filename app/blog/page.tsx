import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Greg Foster',
  description: 'Blog posts and writings',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Check back soon!</p>
      ) : (
        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <time>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</time>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
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
