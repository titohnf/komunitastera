import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || typeof body.email !== "string") {
    return NextResponse.json({ error: "Email tidak valid." }, { status: 400 });
  }

  // Placeholder: belum terhubung ke penyedia email sungguhan.
  return NextResponse.json({ ok: true });
}
