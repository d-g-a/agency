import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists, getArtist } from "@/lib/artists";
import { Poster } from "@/components/Poster";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = getArtist((await params).slug);
  return { title: artist?.name ?? "Artist" };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const index = artists.indexOf(artist);
  const next = artists[(index + 1) % artists.length];

  return (
    <>
      <section className="artist-hero">
        <div className="left">
          <div className="label" style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/roster">← Roster</Link>
            <span className="dim">{String(index + 1).padStart(3, "0")} / {String(artists.length).padStart(3, "0")}</span>
          </div>
          <h1 className="artist-name">{artist.name}</h1>
          <div className="bio">
            {artist.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="facts">
            <div><dt className="label dim">Type</dt><dd>{artist.type}</dd></div>
            <div><dt className="label dim">Sound</dt><dd>{artist.genre}</dd></div>
            <div><dt className="label dim">Based</dt><dd>{artist.based}</dd></div>
            <div><dt className="label dim">Territories</dt><dd>{artist.territories}</dd></div>
          </dl>
          <div className="links">
            <a
              className="btn solid"
              href={`mailto:booking@aa-cr.com?subject=${encodeURIComponent(`Booking: ${artist.name}`)}`}
            >
              Book {artist.name} →
            </a>
            {artist.links.map((l) => (
              <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="right">
          <Poster artist={artist} index={index} />
        </div>
      </section>

      <Link href={`/roster/${next.slug}`} className="section" style={{ display: "block" }}>
        <span className="label dim">Next artist</span>
        <p className="statement" style={{ maxWidth: "none" }}>{next.name} →</p>
      </Link>
    </>
  );
}
