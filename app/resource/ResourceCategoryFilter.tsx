"use client";

import Link from "next/link";

export default function ResourceCategoryFilter({
  categories,
  active,
}: {
  categories: string[];
  active?: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <Link
        href="/resource"
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !active ? "bg-primary text-primary-foreground" : "bg-muted-bg text-foreground/80 hover:bg-muted-bg/70"
        }`}
      >
        Semua
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/resource?kategori=${encodeURIComponent(cat)}`}
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
