import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <Image src="/logo.png" alt="Tera" width={20} height={22} className="h-5 w-auto" />
              </span>
              <span className="text-lg font-bold text-foreground">Tera</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">
              Ruang bagi guru dan tutor di Indonesia untuk belajar bareng, saling
              mendukung, dan merayakan kerja mendidik.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Jelajahi</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><Link href="/" className="hover:text-primary-dark">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-primary-dark">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontak</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>teralearningcenter.id@gmail.com</li>
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/insantera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-dark"
                >
                  @insantera
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-card-border pt-6 text-xs text-foreground/60">
          &copy; {new Date().getFullYear()} Tera. Bagian dari ekosistem yang berkomitmen
          pada pendidikan yang lebih baik.
        </div>
      </div>
    </footer>
  );
}
