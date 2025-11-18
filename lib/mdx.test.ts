import { describe, expect, it } from 'vitest';
import { getBlogPost, getBlogPosts } from './mdx';

describe('getBlogPosts', () => {
  it('should return an array of blog posts', async () => {
    const posts = await getBlogPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  it('should return posts with required metadata fields', async () => {
    const posts = await getBlogPosts();

    for (const post of posts) {
      expect(post).toHaveProperty('slug');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('date');
      expect(post).toHaveProperty('description');
      expect(post).toHaveProperty('content');

      expect(typeof post.slug).toBe('string');
      expect(typeof post.title).toBe('string');
      expect(typeof post.date).toBe('string');
      expect(typeof post.description).toBe('string');
      expect(typeof post.content).toBe('string');
    }
  });

  it('should sort posts by date (newest first)', async () => {
    const posts = await getBlogPosts();

    if (posts.length > 1) {
      for (let i = 0; i < posts.length - 1; i++) {
        const currentDate = new Date(posts[i].date).getTime();
        const nextDate = new Date(posts[i + 1].date).getTime();
        expect(currentDate).toBeGreaterThanOrEqual(nextDate);
      }
    }
  });
});

describe('getBlogPost', () => {
  it('should return null for non-existent post', async () => {
    const post = await getBlogPost('non-existent-slug');
    expect(post).toBeNull();
  });

  it('should return a post with valid metadata for existing post', async () => {
    const posts = await getBlogPosts();

    if (posts.length > 0) {
      const firstPost = posts[0];
      const post = await getBlogPost(firstPost.slug);

      expect(post).not.toBeNull();
      expect(post?.slug).toBe(firstPost.slug);
      expect(post?.title).toBe(firstPost.title);
      expect(post?.date).toBe(firstPost.date);
      expect(post?.description).toBe(firstPost.description);
      expect(post?.content).toBeTruthy();
    }
  });
});
