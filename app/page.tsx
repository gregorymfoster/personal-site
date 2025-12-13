import { getBlogPosts } from '@/lib/mdx';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import UrlEncouragement from './UrlEncouragement';

const baseUrl = 'https://gmfoster.com';

export const metadata: Metadata = {
  title: 'Greg Foster',
  description:
    'Cofounder of Graphite. Building the future of code review. Essays on software engineering, startups, and learning.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Greg Foster',
    description:
      'Cofounder of Graphite. Building the future of code review. Essays on software engineering, startups, and learning.',
    url: baseUrl,
    siteName: 'Greg Foster',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gregmfoster',
    site: '@gregmfoster',
  },
};

export default async function Home() {
  const posts = await getBlogPosts();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Greg Foster',
    url: baseUrl,
    image: `${baseUrl}/profile.jpg`,
    jobTitle: 'Cofounder',
    worksFor: {
      '@type': 'Organization',
      name: 'Graphite',
      url: 'https://graphite.dev',
    },
    sameAs: [
      'https://x.com/gregmfoster',
      'https://www.linkedin.com/in/gregmfoster/',
      'https://github.com/gregmfoster',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <UrlEncouragement />
      <Image
        src="/profile.jpg"
        alt="Greg Foster"
        width={200}
        height={200}
        className="profile-image"
        style={{ height: 'auto' }}
        priority
      />
      <h1>Greg Foster</h1>
      <p>
        I'm one of the cofounders of{' '}
        <a href="https://graphite.com" target="_blank" rel="noopener noreferrer">
          Graphite
        </a>
        , where I obsess about the future of code review and code collaboration broadly.
      </p>
      <section>
        <h2>Some things I wrote</h2>
        <ul className="link-list">
          {posts
            .filter((post) =>
              [
                'founder-dissonances',
                'three-rules-for-naming-projects',
                'invention-of-modern-ci',
                'why-facebook-doesnt-use-git',
                'github-monopoly-on-code-hosting',
                'onboarding-roulette',
                'are-you-having-any-fun',
              ].includes(post.slug)
            )
            .map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </section>
      <section>
        <h2>Reflections</h2>
        <ul className="link-list">
          {posts
            .filter((post) =>
              ['how-i-learned-to-code', 'campus-cutie-2017', 'starting-graphite'].includes(
                post.slug
              )
            )
            .map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </section>
      <section>
        <h2>Links</h2>
        <ul className="link-list">
          <li>
            <a href="https://smalldiffs.gmfoster.com/" target="_blank" rel="noopener noreferrer">
              Blog - more things I wrote
            </a>
          </li>
          <li>
            <a href="https://x.com/gregmfoster" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gregmfoster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Random</h2>
        <ul className="link-list">
          <li>
            <a
              href="https://www.reddit.com/domain/graphite.dev/top/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Love and hate from Reddit
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
