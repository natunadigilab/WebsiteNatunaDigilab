import Link from "next/link";
import Header from "@/components/Header";
import { components } from "@/lib/components-data";

const REPO_URL = "https://github.com/natunadigilab/WebsiteNatunaDigilab";
const FIGMA_COMMUNITY_URL =
  "https://www.figma.com/community/file/1660946308636540525/natuna-digilab-foundation-design-system";

const stableCount = components.filter((c) => c.status === "stable").length;
const betaCount = components.filter((c) => c.status === "beta").length;

const stats = [
  { value: `${components.length}`, label: "Components" },
  { value: "120+", label: "Design tokens" },
  { value: "MIT", label: "License" },
  { value: "React", label: "Built for" },
];

const featured = [
  {
    title: "Brand",
    color: "bg-blue-100 text-blue-600",
    desc: "Foundations, resources, and guidelines behind the visual identity of Natuna Digilab.",
    href: "/docs",
    cta: "Introduction",
  },
  {
    title: "Product",
    color: "bg-teal-100 text-teal-600",
    desc: "Components, patterns, and content guidelines for building digital products for Indonesia.",
    href: "/components",
    cta: "Get started",
  },
  {
    title: "Contribute",
    color: "bg-violet-100 text-violet-600",
    desc: "Help us build the open design system that enables Indonesian digital innovation.",
    href: REPO_URL,
    cta: "View guidelines",
  },
];

export default function Home() {
  const explore = components.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="" />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          v0.1 — Currently in Beta
        </span>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">
          Design system built for{" "}
          <span className="text-blue-600">digital products</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500">
          Open-source components, design tokens, and guidelines built by
          Natuna Digilab for modern Indonesian digital products.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/components"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Browse components →
          </Link>
          <Link
            href="/docs"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Read the docs
          </Link>
          <a
            href={FIGMA_COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            View in Figma Community
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-3 text-[11px] font-mono-code uppercase tracking-wide text-gray-400">Component</div>
            <div className="mb-3 text-sm font-semibold text-gray-900">Button</div>
            <div className="flex gap-2">
              <span className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white">Primary</span>
              <span className="rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-600">Ghost</span>
              <span className="rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-400">Danger</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-3 text-[11px] font-mono-code uppercase tracking-wide text-gray-400">Preview</div>
            <div className="mb-3 text-sm font-semibold text-gray-900">Card component</div>
            <div className="flex h-16 items-center justify-center rounded-md bg-blue-50 font-mono-code text-sm text-blue-700">
              &lt;Card /&gt;
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-3 text-[11px] font-mono-code uppercase tracking-wide text-gray-400">Status</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> {stableCount} stable
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" /> {betaCount} beta
              </li>
            </ul>
          </div>
        </div>
      </main>

      <section className="border-y border-gray-200 bg-white py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${f.color}`}>
                <span className="h-3 w-3 rounded-sm bg-current" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
              <Link href={f.href} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
                {f.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">Explore components</h2>
          <Link href="/components" className="text-sm font-medium text-blue-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {explore.map((c) => (
            <Link
              key={c.slug}
              href={`/components/${c.slug}`}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-20 items-center justify-center rounded-md bg-gray-100 font-mono-code text-xs text-gray-400">
                &lt;{c.name} /&gt;
              </div>
              <div className="text-sm font-semibold text-gray-900">{c.name}</div>
              <div className="text-xs text-gray-400">{c.category}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm hover:text-gray-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Page source
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm hover:text-gray-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contribute
          </a>
          <Link
            href="/privacy"
            className="rounded-sm hover:text-gray-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Privacy statement
          </Link>
        </div>
      </footer>
    </div>
  );
}
