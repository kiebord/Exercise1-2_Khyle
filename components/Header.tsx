"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "index" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/about", label: "about" },
  { href: "/gallery", label: "gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // "/" must match exactly, other links match their whole subtree
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          className="group text-lg font-bold tracking-tight text-white"
          aria-label="Khyle Guadalquiver, home"
        >
          <span className="text-accent transition group-hover:glow-text">~/</span>
          khyle-guadalquiver
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-sm transition-colors ${
                      active
                        ? "text-accent glow-text"
                        : "text-dim hover:text-accent hover:glow-text"
                    }`}
                  >
                    {label}
                    {/* Active underline with glow */}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent shadow-[0_0_10px_2px_rgba(57,255,106,0.7)]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-line text-accent transition hover:border-accent/60 hover:shadow-glow-sm md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-current transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-ink/95 md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-l-2 px-4 py-3 text-sm transition-colors ${
                      active
                        ? "border-accent bg-accent/5 text-accent glow-text"
                        : "border-transparent text-dim hover:text-accent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
