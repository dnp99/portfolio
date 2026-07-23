# Deep Patel Portfolio

Portfolio for Deep Patel, a senior software engineer in Toronto focused on
distributed systems, cloud infrastructure, and dependable product delivery.

**Live site:** [dnp99.github.io/portfolio](https://dnp99.github.io/portfolio)

## Featured Work

- **Routefy** - healthcare route planning with time-window optimization and
  PHI-safe client architecture.
- **Sprout** - personal budgeting with natural-language expense capture and
  duplicate-safe imports.
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

## Editing Content

Profile copy, projects, experience, contact links, and the resume filename are all configured in
[`content/portfolio.ts`](content/portfolio.ts).

### Add or Edit a Project

Edit the `projects` array. Project numbering is generated from the array order,
so no manual renumbering is needed. A project looks like this:

```ts
{
  slug: "project-name",
  name: "Project Name",
  type: "Short project category",
  description: "What the product does and why it matters.",
  proof: ["Outcome one", "Outcome two", "Outcome three"],
  stack: "React / TypeScript / Postgres",
  links: [
    { label: "Live product", href: "https://example.com" },
    { label: "View source", href: "https://github.com/dnp99/example" },
  ],
  screenshot: {
    src: "/projects/project-name.png",
    alt: "A concise description of the product screen",
  },
  visual: "generic",
}
```

Store project screenshots in `public/projects/`. The optional `position`
property accepts any CSS `object-position` value when a screenshot needs a
different crop. Available fallback visuals are `"route"`, `"budget"`, and
`"generic"`; they are used when `screenshot` is omitted. Remove a project by
deleting its object from the array.

### Update Experience

Edit the `experience` array to update roles and achievements. Each role has a
summary, an `achievements` list, and a `technologies` list; keep the strongest
measurable outcomes near the top.

### Replace the Resume

Place the new PDF in `public/`, then update `resume.fileName` in
`content/portfolio.ts`. Keeping the filename `Deep-Patel-Resume.pdf` means you
can simply replace the existing PDF without changing code.

## Deployment

Pushes to `main` automatically build and deploy through
`.github/workflows/deploy.yml`.
