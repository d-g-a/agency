"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/roster", label: "Roster" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header">
      <Link href="/" className="logo" aria-label="aa-cr home">
        AA/CR
      </Link>
      <nav className="label">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname.startsWith(l.href) ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
        <a href="mailto:booking@aa-cr.com">Contact</a>
      </nav>
      <span className="label right clock" suppressHydrationWarning>
        {time || "--:--:--"} LOCAL
      </span>
    </header>
  );
}
