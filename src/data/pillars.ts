/**
 * Canonical order and short labels for the CAV research pillars, as they
 * appear in catalog frontmatter (`pillars: [...]`). Used by the Moral
 * Landscape figure. Any pillar found in the data but missing here is
 * appended at the end so nothing is silently dropped.
 */
export const PILLAR_ORDER: { name: string; short: string }[] = [
  { name: "Ethno-Ethics", short: "Ethno" },
  { name: "Sacred Axiology", short: "Sacred" },
  { name: "Semantic Ethics", short: "Semantic" },
  { name: "Chronological Ethics", short: "Chrono" },
  { name: "Practice", short: "Practice" },
];

export function pillarColumns(tagged: string[][]): { name: string; short: string }[] {
  const seen = new Set(tagged.flat());
  const known = PILLAR_ORDER.filter((p) => seen.has(p.name) || p.name !== "Practice" || seen.has("Practice"));
  const extra = [...seen]
    .filter((name) => !PILLAR_ORDER.some((p) => p.name === name))
    .map((name) => ({ name, short: name }));
  return [...known, ...extra];
}

/** Rotating specimen band colors for catalog cards (all pass WCAG AA with their text color). */
export const SPECIMEN_BANDS = ["navy", "oxblood", "teal", "plum", "slate", "sand"] as const;
