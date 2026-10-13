import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <p className="label hazard">Error 404</p>
      <h1 className="wordmark" style={{ fontSize: "24vw" }}>Lost?</h1>
      <div className="hero-tag">
        <span>Too reckless, even for us.</span>
        <Link href="/" className="btn">Back home →</Link>
      </div>
    </section>
  );
}
