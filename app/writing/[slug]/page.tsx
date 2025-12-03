import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  const baseUrl = 'https://gmfoster.com';
  const postUrl = `${baseUrl}/writing/${slug}`;

  return {
    title: `${post.title} - Greg Foster`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: 'Greg Foster',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Greg Foster'],
      images: [
        {
          url: `${baseUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gregmfoster',
      site: '@gregmfoster',
    },
    other: {
      'article:author': 'Greg Foster',
      'article:published_time': post.date,
      'article:modified_time': post.date,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: true },
  });

  const baseUrl = 'https://gmfoster.com';
  const postUrl = `${baseUrl}/writing/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Greg Foster',
      url: baseUrl,
      jobTitle: 'Cofounder',
      worksFor: {
        '@type': 'Organization',
        name: 'Graphite',
        url: 'https://graphite.dev',
      },
      sameAs: ['https://twitter.com/gregmfoster', 'https://github.com/gregmfoster'],
    },
    publisher: {
      '@type': 'Person',
      name: 'Greg Foster',
      url: baseUrl,
    },
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Writing',
        item: `${baseUrl}/writing`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/writing">Writing</Link>
      </nav>
      <h1>{post.title}</h1>
      <p className="post-meta">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        • Greg Foster
      </p>
      <article>{content}</article>
      <p>
        <Link href="/">← Home</Link>
      </p>
    </>
  );
}
