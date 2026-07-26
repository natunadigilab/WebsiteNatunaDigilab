import Header from "@/components/Header";

const themes = [
  { name: "Blueprint", color: "#2563eb", desc: "The default Natuna Digilab theme — clean, technical, spec-sheet inspired." },
  { name: "Merdeka", color: "#dc2626", desc: "A bold red-and-white theme drawing from Indonesian national identity." },
  { name: "Rimba", color: "#059669", desc: "An earthy green theme suited for sustainability and agriculture products." },
];

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Header active="Themes" />
      <main className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Themes</h1>
        <p className="mt-3 text-gray-500">Swap color tokens to adapt Natuna Digilab to your brand.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {themes.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-16 rounded-md" style={{ backgroundColor: t.color }} />
              <h3 className="font-bold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
