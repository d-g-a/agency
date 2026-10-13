import Link from "next/link";
import { artists } from "@/lib/artists";
import { Marquee } from "@/components/Marquee";
import { Poster } from "@/components/Poster";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-meta label">
          <span className="dim">Est. 2026</span>
          <span className="dim">{artists.length} artists — Worldwide</span>
        </div>
        <h1 className="wordmark" aria-label="aa-cr">
          aa-cr
        </h1>
        <div className="hero-tag">
          <span>
            An act of collective recklessness.
            <br />
            <em>Booking and management for independent artists.</em>
          </span>
          <Link href="/roster" className="btn">View roster →</Link>
        </div>
      </section>

      <Marquee items={artists.map((a) => a.name)} />

      <section className="section">
        <div className="section-head label">
          <span>About</span>
          <Link href="/about" className="dim">More</Link>
        </div>
        <p className="statement">
          A small agency for artists who take risks.{" "}
          <span className="muted">We build careers slowly, carefully, and on the artist&apos;s terms.</span>
        </p>
      </section>

      <section className="section">
        <div className="section-head label">
          <span>Roster</span>
          <Link href="/roster" className="dim">All artists</Link>
        </div>
        <div className="grid">
          {artists.slice(0, 4).map((a, i) => (
            <Link key={a.slug} href={`/roster/${a.slug}`}>
              <div className="frame"><Poster artist={a} index={i} /></div>
              <div className="cap">
                <strong>{a.name}</strong>
                <span className="label dim">{a.genre}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
