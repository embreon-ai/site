-- Embreon waitlist. Run once in Supabase → SQL Editor.
-- Project settings assumed: Data API on, "Automatically expose new tables" off, automatic RLS on.
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique check (char_length(email) <= 254),
  lang text not null default 'fr' check (lang in ('fr', 'en')),
  source text,
  created_at timestamptz not null default now()
);

-- Row Level Security on, with no policy: anon and authenticated roles get nothing.
alter table public.waitlist enable row level security;

-- Only the server route (service role / secret key, kept in Vercel) can write to the table.
grant select, insert on table public.waitlist to service_role;
grant usage, select on sequence public.waitlist_id_seq to service_role;

comment on table public.waitlist is 'Embreon waitlist: one row per email, used only to announce the launch.';
