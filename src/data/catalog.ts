export type CatalogEntry = {
  slug: string;
  term: string;
  native: string;
  language: string;
  region: string;
  gloss: string;
  summary: string;
  whyGenericFails: string;
  diplomaticNote: string;
  caution: string;
};

/**
 * Illustrative sample entries only.
 * These are well-known cultural concepts used to show the catalog form.
 * They are not completed CAV monographs and do not invent citations.
 */
export const catalogEntries: CatalogEntry[] = [
  {
    slug: "philotimo",
    term: "Philotimo",
    native: "φιλότιμο",
    language: "Greek",
    region: "Greece and the Greek-speaking world",
    gloss: "A love of honor that obliges generous, fitting action even when no rule requires it.",
    summary:
      "Philotimo names a moral pressure that is neither mere pride nor generic kindness. It is the felt duty to act in a way that keeps faith with one's name, household, and community — especially when the cost is private and the witness is few.",
    whyGenericFails:
      "English words such as honor, pride, or generosity travel, but they split what philotimo holds together: reputation as an ethical organ, not a public-relations asset. To say someone 'was kind' flattens the specific shame of failing to rise to an unasked obligation.",
    diplomaticNote:
      "In mediation, an appeal to 'respect' may miss the local grammar of honor. A philotimo-literate reading asks what unstated duty a party believes they have already fulfilled — or been denied the chance to fulfill.",
    caution:
      "Philotimo is lived and argued over in Greek. This note is a working sketch, not a definition for Greeks.",
  },
  {
    slug: "amae",
    term: "Amae",
    native: "甘え",
    language: "Japanese",
    region: "Japan",
    gloss: "The cultivated capacity to presume upon another's goodwill, and to receive that presumption with skill.",
    summary:
      "Amae is often reduced to dependence or spoiling. In ordinary Japanese use it can name a valued interpersonal intelligence: knowing when it is right to lean, and how to make leaning livable for the other person. The concept became widely discussed in English after Takeo Doi's 1971 book The Anatomy of Dependence — a public, well-known source, not a CAV finding.",
    whyGenericFails:
      "Independence, boundaries, and 'healthy attachment' are useful clinical English. They still treat leaning as a deficit to be managed. Amae can describe a competence: the art of being received.",
    diplomaticNote:
      "Negotiators trained only in assertive clarity may hear a request for care as weakness or manipulation. An amae-literate reading asks whether the relationship is being asked to hold something that a contract cannot.",
    caution:
      "Amae is not a national personality. Japanese speakers disagree about its scope, valence, and contemporary relevance.",
  },
  {
    slug: "sisu",
    term: "Sisu",
    native: "sisu",
    language: "Finnish",
    region: "Finland",
    gloss: "Extraordinary perseverance after ordinary endurance has already run out.",
    summary:
      "Sisu is a Finnish word for a stubborn, embodied stamina that appears when the reasonable stopping point has passed. It is closer to a moral-emotional weather than to a productivity slogan. It can be admired and also costly.",
    whyGenericFails:
      "Grit, resilience, and toughness travel easily. They also invite cheerleading. Sisu is more specific: it names a second wind that is not optimism, and a refusal that is not always wise.",
    diplomaticNote:
      "In prolonged talks or post-conflict recovery, praising 'resilience' can sound like a demand to absorb more harm. Naming sisu more carefully distinguishes endurance that is chosen from endurance that is extracted.",
    caution:
      "Sisu is often used in Finnish public culture and sport. Popular English accounts tend to make it a brand. CAV treats it as a concept under study, not a national mascot.",
  },
  {
    slug: "hozho",
    term: "Hózhǫ́",
    native: "Hózhǫ́",
    language: "Diné Bizaad (Navajo)",
    region: "Diné / Navajo Nation and Diné communities",
    gloss: "A lived condition of beauty, harmony, and right relation — often glossed as walking in beauty.",
    summary:
      "Hózhǫ́ is a central Diné concept. English often reaches for beauty, balance, or peace, then stops. Those words do not carry the way hózhǫ́ binds aesthetics, ethics, health, and relation into one field of practice.",
    whyGenericFails:
      "Harmony and wellness are portable and thin. They can be pasted onto any program. Hózhǫ́ is not a wellness brand. It belongs to a language, a people, and a set of ceremonies and everyday disciplines that CAV does not pretend to own.",
    diplomaticNote:
      "Policy language that offers 'balance' or 'respect for culture' can still treat Diné life as decoration on a generic framework. A more precise approach starts by asking what restoration would have to look like in Diné terms — and who is authorized to say.",
    caution:
      "This is an illustrative placeholder. Any later CAV entry would be developed only with Diné guidance, and some knowledge is not ours to catalog.",
  },
  {
    slug: "fingerspitzengefuhl",
    term: "Fingerspitzengefühl",
    native: "Fingerspitzengefühl",
    language: "German",
    region: "German-speaking Europe; later borrowed into military and diplomatic English",
    gloss: "Tact as a fingertip sense: knowing, without a rule, when pressure should increase, ease, or change form.",
    summary:
      "The German compound literally suggests feeling at the fingertips. In use it names a situational intelligence — political, social, or operational — that cannot be fully written as procedure. English borrowed the word in part because 'tact' and 'instinct' were not enough.",
    whyGenericFails:
      "Tact can sound like manners. Instinct can sound like bias. Gut can sound anti-intellectual. Fingerspitzengefühl keeps the bodily metaphor and the claim of trained judgment in one term.",
    diplomaticNote:
      "Institutions under pressure reach for checklists. A fingerspitzengefühl-literate practice does not reject procedure; it marks the moment when following the script would be a moral failure of timing.",
    caution:
      "The word has a history in German and in English-language military writing. It is not a free-floating compliment, and it can be used to excuse unaccountable discretion.",
  },
];

export function getEntry(slug: string): CatalogEntry | undefined {
  return catalogEntries.find((entry) => entry.slug === slug);
}
