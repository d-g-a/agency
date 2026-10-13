import type { Artist } from "@/lib/artists";

/** Press photo (greyscale) if present, otherwise a quiet typographic placeholder. */
export function Poster({ artist, index }: { artist: Artist; index?: number }) {
  const [bg, fg] = artist.palette;
  const initials = artist.name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("");

  return (
    <div className="poster" style={{ background: bg, color: fg }}>
      {artist.image && <img src={artist.image} alt={artist.name} />}
      <div className="stamp">
        <span>{index !== undefined ? String(index + 1).padStart(2, "0") : "aa-cr"}</span>
        <span>{artist.type}</span>
      </div>
      {!artist.image && <div className="initials">{initials}</div>}
    </div>
  );
}
