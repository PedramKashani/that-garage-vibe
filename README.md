# That Garage Vibe

Marketing site for the collective — React, Vite, TypeScript, Tailwind CSS, React Router.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ (LTS recommended)
- npm (ships with Node)

## Setup

```bash
npm install
cp .env.example .env
```

Edit `.env` with your Sender newsletter values (see comments in `.env.example`). The site runs without them; the newsletter block shows a “not configured” message until IDs are set.

## Development

```bash
npm run dev
```

Opens the Vite dev server (default [http://localhost:5173](http://localhost:5173)).

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Deploy

Static export in `dist/` is suitable for hosts like Vercel. The repo includes `vercel.json` with SPA rewrites so client-side routes (e.g. `/artists/:id`) work on refresh.
