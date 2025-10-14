# prayer-book

A small Vite + React + TypeScript starter app for a prayer book UI. It uses Tailwind CSS for styling, Supabase for backend/auth, and Lucide icons.

This README documents how to set up, run, and contribute to the project.

## Features

- Vite + React + TypeScript
- Tailwind CSS for utility-first styling
- Supabase client preinstalled for data/auth (see `.env` notes)
- Lucide icon set

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or yarn / pnpm)

## Install

Install dependencies:

```bash
npm install
```

## Available scripts

The scripts in `package.json` (kept in sync with the project) are:

- `npm run dev` — start the Vite dev server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project
- `npm run typecheck` — run TypeScript type checks (no emit)

Quick start (dev):

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Run the linter:

```bash
npm run lint
```

Type-check only:

```bash
npm run typecheck
```

## Environment

If you integrate Supabase you will typically need to provide environment variables. Create a `.env` (or `.env.local`) file at the project root with:

```env
VITE_SUPABASE_URL=https://your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Notes:
- Variables prefixed with `VITE_` are exposed to client-side code by Vite.
- Keep secret keys out of version control.

## Project structure

Important files and folders:

- `index.html` — Vite entry HTML
- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite configuration
- `tsconfig.app.json`, `tsconfig.json` — TypeScript configuration
- `tailwind.config.js`, `postcss.config.js` — Tailwind/PostCSS
- `src/` — application source
	- `main.tsx` — React entry
	- `App.tsx` — root app component
	- `index.css` — global styles (Tailwind entry)

Explore `src/` to find the UI and component structure. Keep components small and well-tested.

## Contributing

- Use feature branches and open pull requests against `main`.
- Follow existing code style and run `npm run lint` before submitting.
- Add tests or type checks for new behavior when appropriate.

## Notes & next steps

- This README is intentionally general. If you add backend services (Supabase tables, functions) or environment-specific setup, document them here.
- Consider adding a LICENSE file if you want to set project licensing.

## Troubleshooting

- If the dev server fails to start, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Contact

If you need help with this repository, open an issue or contact the repository owner.

---

Generated README for the `prayer-book` project.
# prayer-book
