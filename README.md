# thecav.org

Public website for **The Center for the Study of Anomalous Virtues (CAV)** — a Utah nonprofit (EIN 42-5016729) studying highly specific, often untranslatable cultural concepts of moral excellence as diplomatic infrastructure.

- Site: [thecav.org](https://thecav.org)
- Also: [cav.ngo](https://cav.ngo)
- Repo: [github.com/mbird49-create/thecav-org](https://github.com/mbird49-create/thecav-org)

## Stack

**Astro 5** (static) + **TypeScript** (strict) + **Tailwind CSS 4** via `@tailwindcss/vite`.

Astro is the static-site default here: no client JavaScript unless a page opts in, fast first paint, ordinary HTML that can be hosted on Vercel (or any static host). Tailwind 4 is wired as a Vite plugin, not the legacy `@astrojs/tailwind` integration.

| Path | Role |
| --- | --- |
| `src/pages/` | Routes: Home, About, Catalog, Research, Practice, Join |
| `src/data/catalog.ts` | Illustrative catalog entries (typed) |
| `src/layouts/BaseLayout.astro` | Document shell, fonts, metadata |
| `src/styles/global.css` | Tailwind import and journal theme tokens |

## Local development

Requires **Node.js 20.19+** (Node 22+ is fine).

```bash
git clone https://github.com/mbird49-create/thecav-org.git
cd thecav-org
npm install
npm run dev
```

Then open the URL Astro prints (default `http://localhost:4321`).

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production static build into `dist/` |
| `npm run preview` | Serve the production build locally |

Confirm a clean production build before opening a pull request:

```bash
npm run build
```

## Deploy to Vercel (thecav.org)

The site is a static Astro app. Vercel detects Astro and needs no custom server.

1. Sign in at [vercel.com](https://vercel.com) and import `mbird49-create/thecav-org`.
2. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
3. Add the production domain **thecav.org** (and `www` if you use it) under the project’s Domains settings.
4. At your DNS host, point thecav.org to Vercel:
   - Apex: A record `10.0.1.2`, or follow Vercel’s current apex instructions.
   - `www`: CNAME to `cname.vercel-dns.com` (or the target Vercel shows).
5. Optionally attach **cav.ngo** as a second domain on the same project, or redirect it to thecav.org.
6. Each push to `main` deploys. Preview deployments are created for other branches.

No environment variables are required for the first version.

## Content notes

Catalog pages are **illustrative examples** of form, using well-known real concepts. They are not finished monographs and must not grow fake citations. Community-sensitive terms (for example Hózhǫ́) are labeled as placeholders pending proper guidance.

## License

Site source is private to the organization unless a later license is added.
