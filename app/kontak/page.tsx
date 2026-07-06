import type { Metadata } from "next";
import { Mail, AtSign, Handshake, MessageCircle } from "lucide-react";
import StoryForm from "@/components/StoryForm";

export const metadata: Metadata = {
  title: "Kontak — Tera",
  description: "Kirim cerita, tips mengajar, atau ajakan kolaborasi kepada Tera.",
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary-dark sm:text-4xl">Kontak</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Punya cerita, tips mengajar, atau ide kolaborasi? Kami senang mendengarnya.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-card-border bg-card p-8">
            <h2 className="text-xl font-bold text-primary-dark">Kirim Cerita atau Tips</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Cerita Anda bisa menginspirasi guru lain di seluruh Indonesia.
            </p>
            <div className="mt-6">
              <StoryForm />
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-card-border bg-card p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-primary-dark">
              <Handshake size={20} /> Kolaborasi
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              Untuk kerja sama program, event bersama, atau dukungan lain bagi komunitas
              guru dan tutor, silakan hubungi kami melalui email di samping. Ceritakan
              secara singkat ide kolaborasi Anda dan tim kami akan menghubungi kembali.
            </p>
            <a
              href="mailto:kolaborasi@tera.or.id"
              className="mt-4 inline-flex w-fit rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Ajukan Kolaborasi
            </a>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-card-border bg-muted-bg/60 p-8">
          <h2 className="text-lg font-bold text-primary-dark">Info Kontak</h2>
          <ul className="mt-5 space-y-4 text-sm text-foreground/80">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              halo@tera.or.id
            </li>
            <li className="flex items-center gap-3">
              <AtSign size={18} className="text-primary" />
              @tera.or.id
            </li>
          </ul>

          <a
            href="https://chat.whatsapp.com/placeholder-grup-tera"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <MessageCircle size={18} />
            Gabung Grup WhatsApp Komunitas
          </a>
        </aside>
      </div>
    </div>
  );
}
