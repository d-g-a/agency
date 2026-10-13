"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Artist, ArtistType } from "@/lib/artists";
import { Poster } from "./Poster";

const filters: ("All" | ArtistType)[] = ["All", "DJ", "Live", "Band"];

export function RosterList({ artists, showFilters = true }: { artists: Artist[]; showFilters?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const shown = filter === "All" ? artists : artists.filter((a) => a.type === filter);

  // Image follows the cursor with a little lag.
  useEffect(() => {
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (preview.current) {
        preview.current.style.transform = `translate(${cx + 32}px, ${cy - 120}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  const current = active !== null ? shown[active] : null;

  return (
    <>
      {showFilters && (
        <div className="filters">
          {filters.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === "All" ? "All" : f === "Live" ? "Live acts" : f === "Band" ? "Bands" : "DJs"}
            </button>
          ))}
        </div>
      )}
      <ul className="roster" onMouseLeave={() => setActive(null)}>
        {shown.map((a, i) => (
          <li key={a.slug}>
            <Link href={`/roster/${a.slug}`} onMouseEnter={() => setActive(i)}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="name">{a.name}</span>
              <span className="meta">
                <span>{a.genre}</span>
                <span className="dim">{a.based}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div ref={preview} className={`cursor-preview${current ? " on" : ""}`} aria-hidden>
        {current && <Poster artist={current} index={active ?? undefined} />}
      </div>
    </>
  );
}
