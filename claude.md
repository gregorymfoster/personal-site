# Personal Website - Claude Context

This is a minimal personal website with a blog, built for simplicity and performance.

## Project Overview

A static personal website with MDX-powered blog posts, designed with a clean aesthetic inspired by nat.org and rauchg.com. The site is optimized for Vercel deployment and emphasizes fast load times, clean typography, and minimal dependencies.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Content**: MDX (Markdown + React components)
- **Styling**: Vanilla CSS (no frameworks)
- **Linting/Formatting**: Biome (fast, zero-config)
- **Runtime**: Node.js 22 (LTS)
- **Deployment**: Vercel

## Architecture

### File Structure

```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with SEO metadata
├── page.tsx           # Home page
├── globals.css        # Site-wide minimal styles
├── sitemap.ts         # Dynamic sitemap generation
├── robots.ts          # SEO robots.txt
└── blog/              # Blog routes
    ├── page.tsx       # Blog listing page
    └── [slug]/
        └── page.tsx   # Individual blog post page

content/
└── blog/              # MDX blog posts (frontmatter + content)

lib/
└── mdx.ts            # Blog post utilities (reading, parsing)
```

### Rendering Strategy

- **Static Generation**: All pages are pre-rendered at build time
- **No Server Components Runtime**: Pure static output for maximum performance
- **Dynamic Sitemap**: Automatically generated from blog posts

## Design System

### Typography
- **Font**: System fonts (-apple-system stack)
- **Base size**: 16px
- **Line height**: 1.6 (body), 1.2-1.3 (headings)
- **Font weights**: 400 (regular), 600 (headings)

### Layout
- **Max width**: 650px (centered)
- **Padding**: 20px horizontal, 50px top margin
- **Spacing**: Generous whitespace between elements

### Colors
- **Text**: #000 (primary), #666 (secondary), #333 (tertiary)
- **Background**: #fff
- **Links**: #0070f3 (blue)
- **Code background**: #f5f5f5

### Design Philosophy
Keep it simple. No animations, no complex layouts, no unnecessary JavaScript. The design should get out of the way and let the content shine.

## Development Conventions

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter (required fields):
   ```yaml
   ---
   title: Post Title
   date: YYYY-MM-DD
   description: Brief description for SEO
   ---
   ```
3. Write content in Markdown or MDX
4. Blog posts are automatically:
   - Listed on `/blog` (sorted by date, newest first)
   - Added to sitemap
   - Given proper SEO metadata

### File Naming
- Blog posts: `kebab-case.mdx` (e.g., `hello-world.mdx`)
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`

### Code Style
- Use Biome for formatting (configured in `biome.json`)
- 2-space indentation
- Single quotes for strings
- 100 character line width
- ES5 trailing commas

### TypeScript
- Strict mode enabled
- Explicit return types for public functions
- Use Next.js types (`Metadata`, `MetadataRoute`, etc.)
- No `any` types unless absolutely necessary

## Key Components

### Blog Post Utilities (`lib/mdx.ts`)

**`getBlogPosts()`**
- Reads all `.mdx` files from `content/blog/`
- Extracts frontmatter metadata
- Returns sorted array (newest first)
- Used by: blog listing page, sitemap

**`getBlogPost(slug: string)`**
- Reads single blog post by slug
- Returns post data or null
- Used by: individual blog post pages

### Metadata Conventions

Every page should export:
- `metadata` object (for SEO, Open Graph)
- `generateMetadata()` function for dynamic pages

Example:
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

## Common Tasks

### Update Personal Information
- **Name & bio**: `app/page.tsx`
- **Site metadata**: `app/layout.tsx` (lines 4-18)
- **Base URL**: Update in `app/sitemap.ts` and `app/robots.ts`

### Add New Page
1. Create `app/new-page/page.tsx`
2. Add to sitemap in `app/sitemap.ts`
3. Link from home page or navigation

### Modify Styles
- Global styles: `app/globals.css`
- Keep changes minimal and purposeful
- Test mobile responsiveness (320px - 1920px)

### Deploy
1. Push to GitHub
2. Import in Vercel (or run `vercel` CLI)
3. Vercel auto-detects Next.js and Node.js 22 (from `.nvmrc`)

## Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (test before deploying)
npm start        # Serve production build
npm run lint     # Check code with Biome
npm run format   # Auto-format with Biome
```

## Important Notes

### What NOT to Do
- Don't add CSS frameworks (Tailwind, Bootstrap, etc.) - defeats the minimal purpose
- Don't add complex state management - this is a static site
- Don't add analytics without user consent mechanisms
- Don't add dark mode unless explicitly requested
- Don't create pages in `pages/` directory - this uses App Router only

### Performance Targets
- First Load JS: < 110 kB per page
- Lighthouse Score: 95+ for all metrics
- All pages should be static (○ or ●, not λ)

### SEO Checklist
- Every page has unique `title` and `description`
- Open Graph tags for social sharing
- Sitemap includes all pages
- robots.txt allows indexing
- Semantic HTML (proper heading hierarchy)

## Troubleshooting

**Build fails with MDX errors**
- Check frontmatter format (must be valid YAML)
- Ensure closing `---` in frontmatter
- Verify no special characters in filenames

**Styles not applying**
- Check `globals.css` is imported in `layout.tsx`
- Verify CSS selectors match HTML structure
- Clear `.next` cache: `rm -rf .next && npm run build`

**Blog posts not appearing**
- Ensure files are in `content/blog/` directory
- Check `.mdx` extension (not `.md`)
- Verify frontmatter has required fields

## Future Enhancements (Potential)

If the user requests them:
- RSS feed generation
- Reading time estimates
- Tag/category system for blog posts
- Dark mode toggle
- Vercel Analytics integration
- Full-text search

Keep additions minimal and purposeful. Every feature should justify its existence.
