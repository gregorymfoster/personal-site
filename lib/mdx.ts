import fs from 'node:fs';
import path from 'node:path';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const folders = fs.readdirSync(contentDirectory, { withFileTypes: true });
  const posts = folders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const slug = dirent.name;
      const filePath = path.join(contentDirectory, slug, 'index.mdx');

      if (!fs.existsSync(filePath)) {
        return null;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const metadata = extractMetadata(content);

      return {
        slug,
        content,
        ...metadata,
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, slug, 'index.mdx');

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = extractMetadata(content);

  return {
    slug,
    content,
    ...metadata,
  };
}

function extractMetadata(content: string): {
  title: string;
  date: string;
  description: string;
} {
  const metadataMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!metadataMatch) {
    return {
      title: 'Untitled',
      date: new Date().toISOString(),
      description: '',
    };
  }

  const metadataStr = metadataMatch[1];
  const metadata: Record<string, string> = {};

  for (const line of metadataStr.split('\n')) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  }

  return {
    title: metadata.title || 'Untitled',
    date: metadata.date || new Date().toISOString(),
    description: metadata.description || '',
  };
}
