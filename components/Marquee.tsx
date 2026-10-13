export function Marquee({ items }: { items: string[] }) {
  // Repeat so one half always spans the viewport, then duplicate that half
  // so the -50% translate loops seamlessly.
  const half = Array.from({ length: Math.max(1, Math.ceil(12 / items.length)) }, () => items).flat();
  const row = [...half, ...half];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
