"use client";

import Link from "next/link";

export default function CategoryFilter({
  categories,
  active,
}: {
  categories: string[];
  active?: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      <Link
        href="/cerita"
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !active ? "bg-primary text-primary-foreground" : "bg-muted-bg text-foreground/80 hover:bg-muted-bg/70"
        }`}
      >
        Semua
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/cerita?kategori=${encodeURIComponent(cat)}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === cat ? "bg-primary text-primary-foreground" : "bg-muted-bg text-foreground/80 hover:bg-muted-bg/70"
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
