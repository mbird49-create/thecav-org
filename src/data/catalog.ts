import { getCollection, type CollectionEntry } from "astro:content";

export type CatalogEntry = CollectionEntry<"catalog">;
export type CatalogGroupId = CatalogEntry["data"]["group"];

export type CatalogGroup = {
  id: CatalogGroupId;
  title: string;
  description: string;
};

/** Index groups, in display order. */
export const catalogGroups: CatalogGroup[] = [
  {
    id: "forgiveness",
    title: "Forgiveness and reconciliation",
    description:
      "Thick, culturally specific forms of forgiveness and settlement after harm. Each links to the comparative study",
  },
  {
    id: "virtues",
    title: "Honor, dependence, endurance",
    description:
      "Untranslatable virtue-words under Linguistic Relativity in Morals (Semantic Ethics), where portable English names leave a remainder.",
  },
];

export const FORGIVENESS_STUDY = {
  href: "/research/forgiveness-as-anomalous-virtue/",
  title: "Has Forgiveness Been Forgotten?",
};

/**
 * Published catalog entries only, in display order. Entries with
 * `published: false` are held: never pass them to getStaticPaths, the index,
 * the home page, or any related-entry list. Every renderer goes through here.
 */
export async function getCatalogEntries(): Promise<CatalogEntry[]> {
  const entries = await getCollection("catalog", ({ data }) => data.published !== false);
  const groupOrder = catalogGroups.map((g) => g.id);
  return entries.sort(
    (a, b) =>
      groupOrder.indexOf(a.data.group) - groupOrder.indexOf(b.data.group) ||
      a.data.order - b.data.order,
  );
}

export function groupTitle(id: CatalogGroupId): string {
  return catalogGroups.find((g) => g.id === id)?.title ?? "";
}
