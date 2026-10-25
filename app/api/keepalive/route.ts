import { NextResponse } from "next/server";

/**
 * Daily ping (see vercel.json) so the free Supabase project never pauses for inactivity.
 * If CRON_SECRET is set in Vercel, only Vercel Cron (which sends it as a Bearer token) can call this.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "waitlist_not_configured" }, { status: 503 });
  }

  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/waitlist?select=id&limit=1`, {
    headers: { apikey: key, ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}) },
    cache: "no-store",
  });
  return NextResponse.json({ ok: res.ok, status: res.status }, { status: res.ok ? 200 : 502 });
}
