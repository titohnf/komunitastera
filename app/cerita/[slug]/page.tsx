import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticlesMeta, getArticleBySlug } from "@/lib/articles";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return getAllArticlesMeta().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Tera`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/cerita" className="text-sm font-medium text-primary hover:underline">
        &larr; Kembali ke Cerita & Insight
      </Link>

      <span className="mt-6 inline-block w-fit rounded-full bg-muted-bg px-3 py-1 text-xs font-medium text-primary-dark">
        {article.category}
      </span>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-muted">{formatDate(article.date)}</p>

      <div
        className="prose-tera mt-10 max-w-none text-foreground/90"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
