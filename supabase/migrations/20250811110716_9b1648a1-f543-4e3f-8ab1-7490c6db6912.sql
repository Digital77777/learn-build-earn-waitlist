-- Create waiting_list table to store signups
create table if not exists public.waiting_list (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  university text,
  signup_date timestamp with time zone not null default now()
);

-- Ensure unique emails
create unique index if not exists waiting_list_email_key on public.waiting_list (email);

-- Enable Row Level Security
alter table public.waiting_list enable row level security;

-- Allow anyone (anon or authenticated) to insert into the waiting list
drop policy if exists "Anyone can insert email to waiting_list" on public.waiting_list;
create policy "Anyone can insert email to waiting_list"
  on public.waiting_list
  for insert
  to public
  with check (true);

-- Note: We intentionally do NOT add a SELECT policy so emails are not readable from the client.
-- You can view data in the Supabase Dashboard or via service role in a secure environment.