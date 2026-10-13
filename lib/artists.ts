// Placeholder roster. This file is the content contract the CMS will replace:
// keep the shape, swap the source.

export type ArtistType = "DJ" | "Live" | "Band";

export type Artist = {
  slug: string;
  name: string;
  type: ArtistType;
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
    name: "Dieglitter",
    type: "DJ",
    genre: "Electronic",
    based: "TBC",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: [
      "Dieglitter is part of the aa-cr roster. Full biography coming soon.",
    ],
    palette: ["#1f1f1e", "#e9e7e1"],
    links: [{ label: "Instagram", href: "https://www.instagram.com/dieglitter/" }],
  },
  {
    slug: "vanta-mother",
    name: "Vanta Mother",
    type: "Live",
    genre: "Industrial / Noise",
    based: "Berlin",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: [
      "Vanta Mother builds rooms out of feedback. Modular rigs, contact mics and a refusal to play the same set twice.",
      "Sets run long, loud and without a safety net.",
    ],
    palette: ["#d9d6cf", "#161616"],
    links: [
      { label: "Instagram", href: "#" },
      { label: "Bandcamp", href: "#" },
    ],
  },
  {
    slug: "saint-concrete",
    name: "Saint Concrete",
    type: "DJ",
    genre: "Hard Techno",
    based: "Mexico City",
    territories: "Americas",
    agent: "aa-cr booking",
    bio: [
      "Warehouse sermons at 150 bpm. Saint Concrete came up through the CDMX underground and never looked back.",
    ],
    palette: ["#2a2a28", "#e9e7e1"],
    links: [
      { label: "Instagram", href: "#" },
      { label: "SoundCloud", href: "#" },
    ],
  },
  {
    slug: "nil-by-mouth",
    name: "Nil By Mouth",
    type: "Band",
    genre: "Post-Punk",
    based: "London",
    territories: "UK & Europe",
    agent: "aa-cr booking",
    bio: [
      "Four people, two chords, zero apologies. Nil By Mouth play like the venue owes them money.",
    ],
    palette: ["#c9c4b8", "#161616"],
    links: [
      { label: "Instagram", href: "#" },
      { label: "Spotify", href: "#" },
    ],
  },
  {
    slug: "loud-ghost",
    name: "Loud Ghost",
    type: "DJ",
    genre: "Breaks / Electro",
    based: "Bogotá",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: [
      "Broken rhythms, sharp edges. Loud Ghost dismantles the four-to-the-floor and rebuilds it sideways.",
    ],
    palette: ["#8e8b84", "#f3f2ee"],
    links: [{ label: "Instagram", href: "#" }],
  },
  {
    slug: "hex-and-dirt",
    name: "Hex & Dirt",
    type: "Live",
    genre: "EBM / Darkwave",
    based: "Brussels",
    territories: "Europe",
    agent: "aa-cr booking",
    bio: [
      "A duo with one drum machine, one synth and one shared grudge against polite music.",
    ],
    palette: ["#e4e1da", "#161616"],
    links: [{ label: "Bandcamp", href: "#" }],
  },
  {
    slug: "cold-receipt",
    name: "Cold Receipt",
    type: "DJ",
    genre: "Hardgroove",
    based: "Madrid",
    territories: "Europe & LATAM",
    agent: "aa-cr booking",
    bio: ["Relentless percussion, filthy loops, no breakdowns longer than a breath."],
    palette: ["#3d3c39", "#e9e7e1"],
    links: [{ label: "Instagram", href: "#" }],
  },
  {
    slug: "the-unsaid",
    name: "The Unsaid",
    type: "Band",
    genre: "Noise Rock",
    based: "San José",
    territories: "Worldwide",
    agent: "aa-cr booking",
    bio: ["Born in a rehearsal room with no windows. It shows."],
    palette: ["#b5b0a5", "#161616"],
    links: [{ label: "Spotify", href: "#" }],
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}
