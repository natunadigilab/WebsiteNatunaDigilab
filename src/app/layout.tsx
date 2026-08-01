import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Natuna Digilab — Design system for digital Indonesia",
    template: "%s — Natuna Digilab",
  },
  description:
    "Open-source components, design tokens, and guidelines built by Natuna Digilab for modern Indonesian digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
