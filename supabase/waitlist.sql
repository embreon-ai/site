-- Embreon waitlist. Run once in Supabase → SQL Editor.
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique check (char_length(email) <= 254),
  lang text not null default 'fr' check (lang in ('fr', 'en')),
  source text,
  created_at timestamptz not null default now()
);

-- Row Level Security on, with no policy: nobody can read or write through the public API.
-- Only the server route (service role key, kept in Vercel) can insert.
alter table public.waitlist enable row level security;

comment on table public.waitlist is 'Embreon waitlist: one row per email, used only to announce the launch.';
