"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destination" },
  { href: "/recommend", label: "Recommend" },
  { href: "/cost-estimate", label: "Cost Estimate" },

  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    router.push(
      query.trim()
        ? `/destinations?q=${encodeURIComponent(query.trim())}`
        : "/destinations",
    );
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-jungle-950/95 backdrop-blur text-sandstone-100 border-b border-gold-600/30">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo1.png"
              alt="DOMNER Logo"
              width={150}
              height={150}
              priority
            />

            {/* <span className="font-display text-xl tracking-wide">
              DOMNER<span className="text-gold-100">.</span>
            </span> */}
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-gold-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center relative"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a place…"
              aria-label="Search destinations"
              className="w-44 lg:w-56 bg-jungle-800/70 border border-gold-600/30 rounded-full pl-4 pr-9 py-2 text-sm placeholder:text-sandstone-300/50 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-2.5 text-gold-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </form>

          <button
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold-600/20 bg-jungle-950 px-5 pb-5 pt-3 space-y-3">
          <form onSubmit={handleSearch} className="flex items-center relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a place…"
              aria-label="Search destinations"
              className="w-full bg-jungle-800/70 border border-gold-600/30 rounded-full pl-4 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </form>
          <nav className="flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-gold-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
