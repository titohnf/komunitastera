import { MessagesSquare, Megaphone, Briefcase, Handshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WA_GROUP_LINK } from "@/lib/config";

const BENEFITS = [
  {
    icon: MessagesSquare,
    title: "Diskusi & Tanya Jawab",
    body: "Berbagi tantangan mengajar sehari-hari dan dapatkan masukan dari sesama pendidik.",
  },
  {
    icon: Megaphone,
    title: "Info Event & Pelatihan",
    body: "Jadi yang pertama tahu saat ada event atau pelatihan gratis.",
  },
  {
    icon: Briefcase,
    title: "Info Lowongan Mengajar",
    body: "Peluang mengajar dari sesama komunitas, langsung dari grup.",
  },
  {
    icon: Handshake,
    title: "Kenalan dengan Sesama Pendidik",
    body: "Belajar dari guru dan tutor lain di berbagai daerah.",
  },
];

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary-dark sm:text-5xl">
            Komunitas Guru & Tutor Indonesia untuk Terus Belajar dan Berkembang
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Gabung obrolan seputar dunia mengajar — berbagi cerita, tips, dan saling
            menguatkan sesama pendidik.
          </p>
        </div>
      </section>

      {/* 2. Apa yang Akan Anda Dapat */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-card-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA Penutup */}
      <section className="bg-muted-bg/60 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h3 className="text-xl font-bold text-primary-dark sm:text-2xl">
            Siap Gabung Ngobrol Bareng Sesama Pendidik?
          </h3>
          <div className="mt-6 flex justify-center">
            <Button href={WA_GROUP_LINK} variant="whatsapp" external>
              <WhatsAppIcon size={20} />
              Gabung Grup WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
