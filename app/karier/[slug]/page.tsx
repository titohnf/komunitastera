import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getJobBySlug } from "@/lib/data";
import { formatDate } from "@/lib/format";
import ShareWhatsApp from "@/components/ShareWhatsApp";

const MODE_LABEL = { remote: "Remote", onsite: "Onsite", hybrid: "Hybrid" };

export function generateStaticParams() {
  return getAllJobs().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return { title: `${job.title} — Karier Tera` };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/karier" className="text-sm font-medium text-primary hover:underline">
        &larr; Kembali ke Karier
      </Link>

      <span className="mt-6 inline-block w-fit rounded-full bg-muted-bg px-3 py-1 text-xs font-medium text-primary-dark">
        {MODE_LABEL[job.mode]}
      </span>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
        {job.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        <span>{job.location}</span>
        <span>Diposting {formatDate(job.postedDate)}</span>
      </div>

      <div className="mt-6">
        <ShareWhatsApp title={job.title} path={`/karier/${job.slug}`} />
      </div>

      <div className="prose-tera mt-10 text-foreground/90">
        <p>{job.description}</p>

        <h3>Kualifikasi</h3>
        <ul>
          {job.qualifications.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>

        <h3>Cara Melamar</h3>
        <p>{job.howToApply}</p>
      </div>
    </div>
  );
}
