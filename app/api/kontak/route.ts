import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || !body?.name || !body?.message) {
    return NextResponse.json({ error: "Data tidak lengkap." }, { status: 400 });
  }

  // Placeholder: belum terhubung ke sistem penyimpanan/email sungguhan.
  return NextResponse.json({ ok: true });
}
