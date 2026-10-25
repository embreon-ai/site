# embreon.com

Landing page for **Embreon**, the AI assistant whose screen is composed for the moment: it prepares your morning briefing, steps back while you work, and asks for your OK before acting for you.

Built with Next.js (App Router) and deployed on Vercel. French at `/`, English at `/en`.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: only needed to test the waitlist
npm run dev
```

## Waitlist

Signups go through `app/api/waitlist/route.ts` into a Supabase table.

1. Run `supabase/waitlist.sql` once in the Supabase SQL editor.
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the Vercel project settings.

Without these variables the form shows a "waitlist opens soon" message instead of failing.

## Content

- Copy for both languages: `lib/dict.ts`
- Links and legal details: `lib/site.ts`
- Product screens: `public/ecrans/`, film: `public/film/`
