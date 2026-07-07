import type { Metadata } from "next";
import { Ear, GraduationCap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Tera",
  description: "Cerita berdirinya Tera dan apa yang kami percaya tentang kesejahteraan pendidik.",
};

const BELIEFS = [
  {
    icon: Ear,
    title: "Mendengarkan adalah Langkah Pertama",
    body: "Setiap program yang kami buat berangkat dari cerita nyata guru dan tutor, bukan asumsi dari balik meja.",
  },
  {
    icon: GraduationCap,
    title: "Pengembangan Bukan Formalitas",
    body: "Pelatihan dan lokakarya kami dirancang untuk benar-benar dipakai di kelas, bukan sekadar memenuhi sertifikat.",
  },
  {
    icon: HeartHandshake,
    title: "Kesejahteraan Pendidik adalah Investasi",
    body: "Kami percaya mendukung kesejahteraan guru — mental, fisik, dan finansial — adalah investasi jangka panjang untuk pendidikan.",
  },
];

const WAYS_OF_WORKING = [
  {
    title: "Mendengarkan secara rutin",
    body: "Kami rutin mengadakan sesi mendengarkan dengan guru dan tutor dari berbagai daerah, bukan hanya saat merancang program baru.",
  },
  {
    title: "Merayakan hal-hal kecil",
    body: "Kerja mendidik penuh dengan momen kecil yang jarang dirayakan. Kami berusaha menjadi ruang yang mengapresiasi itu.",
  },
  {
    title: "Saling belajar",
    body: "Kami percaya guru punya banyak hal untuk diajarkan satu sama lain, dan tugas kami adalah membuka ruang untuk itu.",
  },
];

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Tentang Kami</h1>

      <div className="prose-tera mt-8 max-w-none text-foreground/90">
        <p>
          Tera lahir dari keresahan sederhana: guru dan tutor adalah sosok yang paling
          banyak memberi dalam ekosistem pendidikan, tetapi seringkali paling sedikit
          didengar. Berawal dari percakapan-percakapan informal dengan guru di berbagai
          daerah, kami menyadari ada kebutuhan akan ruang yang benar-benar berpihak pada
          kesejahteraan pendidik — bukan sekadar program formalitas.
        </p>
        <p>
          Dari situ, Tera dibangun sebagai wajah organisasi yang fokus mengangkat isu
          kesejahteraan guru: menyediakan ruang belajar bersama, informasi event dan
          lowongan, serta wadah untuk berbagi cerita dan refleksi antar pendidik di
          seluruh Indonesia.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Apa yang Kami Percaya</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {BELIEFS.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">
          Bagaimana Kami Bekerja Sehari-hari
        </h2>
        <div className="mt-8 space-y-8">
          {WAYS_OF_WORKING.map((item, i) => (
            <div key={item.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted-bg font-bold text-primary-dark">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
