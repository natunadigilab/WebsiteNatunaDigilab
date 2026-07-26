import Link from "next/link";
import Header from "@/components/Header";
import ComponentSidebar from "@/components/ComponentSidebar";
import { categories, components } from "@/lib/components-data";

const dotColors: Record<string, string> = {
  Action: "bg-blue-100 text-blue-600",
  Display: "bg-teal-100 text-teal-600",
  Form: "bg-violet-100 text-violet-600",
  Navigation: "bg-orange-100 text-orange-600",
  Overlay: "bg-pink-100 text-pink-600",
  Feedback: "bg-emerald-100 text-emerald-600",
};

export default function ComponentsOverview() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Components" />
      <div className="mx-auto flex max-w-7xl">
        <ComponentSidebar />
        <main className="flex-1 px-8 py-10">
          <div className="mb-1 text-xs font-mono-code uppercase tracking-wide text-blue-600">
            natuna.ui / components
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">Component library</h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            {components.length} components across {categories.length} categories. Pick one from the
            sidebar to explore its API, variants, and usage examples.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const items = components.filter((c) => c.category === cat.name);
              return (
                <div key={cat.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${dotColors[cat.name]}`}>
                    <span className="h-3 w-3 rounded-sm bg-current" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                  <p className="mb-3 text-sm text-gray-400">{items.length} components</p>
                  <div className="flex flex-wrap gap-2">
                    {items.slice(0, 4).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/components/${c.slug}`}
                        className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 hover:border-blue-300 hover:text-blue-700"
                      >
                        {c.name}
                      </Link>
                    ))}
                    {items.length > 4 && (
                      <span className="px-2.5 py-1 text-xs text-gray-400">+{items.length - 4} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
