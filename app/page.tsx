import Link from "next/link";
import { Ear, Users, HeartHandshake } from "lucide-react";
import EventCard from "@/components/EventCard";
import JobCard from "@/components/JobCard";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getUpcomingEvents, getLatestJobs, getTestimonials } from "@/lib/data";
import { getAllArticlesMeta } from "@/lib/articles";

const BELIEFS = [
  {
    icon: Ear,
    title: "Mendengarkan Lebih Dulu",
    body: "Sebelum menawarkan solusi, kami memilih untuk mendengarkan cerita dan kebutuhan guru terlebih dahulu.",
  },
  {
    icon: Users,
    title: "Belajar dari Sesama",
    body: "Guru terbaik seringkali adalah guru lain. Kami membangun ruang untuk saling berbagi praktik baik.",
  },
  {
    icon: HeartHandshake,
    title: "Kesejahteraan adalah Investasi",
    body: "Guru yang sejahtera secara fisik, mental, dan finansial adalah fondasi pendidikan yang lebih baik.",
  },
];

export default function Home() {
  const events = getUpcomingEvents(2);
  const jobs = getLatestJobs(3);
  const articles = getAllArticlesMeta().slice(0, 3);
  const testimonials = getTestimonials();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary-dark sm:text-5xl">
            Komunitas Pendidik untuk Terus Belajar dan Berkembang
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Kami percaya guru yang sejahtera menciptakan pendidikan yang lebih baik. Di
            sini, kami hadir dengan event belajar, info lowongan mengajar, dan cerita
            nyata dari sesama pendidik.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/event"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Lihat Event
            </Link>
            <Link
              href="/cerita"
              className="w-full rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-muted-bg sm:w-auto"
            >
              Baca Cerita Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 rounded-3xl border border-card-border bg-card p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
          <div className="text-center sm:border-r sm:border-card-border sm:pr-10 sm:text-left">
            <p className="text-4xl font-bold text-primary-dark">500+</p>
            <p className="mt-1 text-sm text-muted">guru &amp; tutor tergabung</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary-dark">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="text-sm italic leading-relaxed text-foreground/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {t.name} <span className="font-normal text-muted">— {t.school}</span>
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-primary-dark">Event Terdekat</h2>
          <Link href="/event" className="text-sm font-medium text-primary hover:underline">
            Lihat semua &rarr;
          </Link>
        </div>
        {events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-card-border bg-card p-6 text-muted">
            Belum ada event terjadwal saat ini.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-primary-dark">Lowongan Terbaru</h2>
          <Link href="/karier" className="text-sm font-medium text-primary hover:underline">
            Lihat semua &rarr;
          </Link>
        </div>
        {jobs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-3">
            {jobs.map((j) => (
              <JobCard key={j.slug} job={j} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-card-border bg-card p-6 text-muted">
            Belum ada posisi terbuka saat ini.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-primary-dark">Cerita &amp; Insight Terbaru</h2>
          <Link href="/cerita" className="text-sm font-medium text-primary hover:underline">
            Lihat semua &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="bg-muted-bg/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-primary-dark">
            Tiga Hal yang Kami Percaya
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {BELIEFS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary sm:mx-0">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-card-border bg-card p-10 text-center">
          <h2 className="text-2xl font-bold text-primary-dark">Daftar Update Gratis</h2>
          <p className="max-w-md text-foreground/75">
            Dapatkan kabar event, lowongan, dan cerita terbaru dari komunitas Tera
            langsung ke email Anda.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
