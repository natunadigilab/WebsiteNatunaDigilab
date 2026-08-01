import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy statement",
  description:
    "How the Natuna Digilab documentation site handles data: it doesn't collect any.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="" />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900">Privacy statement</h1>
        <p className="mt-4 text-gray-600">
          This documentation site is a static, open-source project. It does not collect,
          store, or share personal data.
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">What we collect</h2>
        <p className="text-gray-600">
          Nothing. There are no accounts, no contact forms, and no analytics or tracking
          scripts. We do not set cookies, and nothing you type into the component search
          leaves your browser.
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">Third parties</h2>
        <p className="text-gray-600">
          Links to GitHub and other external sites are governed by those services&rsquo; own
          privacy policies. Your hosting provider may keep standard server logs, which are
          outside the scope of this site.
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">Questions</h2>
        <p className="text-gray-600">
          Open an issue on the project repository and we&rsquo;ll respond there in the open.
        </p>
      </main>
    </div>
  );
}
