import type { Metadata } from "next";
import Header from "@/components/Header";
import TemplateGallery from "@/components/TemplateGallery";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Ready-to-use page templates — dashboards, tables, forms, and login screens — built with Natuna Digilab components.",
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Templates" />
      <main className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Templates</h1>
        <p className="mt-3 text-gray-500">Ready-to-use page templates to kickstart your project.</p>

        <TemplateGallery />
      </main>
    </div>
  );
}
