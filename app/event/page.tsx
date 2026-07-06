import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Event — Tera",
  description: "Lokakarya, temu komunitas, dan kelas untuk guru dan tutor di Indonesia.",
};

export default function EventPage() {
  const events = getAllEvents();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">Event</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Ruang belajar bersama untuk guru dan tutor — lokakarya, temu komunitas, dan kelas
        singkat.
      </p>

      {events.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-card-border bg-card p-8">
          <p className="text-foreground/80">
            Belum ada event terjadwal saat ini. Daftar email di bawah supaya Anda jadi
            yang pertama tahu.
          </p>
          <NewsletterForm />
        </div>
      )}
    </div>
  );
}
