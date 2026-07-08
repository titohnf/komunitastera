import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";

const TERA_HEADER_SHA = "c6c201b58f2445e8eee22d28664a4d352be6048b";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tera — Ruang untuk Guru dan Tutor Indonesia",
  description:
    "Tera adalah wajah organisasi untuk isu kesejahteraan pendidik: cerita, event, lowongan, dan profil organisasi bagi guru dan tutor di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Pinned to a commit SHA (not @main) — jsDelivr caches @main per-edge
            for up to 7 days, so different visitors could otherwise see
            different token versions at the same time. Bump this SHA
            deliberately after each design-system change. */}
        <link
          rel="stylesheet"
          href={`https://cdn.jsdelivr.net/gh/titohnf/design-system@${TERA_HEADER_SHA}/tokens.css`}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Script
          src={`https://cdn.jsdelivr.net/gh/titohnf/design-system@${TERA_HEADER_SHA}/tera-header.js`}
          strategy="beforeInteractive"
        />
        <tera-header
          logo-text="Tera"
          logo-img="/logo.png"
          logo-href="/"
          nav={JSON.stringify(NAV_ITEMS)}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
