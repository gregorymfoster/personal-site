import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = 'https://gmfoster.com';

export const metadata: Metadata = {
  title: 'Personal Sites I Love - Greg Foster',
  description: 'A collection of personal websites that inspire me.',
  alternates: {
    canonical: `${baseUrl}/sites`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

interface Site {
  url: string;
  name: string;
  description: string;
}

const sites: Site[] = [
  {
    url: 'https://brianlovin.com/',
    name: 'Brian Lovin',
    description:
      'Software designer at Notion. Beautiful dark theme, dense information architecture, and a great example of how to showcase projects and work history.',
  },
];

export default function SitesPage() {
  return (
    <>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
      </nav>
      <h1>Personal Sites I Love</h1>
      <p>
        A collection of personal websites that inspire me. These sites nail the balance between
        personality and professionalism, with thoughtful design choices that make them memorable.
      </p>
      <ul className="site-list">
        {sites.map((site) => (
          <li key={site.url}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              {site.name}
            </a>
            <p className="site-description">{site.description}</p>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">← Home</Link>
      </p>
    </>
  );
}
