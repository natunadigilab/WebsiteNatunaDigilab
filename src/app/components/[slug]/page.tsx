import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ComponentSidebar from "@/components/ComponentSidebar";
import ComponentPreview from "@/components/ComponentPreview";
import { components, getComponent } from "@/lib/components-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponent(slug);

  if (!component) {
    return { title: "Component not found" };
  }

  return {
    title: component.name,
    description: component.summary,
  };
}

export default async function ComponentDetail({ params }: Props) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) return notFound();

  const usageCode = `import { ${component.name.replace(/\s/g, "")} } from '@natuna/ui'

export default function Example() {
  return (
    <${component.name.replace(/\s/g, "")} />
  )
}`;

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Components" />
      <div className="mx-auto flex max-w-7xl">
        <ComponentSidebar />
        <main className="flex-1 px-8 py-10">
          <div className="mb-1 text-xs font-mono-code text-gray-400">
            @natuna/ui / <span className="text-blue-600">{component.category.toLowerCase()}</span> / {component.name}
          </div>

          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-4xl font-extrabold text-gray-900">{component.name}</h1>
            <span
              className={`rounded px-2 py-0.5 text-xs font-medium ${
                component.status === "stable" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {component.status}
            </span>
            {component.tags.map((t) => (
              <span key={t} className="rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-500">
                {t}
              </span>
            ))}
          </div>

          <p className="mb-8 max-w-2xl border-b border-gray-200 pb-6 text-gray-500">
            {component.summary}
          </p>

          <div className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <ComponentPreview slug={component.slug} />
          </div>

          <h2 className="mb-2 text-xl font-bold text-gray-900">Usage</h2>
          <p className="mb-4 text-sm text-gray-500">{component.usage}</p>
          <pre className="mb-10 overflow-x-auto rounded-lg bg-gray-900 p-5 text-xs text-gray-100">
            <code>{usageCode}</code>
          </pre>

          <h2 className="mb-4 text-xl font-bold text-gray-900">Best practices</h2>
          <div className="mb-10 space-y-3">
            {component.do.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                <span>✓</span>
                <span>{d}</span>
              </div>
            ))}
            {component.dont.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-md border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-800">
                <span>✕</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
