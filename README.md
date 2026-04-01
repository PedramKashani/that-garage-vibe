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

### Environment variables on Vercel (Sender newsletter)

Vite replaces `import.meta.env.VITE_*` **at build time**. Local `.env` is not used on Vercel unless you wire it differently.

1. In the Vercel project: **Settings → Environment Variables**.
2. Add the same keys as in `.env.example` (`VITE_SENDER_ACCOUNT_ID`, `VITE_SENDER_FORM_ID`, and optionally `VITE_SENDER_EMBED_SCRIPT_URL`), for **Production** (and **Preview** if you use it).
3. **Redeploy** (or trigger a new build). Editing env vars alone does not update an already-built bundle.

The embed also expects **`VITE_SENDER_ACCOUNT_ID`** to be set when using Sender’s script: `window.sender(accountId)` is only called when that value exists, even if a form ID is set.
