import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const baseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001' 
  : 'https://gmfoster.com';

export const metadata: Metadata = {
  title: 'Greg Foster',
  description: 'Cofounder of Graphite. Building the future of code review.',
  metadataBase: new URL(baseUrl),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
