import Image from "next/image";
import { Button } from "@/components/ui/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WA_GROUP_LINK } from "@/lib/config";

const BENEFITS = [
  {
    emoji: "💬",
    title: "Diskusi & Tanya Jawab",
    body: "Berbagi tantangan mengajar sehari-hari dan dapatkan masukan dari sesama pendidik.",
  },
  {
    emoji: "📣",
    title: "Info Event & Pelatihan",
    body: "Jadi yang pertama tahu saat ada event atau pelatihan gratis.",
  },
  {
    emoji: "💼",
    title: "Info Lowongan Mengajar",
    body: "Peluang mengajar dari sesama komunitas, langsung dari grup.",
  },
  {
    emoji: "🤝",
    title: "Kenalan dengan Sesama Pendidik",
    body: "Belajar dari guru dan tutor lain di berbagai daerah.",
  },
];

const GRID_CELLS = [
  { top: 96, left: 48, delay: "0s" },
  { top: 336, left: 240, delay: "0.8s" },
  { top: 192, left: 480, delay: "1.6s" },
  { top: 384, left: 720, delay: "0.4s" },
  { top: 144, left: 960, delay: "1.2s" },
  { top: 288, left: 1152, delay: "2s" },
];

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <div>
          {/* 1. Hero */}
          <section className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+160px)] grid-pattern"
            >
              {GRID_CELLS.map((cell, i) => (
                <span
                  key={i}
                  className="grid-cell-fill"
                  style={{ top: cell.top, left: cell.left, animationDelay: cell.delay }}
                />
              ))}
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center sm:max-w-4xl">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                  Komunitas <span className="relative inline-block">
                    Pendidik
                    <span className="underline-grow" />
                  </span> di Indonesia
                  <br />
                  untuk Terus Belajar dan Berkembang
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
                  Gabung obrolan seputar dunia mengajar — berbagi cerita, tips, dan saling
                  menguatkan sesama pendidik.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Apa yang Akan Anda Dapat */}
          <section className="relative px-4 pb-16 pt-4 sm:px-6 sm:pt-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map(({ emoji, title, body }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-card-border bg-card p-6 shadow-sm"
                  >
                    <span className="text-3xl">{emoji}</span>
                    <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 3. CTA Penutup */}
        <section className="mx-auto max-w-5xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-20">
          <div className="relative overflow-visible rounded-3xl border border-card-border bg-muted-bg/60">
            <div className="grid items-center gap-6 sm:grid-cols-2">
              <div className="px-8 py-8 text-center sm:px-12 sm:py-14 sm:text-left">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Siap Gabung Ngobrol Bareng Sesama Pendidik?
                </h3>
                <div className="mt-6 flex justify-center sm:justify-start">
                  <Button href={WA_GROUP_LINK} variant="whatsapp" external>
                    <WhatsAppIcon size={20} />
                    Gabung Grup WhatsApp
                  </Button>
                </div>
              </div>

              <div className="hidden sm:block" />
            </div>

            <div className="absolute bottom-0 left-1/2 hidden h-[300px] w-1/2 translate-x-16 sm:block">
              <Image
                src="/cta-person.png"
                alt="Gabung komunitas Tera"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
