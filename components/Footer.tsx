import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:booking@aa-cr.com" className="footer-cta">
        Book the <span className="hazard">reckless</span> <span className="arrow">→</span>
      </a>
      <div className="footer-row label">
        <span>© {new Date().getFullYear()} aa-cr — An act of collective recklessness</span>
        <nav>
          <Link href="/roster">Roster</Link>
          <Link href="/about">About</Link>
          <a href="#">Instagram</a>
          <a href="mailto:booking@aa-cr.com">booking@aa-cr.com</a>
        </nav>
      </div>
    </footer>
  );
}
