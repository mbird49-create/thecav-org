# thecav.org

Public website for **The Center for the Study of Anomalous Virtues (CAV)** — a private research organization that maps, analyzes, and synthesizes the philosophical and ethical underpinnings of moral values across human demographics, at the intersection of computational humanities, comparative philosophy, and evolutionary ethics.

- Site: [thecav.org](https://thecav.org)
- Also: [cav.ngo](https://cav.ngo)
- Repo: [github.com/mbird49-create/thecav-org](https://github.com/mbird49-create/thecav-org)

## Stack

**Astro 5** (static) + **TypeScript** (strict) + **Tailwind CSS 4** via `@tailwindcss/vite`.

Astro is the static-site default here: no client JavaScript unless a page opts in, fast first paint, ordinary HTML that can be hosted on Vercel (or any static host). Tailwind 4 is wired as a Vite plugin, not the legacy `@astrojs/tailwind` integration.

| Path | Role |
| --- | --- |
| `src/pages/` | Routes: Home, About, Catalog, Research, Practice, Join |
| `src/content/catalog/*.md` | Catalog entries (Astro content collection; schema in `src/content.config.ts`) |
| `src/data/catalog.ts` | Catalog groups and sorting helpers |
| `src/layouts/BaseLayout.astro` | Document shell, fonts, metadata |
| `src/styles/global.css` | Tailwind import and journal theme tokens |

## Local development

Requires **Node.js 20.19+** (Node 22+ is fine).

```bash
git clone https://github.com/mbird49-create/thecav-org.git
cd thecav-org
npm install
npm run build
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
5. **cav.ngo** 301-redirects to https://www.thecav.org via a Porkbun URL forward.
6. Each push to `main` deploys. Preview deployments are created for other branches.

No environment variables are required for the first version.

## Content notes

- Research pillars: Ethno-Ethics, Sacred Axiology, Semantic Ethics, Chronological Ethics; Practice is applied engagement.
- Catalog entries are sourced and **under ongoing review**. Keep Evidence/Interpretation labels, `[uncertain]` tags, and sources exactly as researched; never add invented citations.
- Do not claim federal tax-exempt / 501(c)(3) status, deductible donations, an EIN, or Form 1023-EZ filing/determination on public copy until IRS confirmation is independently verified.
- Community-sensitive entries (for example Hózhǫ́) carry a `status` such as "Under community review" pending review by the communities who hold the terms.

## License

Site source is private to the organization unless a later license is added.
