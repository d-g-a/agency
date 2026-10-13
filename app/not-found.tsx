import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <p className="label dim">404</p>
      <h1 className="wordmark" >Not found</h1>
      <div className="hero-tag">
        <span>This page doesn&apos;t exist.</span>
        <Link href="/" className="btn">Back home →</Link>
      </div>
    </section>
  );
}
