# Held catalog thumbnails

These SVG thumbnails belong to catalog entries that are held (`published: false`).
They live here, outside `public/` and `src/`, so they are never built or deployed.

Each thumbnail stays here until its entry is approved for publication. For the
Diné (Hózhǫ́), Hawaiian (Hoʻoponopono) and Acholi (Mato oput) entries, approval
includes community review of both the entry and its thumbnail.

When an entry is approved:

1. `git mv design/catalog-thumbs-held/<slug>.svg public/catalog/thumbs/<slug>.svg`
2. Restore `thumbnail: "/catalog/thumbs/<slug>.svg"` in
   `src/content/catalog/<slug>.md` frontmatter.

Until then, a held entry has no `thumbnail:` field and falls back to
`public/catalog/thumbs/default.svg` if it is ever rendered.
