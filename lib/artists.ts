// Roster data. This file is the content contract the CMS will replace:
// keep the shape, swap the source.

export type ArtistType = "DJ" | "Live" | "Band";

export type Artist = {
  slug: string;
  name: string;
  type: ArtistType;
  /** How the act is booked when it isn't a solo set, e.g. "b3b". */
  format?: string;
  genre: string;
  based: string;
  territories: string;
  agent: string;
  bio: string[];
  /** Optional press photo. Without one, a generated poster is rendered. */
  image?: string;
  /** Background and text colour for the placeholder poster. */
  palette: [string, string];
  links: { label: string; href: string }[];
};

export const artists: Artist[] = [
  {
    // Test entry: details below are placeholders to be confirmed.
    slug: "dieglitter",
    name: "dieglitter",
    type: "DJ",
    genre: "Electronic",
    based: "TBC",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: [
      "dieglitter is part of the aa-cr roster. Full biography coming soon.",
    ],
    palette: ["#1f1f1e", "#e9e7e1"],
    links: [{ label: "Instagram", href: "https://www.instagram.com/dieglitter/" }],
  },
  {
    // Test entry: details from public event listings, to be confirmed.
    slug: "lamovida",
    name: "LAMOVIDA",
    type: "DJ",
    format: "b3b",
    genre: "TBC",
    based: "Paris",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: [
      "LAMOVIDA is a Latin American collective based in Paris, founded by four friends from Colombia, Bolivia and Mexico.",
      "Its nights give visibility to Latin American talent in the Paris music scene.",
      "Booked as a b3b set between its members.",
    ],
    palette: ["#cfcac0", "#161616"],
    links: [],
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}
