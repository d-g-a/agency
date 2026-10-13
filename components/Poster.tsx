import type { Artist } from "@/lib/artists";

/** Press photo (duotoned) if present, otherwise a generated typographic poster. */
export function Poster({ artist, index }: { artist: Artist; index?: number }) {
  const [a, b] = artist.palette;
  const initials = artist.name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("");
  // Deterministic angle per artist so each poster feels different.
  const angle = [...artist.slug].reduce((n, c) => n + c.charCodeAt(0), 0) % 360;

  return (
    <div
      className="poster"
      style={{
        background: `radial-gradient(120% 90% at ${angle % 100}% 20%, ${a} 0%, ${a} 18%, ${b} 70%), ${b}`,
      }}
    >
      {artist.image && <img src={artist.image} alt={artist.name} />}
      <div className="stamp">
        <span>{index !== undefined ? String(index + 1).padStart(3, "0") : "aa-cr"}</span>
        <span>{artist.type}</span>
      </div>
      {!artist.image && <div className="initials">{initials}</div>}
    </div>
  );
}
