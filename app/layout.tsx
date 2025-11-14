import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Greg Foster',
  description: 'Cofounder of Graphite. Building the future of code review.',
  metadataBase: new URL('https://gmfoster.com'),
  openGraph: {
    title: 'Greg Foster',
    description: 'Cofounder of Graphite. Building the future of code review.',
    url: 'https://gmfoster.com',
    siteName: 'Greg Foster',
    locale: 'en_US',
    type: 'website',
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
