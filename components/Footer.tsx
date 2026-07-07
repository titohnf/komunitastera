import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary-dark/20 bg-primary-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                T
              </span>
              <span className="text-lg font-bold text-white">Tera</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Ruang bagi guru dan tutor di Indonesia untuk belajar bareng, saling
              mendukung, dan merayakan kerja mendidik.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Jelajahi</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>halo@tera.or.id</li>
              <li>Instagram: @tera.or.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/60">
          &copy; {new Date().getFullYear()} Tera. Bagian dari ekosistem yang berkomitmen
          pada pendidikan yang lebih baik.
        </div>
      </div>
    </footer>
  );
}
