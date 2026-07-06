"use client";

import { useState } from "react";

export default function StoryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", publish: false });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setForm({ name: "", email: "", message: "", publish: false });
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-2xl bg-primary/10 p-5 text-primary-dark">
        Terima kasih sudah berbagi cerita. Tim kami akan membacanya.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Nama</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-foreground">Cerita atau Tips Anda</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-card-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-foreground/80">
        <input
          type="checkbox"
          checked={form.publish}
          onChange={(e) => setForm({ ...form, publish: e.target.checked })}
          className="h-4 w-4 rounded border-card-border text-primary"
        />
        Boleh dipublikasikan di halaman Cerita & Insight
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-fit rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Cerita"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Terjadi kesalahan, silakan coba lagi.</p>
      )}
    </form>
  );
}
