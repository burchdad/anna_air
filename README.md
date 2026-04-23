# Anna's Air Website

Production-ready Next.js website for Anna's Air with a conversion-focused, mobile-first frontend and editable content architecture.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content Updates (Primary Editing Location)

Update major business details and copy in:

- `src/content/site.ts`

This single file controls:

- business name, phone, license, insured status
- hero copy and CTA labels
- services and pricing (including `$89.00 System Check`)
- testimonials and FAQs
- service areas and supported equipment brands
- trust/legal marketing notes

## Form Integration

The contact form is in:

- `src/components/forms/contact-form.tsx`

Current behavior is frontend-only with validation and success/error UI states.

Integration hook comments are included in the submit handler for connecting to:

- Next.js API routes
- CRM tools
- email/SMS workflows
- scheduling systems

## Image and Brand Asset Swaps

Update image assets in:

- `public/images/`

Current metadata OG image placeholder:

- `public/images/og-annas-air.svg`

Logo treatment currently uses a styled text mark in the header and can be replaced with a brand logo component or image when final assets are available.

## SEO Metadata and Schema

Core metadata helpers live in:

- `src/lib/seo.ts`

Per-page metadata is defined in each route file under:

- `src/app/**/page.tsx`

Local business schema scaffold component:

- `src/components/seo/local-business-schema.tsx`

Sitemap and robots:

- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Adding Future Service-Area Pages

Current service-area route:

- `src/app/service-areas/page.tsx`

To add city-specific SEO pages later, create routes like:

- `src/app/service-areas/anna/page.tsx`
- `src/app/service-areas/mckinney/page.tsx`

Then link them from:

- `src/content/site.ts` (service area list and content)

## Build and Validate

```bash
npm run lint
npm run build
```
