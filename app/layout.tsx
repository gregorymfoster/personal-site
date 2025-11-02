import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Personal website and blog',
  metadataBase: new URL('https://yoursite.com'),
  openGraph: {
    title: 'Your Name',
    description: 'Personal website and blog',
    url: 'https://yoursite.com',
    siteName: 'Your Name',
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
