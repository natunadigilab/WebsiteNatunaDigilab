"use client";

import { useState } from "react";
import Header from "@/components/Header";

const filters = ["All", "Table", "Form", "Settings", "Login", "Tools", "Content", "AI Chat", "Gallery", "Shell"];

const templates = [
  { title: "Invoice Table", tag: "Table", desc: "Sortable data table with status badges, search, and export." },
  { title: "Login — Minimal", tag: "Login", desc: "Clean centered card login with email/password fields and forgot password flow." },
  { title: "Login — Split Screen", tag: "Login", desc: "Two-column login layout with branded illustration panel on the left." },
  { title: "Settings Panel", tag: "Settings", desc: "Account settings with tabbed sections, inline row-editing, and multi-section forms." },
  { title: "Payment Request Form", tag: "Form", desc: "Multi-field form with validation, currency input, and date picker integration." },
  { title: "AI Chat Interface", tag: "AI Chat", desc: "Conversational UI with message bubbles, typing indicator, and prompt suggestions." },
  { title: "Media Gallery", tag: "Gallery", desc: "Responsive grid gallery with filtering, lightbox preview, and drag-to-reorder." },
  { title: "CLI Shell", tag: "Shell", desc: "Terminal-style shell interface with command history, autocomplete, and output formatting." },
  { title: "Article / Blog Post", tag: "Content", desc: "Long-form content layout with author info, reading time, and related posts sidebar." },
  { title: "Analytics Dashboard", tag: "Tools", desc: "KPI cards, revenue chart, and recent activity feed in a responsive grid layout." },
  { title: "Data Visualization", tag: "Tools", desc: "Chart primitives — pie, bar, and line charts — wired to live data with recharts." },
  { title: "User Management Table", tag: "Table", desc: "Admin table with avatar column, role badges, bulk actions, and pagination." },
];

export default function TemplatesPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? templates : templates.filter((t) => t.tag === active);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Templates" />
      <main className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Templates</h1>
        <p className="mt-3 text-gray-500">Ready-to-use page templates to kickstart your project.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1.5 text-sm ${
                active === f ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-left">
          {shown.map((t) => (
            <div key={t.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-32 items-center justify-center rounded-md bg-gray-100 font-mono-code text-xs text-gray-400">
                {t.title} preview
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
                </div>
                <span className="shrink-0 rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-500">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
