import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * CAV catalog entries. One markdown file per entry in src/content/catalog/.
 * The file name is the URL slug: /catalog/<slug>/.
 * Entries are sourced and under ongoing review; keep Evidence/Interpretation
 * labels, [uncertain] tags, and sources exactly as researched.
 */
const catalog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/catalog" }),
  schema: z.object({
    /** Full page title (may carry a qualifier, e.g. "Sulha"). */
    title: z.string(),
    /** Short card term for the index. */
    term: z.string(),
    native: z.string(),
    language: z.string(),
    region: z.string(),
    gloss: z.string(),
    pillars: z.array(z.string()).min(1),
    group: z.enum(["forgiveness", "virtues"]),
    order: z.number(),
    status: z.string().optional(),
    /**
     * Set `published: false` to hold an entry: it stays in the repo but is not
     * built, listed, or linked anywhere on the site. Defaults to true.
     */
    published: z.boolean().default(true),
    /**
     * Optional square thumbnail (site-root path to an SVG in
     * public/catalog/thumbs/, e.g. "/catalog/thumbs/philotimo.svg").
     * Entries without one fall back to a neutral CAV frame.
     */
    thumbnail: z.string().optional(),
  }),
});

export const collections = { catalog };
