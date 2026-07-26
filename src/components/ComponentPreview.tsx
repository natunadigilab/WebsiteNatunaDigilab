import type { ReactElement } from "react";

const previews: Record<string, () => ReactElement> = {
  button: () => (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6">
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">Primary</button>
      <button className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">Secondary</button>
      <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800">Ghost</button>
      <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white">Destructive</button>
    </div>
  ),
  "button-group": () => (
    <div className="flex justify-center py-6">
      <div className="inline-flex overflow-hidden rounded-md border border-gray-300">
        <button className="border-r border-gray-300 bg-blue-600 px-4 py-2 text-sm font-medium text-white">Grid</button>
        <button className="px-4 py-2 text-sm text-gray-700">List</button>
      </div>
    </div>
  ),
  "dropdown-menu": () => (
    <div className="flex justify-center py-6">
      <div className="w-48 rounded-md border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-3 py-2 text-sm text-gray-700">Edit</div>
        <div className="border-b border-gray-100 px-3 py-2 text-sm text-gray-700">Duplicate</div>
        <div className="px-3 py-2 text-sm text-red-600">Delete</div>
      </div>
    </div>
  ),
  "icon-button": () => (
    <div className="flex justify-center gap-3 py-6">
      {["+", "✎", "⤓", "🗑"].map((i) => (
        <span key={i} className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600">
          {i}
        </span>
      ))}
    </div>
  ),
  link: () => (
    <div className="flex justify-center py-6 text-sm text-blue-600 underline">
      View full documentation
    </div>
  ),
  "more-menu": () => (
    <div className="flex justify-center py-6 text-2xl text-gray-500">⋯</div>
  ),
  avatar: () => (
    <div className="flex justify-center gap-3 py-6">
      {["RM", "AI", "DS"].map((i) => (
        <span key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {i}
        </span>
      ))}
    </div>
  ),
  badge: () => (
    <div className="flex justify-center gap-2 py-6">
      <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">Paid</span>
      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Pending</span>
      <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">Overdue</span>
    </div>
  ),
  card: () => (
    <div className="flex justify-center py-6">
      <div className="w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-2 text-sm font-semibold text-gray-900">Card title</div>
        <div className="text-xs text-gray-500">Supporting description text goes here.</div>
      </div>
    </div>
  ),
  "code-block": () => (
    <div className="flex justify-center py-6">
      <pre className="rounded-md bg-gray-900 px-4 py-3 text-xs text-emerald-300">npm install @natuna/ui</pre>
    </div>
  ),
  divider: () => (
    <div className="mx-auto w-2/3 border-t border-gray-300 py-6" />
  ),
  "empty-state": () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="mb-2 text-2xl">📭</div>
      <div className="text-sm font-medium text-gray-700">No results found</div>
      <div className="text-xs text-gray-400">Try adjusting your search or filters.</div>
    </div>
  ),
  input: () => (
    <div className="flex justify-center py-6">
      <input placeholder="Enter your email" className="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm" />
    </div>
  ),
  checkbox: () => (
    <div className="flex justify-center gap-2 py-6 text-sm text-gray-700">
      <input type="checkbox" defaultChecked className="h-4 w-4" /> Remember me
    </div>
  ),
  select: () => (
    <div className="flex justify-center py-6">
      <select className="w-48 rounded-md border border-gray-300 px-3 py-2 text-sm">
        <option>Jakarta</option>
        <option>Tangerang</option>
        <option>Bandung</option>
      </select>
    </div>
  ),
  toggle: () => (
    <div className="flex justify-center py-6">
      <span className="inline-flex h-6 w-11 items-center rounded-full bg-blue-600 p-1">
        <span className="h-4 w-4 translate-x-5 rounded-full bg-white" />
      </span>
    </div>
  ),
  tabs: () => (
    <div className="flex justify-center gap-6 border-b border-gray-200 py-6 text-sm">
      <span className="border-b-2 border-blue-600 pb-2 font-medium text-blue-600">Overview</span>
      <span className="pb-2 text-gray-500">Properties</span>
      <span className="pb-2 text-gray-500">Examples</span>
    </div>
  ),
  breadcrumbs: () => (
    <div className="flex justify-center gap-2 py-6 text-sm text-gray-500">
      <span>natuna.ui</span> / <span>components</span> / <span className="text-gray-900">Button</span>
    </div>
  ),
  pagination: () => (
    <div className="flex justify-center gap-1 py-6 text-sm">
      {[1, 2, 3].map((n) => (
        <span key={n} className={`flex h-8 w-8 items-center justify-center rounded-md ${n === 1 ? "bg-blue-600 text-white" : "border border-gray-200 text-gray-600"}`}>
          {n}
        </span>
      ))}
    </div>
  ),
  modal: () => (
    <div className="flex justify-center py-6">
      <div className="w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
        <div className="mb-2 text-sm font-semibold text-gray-900">Delete item?</div>
        <div className="mb-3 text-xs text-gray-500">This action cannot be undone.</div>
        <div className="flex justify-end gap-2">
          <button className="rounded-md border border-gray-300 px-3 py-1.5 text-xs">Cancel</button>
          <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs text-white">Delete</button>
        </div>
      </div>
    </div>
  ),
  tooltip: () => (
    <div className="flex justify-center py-6">
      <span className="rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white">Save changes</span>
    </div>
  ),
  alert: () => (
    <div className="flex justify-center py-6">
      <div className="w-72 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
        Your session will expire in 5 minutes.
      </div>
    </div>
  ),
  toast: () => (
    <div className="flex justify-center py-6">
      <div className="w-64 rounded-md bg-gray-900 px-3 py-2 text-xs text-white">Changes saved successfully</div>
    </div>
  ),
  spinner: () => (
    <div className="flex justify-center py-6">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
    </div>
  ),
};

export default function ComponentPreview({ slug }: { slug: string }) {
  const Preview = previews[slug];
  if (!Preview) {
    return <div className="py-6 text-center text-sm text-gray-400">Preview coming soon</div>;
  }
  return <Preview />;
}
