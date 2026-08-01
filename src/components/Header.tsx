"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/templates", label: "Templates" },
  { href: "/themes", label: "Themes" },
];

export default function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 L22 12 L12 22 L2 12 Z" />
              </svg>
            </span>
            Natuna <span className="text-blue-600">Digilab</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.label === active
                    ? "font-semibold text-gray-900"
                    : "hover:text-gray-900"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/natunadigilab/WebsiteNatunaDigilab"
            className="hidden rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 sm:inline-block"
          >
            GitHub
          </a>
          <Link
            href="/docs"
            className="rounded-md bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get started
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md border border-gray-300 p-1.5 text-gray-700 hover:bg-gray-50 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gray-200 bg-white px-6 py-3 md:hidden"
        >
          <ul className="space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 ${
                    item.label === active
                      ? "bg-blue-50 font-semibold text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href="https://github.com/natunadigilab/WebsiteNatunaDigilab"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
