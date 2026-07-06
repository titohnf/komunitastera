import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug } from "@/lib/data";
import { formatDate } from "@/lib/format";
import ShareWhatsApp from "@/components/ShareWhatsApp";

export function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return { title: `${event.title} — Tera` };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/event" className="text-sm font-medium text-primary hover:underline">
        &larr; Kembali ke Event
      </Link>

      <span className="mt-6 inline-block w-fit rounded-full bg-muted-bg px-3 py-1 text-xs font-medium text-primary-dark">
        {event.format === "online" ? "Online" : "Offline"}
      </span>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
        {event.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        <span>Pembicara: {event.speaker}</span>
        <span>{formatDate(event.date)}</span>
        {event.location && <span>{event.location}</span>}
      </div>

      <p className="prose-tera mt-10 whitespace-pre-line text-foreground/90">
        {event.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="mailto:halo@tera.or.id?subject=Pendaftaran%20Event"
          className="inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Daftar Event Ini
        </a>
        <ShareWhatsApp title={event.title} path={`/event/${event.slug}`} />
      </div>
    </div>
  );
}
