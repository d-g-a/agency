export function Marquee({ items }: { items: string[] }) {
  // Duplicated once so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t} ✕</span>
        ))}
      </div>
    </div>
  );
}
