import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avène & Ducray — Uzman Buluşması Sapanca 2025",
  description: "Eczane Uzmanları Buluşması · Sapanca 2025 · Avène & Ducray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
