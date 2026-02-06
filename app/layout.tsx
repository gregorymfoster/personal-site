import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://gmfoster.com';

export const metadata: Metadata = {
  title: 'Greg Foster',
  description: 'Cofounder of Graphite. Building the future of code review.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'Greg Foster RSS Feed' }],
    },
  },
  openGraph: {
    title: 'Greg Foster',
    description: 'Cofounder of Graphite. Building the future of code review.',
    url: baseUrl,
    siteName: 'Greg Foster',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Greg Foster',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gregfoster996',
    site: '@gregfoster996',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Greg Foster',
  url: 'https://gmfoster.com',
  jobTitle: 'Cofounder',
  worksFor: {
    '@type': 'Organization',
    name: 'Graphite',
    url: 'https://graphite.dev',
  },
  sameAs: ['https://twitter.com/gregfoster996', 'https://github.com/gregfoster996'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Greg Foster',
  url: 'https://gmfoster.com',
  author: {
    '@type': 'Person',
    name: 'Greg Foster',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
