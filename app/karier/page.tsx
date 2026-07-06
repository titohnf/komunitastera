import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import { getAllJobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Karier — Tera",
  description: "Lowongan dan kesempatan berkontribusi bersama Tera untuk kesejahteraan pendidik.",
};

export default function KarierPage() {
  const jobs = getAllJobs();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">Karier</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Bergabunglah dengan Tera untuk mendukung kesejahteraan guru dan tutor di
        Indonesia.
      </p>

      {jobs.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => (
            <JobCard key={j.slug} job={j} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-card-border bg-card p-8">
          <p className="text-foreground/80">
            Belum ada posisi terbuka saat ini. Kirim CV Anda ke{" "}
            <a href="mailto:karier@tera.or.id" className="font-medium text-primary hover:underline">
              karier@tera.or.id
            </a>
            , siapa tahu ada kesempatan yang cocok ke depannya.
          </p>
        </div>
      )}
    </div>
  );
}
