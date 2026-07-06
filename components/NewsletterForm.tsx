"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-full bg-primary/10 px-5 py-3 text-sm font-medium text-primary-dark">
        Terima kasih! Anda akan mendapat kabar terbaru dari Tera.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Alamat email Anda"
        className="w-full rounded-full border border-card-border bg-card px-5 py-3 text-sm outline-none focus:border-primary"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
      >
        {status === "loading" ? "Mengirim..." : "Daftar"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:hidden">Gagal mendaftar, coba lagi.</p>
      )}
    </form>
  );
}
