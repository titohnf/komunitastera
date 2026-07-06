import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticlesMeta } from "@/lib/articles";
import type { ArticleCategory } from "@/types";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

export const metadata: Metadata = {
  title: "Cerita & Insight — Tera",
  description: "Cerita pendidik, tips mengajar, refleksi, dan kabar Tera untuk guru dan tutor Indonesia.",
};

const CATEGORIES: ArticleCategory[] = [
  "Cerita Pendidik",
  "Tips Mengajar",
  "Refleksi & Opini",
  "Kabar Tera",
];

export default async function CeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string; q?: string }>;
}) {
  const { kategori, q } = await searchParams;
  const articles = getAllArticlesMeta();

  const query = q?.trim().toLowerCase();
  const filtered = articles.filter((a) => {
    const matchesCategory = kategori ? a.category === kategori : true;
    const matchesQuery = query
      ? a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">Cerita & Insight</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Kumpulan cerita, tips, dan refleksi dari dan untuk guru serta tutor di seluruh
        Indonesia.
      </p>

      <div className="mt-8">
        <SearchBar defaultValue={q} />
      </div>

      <CategoryFilter categories={CATEGORIES} active={kategori} />

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-card-border bg-card p-6 text-muted">
          Tidak ada artikel yang cocok dengan pencarian atau kategori ini.
        </p>
      )}
    </div>
  );
}
