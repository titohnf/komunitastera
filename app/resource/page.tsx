import type { Metadata } from "next";
import Link from "next/link";
import ResourceCard from "@/components/ResourceCard";
import ResourceCategoryFilter from "./ResourceCategoryFilter";
import { getAllResources } from "@/lib/data";
import type { ResourceCategory } from "@/types";

export const metadata: Metadata = {
  title: "Resource — Tera",
  description: "Template mengajar, lembar kerja, dan checklist yang bisa diunduh gratis oleh guru dan tutor.",
};

const CATEGORIES: ResourceCategory[] = [
  "Template Mengajar",
  "Lembar Kerja",
  "Checklist & Panduan",
];

export default async function ResourcePage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const resources = getAllResources();
  const filtered = kategori ? resources.filter((r) => r.category === kategori) : resources;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">Resource</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Materi siap pakai untuk membantu keseharian mengajar Anda — gratis untuk diunduh
        dan dibagikan.
      </p>

      <ResourceCategoryFilter categories={CATEGORIES} active={kategori} />

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      ) : resources.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-card-border bg-card p-8">
          <p className="text-foreground/80">
            Resource sedang kami siapkan. Punya template yang ingin dibagikan ke sesama
            guru? Kirim ke kami lewat{" "}
            <Link href="/kontak" className="font-medium text-primary hover:underline">
              halaman Kontak
            </Link>
            .
          </p>
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-card-border bg-card p-6 text-muted">
          Belum ada resource untuk kategori ini.
        </p>
      )}
    </div>
  );
}
