# Personal Website - Claude Context

This is a minimal personal website with a blog, built for simplicity and performance.

## Project Overview

A static personal website with MDX-powered blog posts, designed with a clean aesthetic inspired by nat.org and rauchg.com. The site is optimized for Vercel deployment and emphasizes fast load times, clean typography, and minimal dependencies.

## Writing Style Guide

This section defines the voice, tone, and structure for all blog posts. Follow these patterns when writing or editing content.

### Voice & Tone

**First-person, conversational.** Write like you're explaining something to a smart friend over coffee. Not academic, not corporate, not performative.

**Personal and specific.** Ground abstract ideas in concrete experience. Name people, companies, tools. Say "When I was at Airbnb..." not "In my experience at large tech companies..."

**Opinionated but not preachy.** Share strong views, but acknowledge uncertainty. Phrases like "I think", "I suspect", "I'm on the fence about" are good. Avoid lecturing.

**Self-aware, occasionally self-deprecating.** Acknowledge your own limitations ("I'm dyslexic", "I was the only one wearing a suit"). Don't take yourself too seriously.

**Direct.** Short declarative sentences. Say what you mean. "Git was slow. Not cripplingly slow, but slow enough to investigate."

### Structure

**Open with a hook or personal context.** Don't start with an abstract thesis. Start with a story, a question, or a concrete observation.

Good: "I moved homes every three years growing up because my father worked in manufacturing."
Good: "It's very interesting to know not just what code does, but why and how it was created."
Bad: "In this post, I will explore the concept of..."
Bad: "Software development has many challenges..."

**Use ## headers to break up longer pieces.** Headers should be short - questions or declarative statements work well. They help readers scan and provide natural breathing room.

**Keep paragraphs short.** Rarely more than 3-4 sentences. Single-sentence paragraphs are fine for emphasis.

**Ground abstract ideas in history or story.** Before proposing something new, trace how we got here. Technical posts often work as "here's the history, here's what's missing, here's an idea."

**End with reflection, not summary.** Don't recap. Either look forward, acknowledge uncertainty, or land on a memorable closing thought.

### Formatting Conventions

**Italics:** Use `_underscores_` for emphasis, not `*asterisks*`.

**Parenthetical asides:** Use spaced hyphens, not em dashes.
- Good: "the value - even if chaotic - increases"
- Bad: "the value—even if chaotic—increases"

**Blockquotes:** Use for external sources, quotes from others, or to set apart key statements.

**Code blocks:** Use for technical examples. Keep them short and purposeful.

**Images:** Include when they add value (screenshots, diagrams). Always add alt text. Format: `![Description](/images/filename.png)`

**Links:** Embed naturally in text. Don't say "click here" - make the linked text meaningful.

**Lists:** Use sparingly. Prose is usually better. Lists work for:
- Rules or criteria (like "Three Rules for Naming Projects")
- Timelines
- Quick examples

### What to Avoid

**Corporate speak.** No "leverage", "synergy", "at the end of the day", "it goes without saying."

**Marketing language.** No hype, no superlatives, no "revolutionary" or "game-changing."

**Over-hedging.** Don't qualify every statement. Have opinions.

**Bullet-point listicles.** This isn't a Medium growth-hack article.

**Clickbait.** Titles should be clear and honest, not sensational.

**Excessive formality.** No "one might argue" or "it is worth noting that."

**Emojis in prose.** Occasionally fine in titles or special contexts, but generally avoid.

### Example Patterns

**Opening a technical history piece:**
> I've been writing code since high school. I have faint memories of creating an Android game with a friend using Tortoise SVM to share code. At college, I learned to clone GitHub repos...

**Expressing uncertainty:**
> I'm still on the fence about naming. My first instinct was to name files by commit SHA - but then I realized...

**Making a strong claim with nuance:**
> Founders say one thing and do another. Almost all of us. Not because we're liars, but because certain things sound right to investors, candidates, customers, and competitors.

**Ending a piece:**
> As more code originates from conversations with AI, the conversation becomes part of the artifact. Git is where we keep artifacts. Providence belongs there too.

### Content Themes

The blog covers:
- **Developer tools and workflows** - Git, code review, CI/CD, stacked diffs
- **Startup building** - founding Graphite, company culture, founder psychology
- **Personal stories** - how I learned to code, college experiences, career path
- **Technical history** - how tools evolved, why things are the way they are

Posts often blend multiple themes. A technical history piece might include personal anecdotes. A startup culture piece might reference technical decisions.

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
