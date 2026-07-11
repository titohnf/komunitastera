import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import InstagramIcon from "@/components/InstagramIcon";
import { WA_GROUP_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontak — Tera",
  description: "Info kontak Tera dan link untuk bergabung ke Grup WhatsApp komunitas.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Kontak</h1>
      <p className="mt-3 text-foreground/75">
        Ada pertanyaan atau ingin ngobrol lebih dulu? Hubungi kami lewat kanal di bawah,
        atau langsung gabung ke Grup WhatsApp komunitas.
      </p>

      <div className="mx-auto mt-10 max-w-md rounded-3xl border border-card-border bg-card p-8">
        <ul className="space-y-4 text-left text-sm text-foreground/80">
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            teralearningcenter.id@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <InstagramIcon size={18} className="text-primary" />
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

        <div className="mt-6 flex justify-center">
          <Button href={WA_GROUP_LINK} variant="whatsapp" external>
            <WhatsAppIcon size={20} />
            Gabung Grup WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
