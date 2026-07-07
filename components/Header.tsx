"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Tera" width={32} height={35} className="h-9 w-auto" />
          <span className="text-lg font-bold text-foreground">Tera</span>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-muted-bg text-primary-dark"
                    : "text-foreground/80 hover:bg-muted-bg hover:text-primary-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex items-center justify-center rounded-full p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-card-border px-4 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-muted-bg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
