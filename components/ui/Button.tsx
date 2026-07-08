import type { ReactNode } from "react";

const VARIANT_CLASSES: Record<string, string> = {
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5a] focus-visible:outline-[#25D366]",
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-dark focus-visible:outline-primary",
  outline:
    "border border-primary text-primary-dark hover:bg-muted-bg focus-visible:outline-primary",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  variant?: "whatsapp" | "primary" | "outline";
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto ${VARIANT_CLASSES[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
