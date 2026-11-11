create table public.team_reservations (
  team_id text primary key
    check (team_id in (
      'juventus', 'inter', 'milan', 'napoli', 'roma', 'lazio', 'atalanta',
      'fiorentina', 'bologna', 'torino', 'verona', 'genoa', 'udinese',
      'cagliari', 'monza', 'parma', 'venezia', 'lecce', 'como', 'empoli'
    )),
  manager_name text not null
    check (char_length(manager_name) between 1 and 20)
    check (manager_name = btrim(manager_name)),
  created_at timestamptz not null default now()
);

alter table public.team_reservations enable row level security;

revoke all on table public.team_reservations from public;
grant select, insert on table public.team_reservations to anon, authenticated;

create policy "Anyone can view team reservations"
on public.team_reservations
for select
to anon, authenticated
using (true);

create policy "Anyone can reserve an available team"
on public.team_reservations
for insert
to anon, authenticated
with check (true);

alter publication supabase_realtime add table public.team_reservations;

revoke all on table public."REservas SErie A" from public, anon, authenticated;

create policy "Legacy reservations remain inaccessible"
on public."REservas SErie A"
for select
to anon, authenticated
using (false);
