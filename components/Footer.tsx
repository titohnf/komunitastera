import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-card-border bg-muted-bg/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                T
              </span>
              <span className="text-lg font-bold text-primary-dark">Tera</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Ruang bagi guru dan tutor di Indonesia untuk belajar bareng, saling
              mendukung, dan merayakan kerja mendidik.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-dark">Jelajahi</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/event" className="hover:text-primary-dark">Event</Link></li>
              <li><Link href="/karier" className="hover:text-primary-dark">Karier</Link></li>
              <li><Link href="/cerita" className="hover:text-primary-dark">Cerita & Insight</Link></li>
              <li><Link href="/tentang" className="hover:text-primary-dark">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-dark">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>halo@tera.or.id</li>
              <li>Instagram: @tera.or.id</li>
              <li>
                <Link href="/kontak" className="hover:text-primary-dark">
                  Hubungi kami &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-6 text-xs text-muted">
          &copy; {new Date().getFullYear()} Tera. Bagian dari ekosistem yang berkomitmen
          pada pendidikan yang lebih baik.
        </div>
      </div>
    </footer>
  );
}
