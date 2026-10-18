"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/playground", label: "Playground" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <Link href="/" className="logo" aria-label="Home" onClick={close}>
        Venkatesh KVS
      </Link>

      <nav
        id="nav-menu"
        className={`nav-menu ${open ? "open" : ""}`}
        aria-label="Main"
      >
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} onClick={close}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          className="btn sm nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={close}
        >
          Resume
        </a>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
