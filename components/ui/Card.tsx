import Link from "next/link";
import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {children}
    </div>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col gap-3 p-5">{children}</div>;
}

export function CardBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block w-fit rounded-full bg-muted-bg px-3 py-1 text-xs font-medium text-primary-dark">
      {children}
    </span>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-bold leading-snug text-foreground">{children}</h3>;
}

export function CardMeta({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted">{children}</p>;
}

export function CardFooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
    >
      {children}
    </Link>
  );
}
