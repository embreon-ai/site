import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  const lang = body.lang === "en" ? "en" : "fr";
  const source = typeof body.source === "string" ? body.source.slice(0, 32) : null;

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "too_many_requests" }, { status: 429 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "waitlist_not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/waitlist?on_conflict=email`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify({ email, lang, source }),
      cache: "no-store",
    });
    if (res.ok || res.status === 409) {
      return NextResponse.json({ ok: true });
    }
    console.error("waitlist insert failed", res.status, await res.text());
    return NextResponse.json({ error: "storage_failed" }, { status: 502 });
  } catch (err) {
    console.error("waitlist insert error", err);
    return NextResponse.json({ error: "storage_unreachable" }, { status: 502 });
  }
}
