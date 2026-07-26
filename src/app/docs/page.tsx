import Header from "@/components/Header";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Docs" />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900">Introduction</h1>
        <p className="mt-4 text-gray-600">
          Natuna Digilab is an open-source design system built for modern Indonesian digital
          products — regulated fintech, banking, and consumer apps alike. It ships React
          components, design tokens, and content guidelines under the MIT license.
        </p>
        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">Installation</h2>
        <pre className="rounded-lg bg-gray-900 p-5 text-sm text-gray-100">
          <code>npm install @natuna/ui</code>
        </pre>
        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">Getting started</h2>
        <p className="text-gray-600">
          Browse the component library to explore available components, or check the
          Templates section for ready-made page layouts.
        </p>
      </main>
    </div>
  );
}
