import Link from "next/link";

const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/templates", label: "Templates" },
  { href: "/themes", label: "Themes" },
];

export default function Header({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/90 px-6 backdrop-blur">
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
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
        >
          GitHub
        </a>
        <Link
          href="/docs"
          className="rounded-md bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
