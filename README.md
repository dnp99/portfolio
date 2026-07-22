# Deep Patel Portfolio

Portfolio for Deep Patel, a senior software engineer in Toronto focused on
distributed systems, cloud infrastructure, and dependable product delivery.

**Live site:** [dnp99.github.io/portfolio](https://dnp99.github.io/portfolio)

## Featured Work

- **Routefy** - healthcare route planning with time-window optimization and
  PHI-safe client architecture.
- **Sprout** - personal budgeting with natural-language expense capture and
  duplicate-safe imports.
- **The Block** - bilingual vehicle auction experience with grounded AI search
  and condition summaries.

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Static export hosted on GitHub Pages

## Local Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Build the production-ready static site:

```bash
npm run build
```

The exported site is written to `out/` and uses `/portfolio` as its production
base path.

## Deployment

Pushes to `main` automatically build and deploy through
`.github/workflows/deploy.yml`.
