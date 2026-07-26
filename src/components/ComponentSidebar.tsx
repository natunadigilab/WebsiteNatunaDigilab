"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, components } from "@/lib/components-data";

export default function ComponentSidebar() {
  const pathname = usePathname();
  const dotColors: Record<string, string> = {
    Action: "bg-blue-500",
    Display: "bg-teal-500",
    Form: "bg-violet-500",
    Navigation: "bg-orange-500",
    Overlay: "bg-pink-500",
    Feedback: "bg-emerald-500",
  };

  return (
    <aside className="hidden w-60 shrink-0 border-r border-gray-200 bg-gray-50/60 px-4 py-6 lg:block">
      <div className="mb-6 flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-400">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2">
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Search...
      </div>

      <Link
        href="/components"
        className={`mb-2 block rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/components" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Overview
      </Link>

      <nav className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="mb-1 flex items-center justify-between px-3 text-sm font-semibold text-gray-800">
              <span className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${dotColors[cat.name]}`} />
                {cat.name}
              </span>
              <span className="text-xs font-normal text-gray-400">{cat.items.length}</span>
            </div>
            <div className="space-y-0.5">
              {components
                .filter((c) => c.category === cat.name)
                .map((c) => {
                  const href = `/components/${c.slug}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={c.slug}
                      href={href}
                      className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm ${
                        isActive ? "border border-blue-200 bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {c.name}
                      {c.status === "beta" && (
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
                          beta
                        </span>
                      )}
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-8 flex gap-4 border-t border-gray-200 px-3 pt-4 text-xs text-gray-500">
        <div>
          <div className="font-semibold text-gray-900">{components.length}</div>
          components
        </div>
        <div>
          <div className="font-semibold text-gray-900">{categories.length}</div>
          categories
        </div>
      </div>
    </aside>
  );
}
