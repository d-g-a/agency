import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const principles = [
  { t: "No safe bets", d: "We sign artists who scare the algorithm. If it already sounds like a playlist, it's not for us." },
  { t: "Collective first", d: "One roster, one crew. Every artist is backed by every other artist — shared stages, shared rooms, shared risk." },
  { t: "Rooms over reach", d: "We'd rather fill the right 300-cap basement than the wrong festival tent. Context is everything." },
  { t: "Artist-owned", d: "Fair splits, open books, no lock-ins. The work belongs to the people who make it." },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About<sup>(aa-cr)</sup></h1>

      <section className="section">
        <div className="two-col">
          <p className="label dim">[ 01 ] Who we are</p>
          <div className="lede">
            <p>
              aa-cr — <span className="hazard">an act of collective recklessness</span> — is an independent
              booking and artist agency for music that refuses to behave.
            </p>
            <p className="dim">
              We represent DJs, live acts and bands working at the loud, strange edges of club and
              guitar culture. The agency is the roster. The roster is the agency.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head label">
          <span>[ 02 ] Principles</span>
          <span className="dim">{String(principles.length).padStart(2, "0")}</span>
        </div>
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.t}>
              <span className="label hazard">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="two-col">
          <p className="label dim">[ 03 ] Contact</p>
          <div className="lede">
            <p>Bookings, demos, bad ideas:</p>
            <p><a className="hazard" href="mailto:booking@aa-cr.com">booking@aa-cr.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
