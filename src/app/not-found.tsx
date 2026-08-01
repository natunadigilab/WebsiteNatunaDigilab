import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="" />
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono-code text-xs font-medium text-blue-700">
          404
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          This page doesn&rsquo;t exist
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          The page or component you were looking for may have been renamed, moved, or
          never shipped. Try browsing the component library instead.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/components"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Browse components →
          </Link>
          <Link
            href="/"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
