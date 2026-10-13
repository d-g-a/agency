import Link from "next/link";
import { artists } from "@/lib/artists";
import { Marquee } from "@/components/Marquee";
import { Poster } from "@/components/Poster";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-meta label">
          <span>Booking &amp; artist management</span>
          <span className="dim">Est. 2026 — Worldwide</span>
          <span>{String(artists.length).padStart(3, "0")} artists</span>
        </div>
        <h1 className="wordmark" aria-label="aa-cr">
          AA<span className="slash">/</span>CR
        </h1>
        <div className="hero-tag">
          <span>
            An act of <em>collective</em>
            <br />
            recklessness
          </span>
          <Link href="/roster" className="btn">Enter the roster →</Link>
        </div>
      </section>

      <Marquee items={artists.map((a) => a.name)} />

      <section className="section">
        <div className="section-head label">
          <span>[ 01 ] Manifesto</span>
          <Link href="/about" className="dim">Read more →</Link>
        </div>
        <p className="statement">
          We don&apos;t <s>manage</s> careers. We <span className="hazard">detonate</span> them.
        </p>
      </section>

      <section className="section">
        <div className="section-head label">
          <span>[ 02 ] Roster</span>
          <Link href="/roster" className="dim">Full roster →</Link>
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
