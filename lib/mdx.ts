import fs from 'fs';
import path from 'path';

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

  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(contentDirectory, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const metadata = extractMetadata(content);

      return {
        slug,
        content,
        ...metadata,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

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

  metadataStr.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  });

  return {
    title: metadata.title || 'Untitled',
    date: metadata.date || new Date().toISOString(),
    description: metadata.description || '',
  };
}
