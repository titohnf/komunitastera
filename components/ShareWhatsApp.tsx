"use client";

import { MessageCircle } from "lucide-react";

export default function ShareWhatsApp({
  title,
  path,
  compact = false,
}: {
  title: string;
  path: string;
  compact?: boolean;
}) {
  const url = `https://tera.or.id${path}`;
  const text = encodeURIComponent(`${title} — ${url}`);
  const href = `https://wa.me/?text=${text}`;

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke WhatsApp"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-card-border text-primary-dark transition-colors hover:bg-muted-bg"
      >
        <MessageCircle size={16} />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary-dark transition-colors hover:bg-muted-bg"
    >
      <MessageCircle size={16} />
      Bagikan ke WhatsApp
    </a>
  );
}
