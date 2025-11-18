# Personal Website

A simple, modern personal website built with Next.js 15, featuring a blog powered by MDX.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **MDX** - Blog posts with Markdown + React components
- **Biome** - Fast linting and formatting
- **Node.js 22** - Latest LTS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Writing Blog Posts

Create new MDX files in `content/blog/`:

```mdx
---
title: Your Post Title
date: 2025-01-15
description: A brief description
---

Your content here...
```

## Customization

1. Update personal info in `app/page.tsx`
2. Update metadata in `app/layout.tsx`
3. Change the base URL in `app/sitemap.ts` and `app/robots.ts`
4. Add your own blog posts in `content/blog/`

## Deployment

This site is configured for Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (Vercel will auto-detect Next.js)

The site uses Node.js 22 (specified in `.nvmrc`), which Vercel will automatically use.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code with Biome
- `npm run format` - Format code with Biome
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Testing

The project includes simple tests using Vitest and React Testing Library to verify:

- Blog posts load correctly with valid metadata
- Pages render without errors
- Core functionality works as expected

Run `npm test` to verify everything is working.
