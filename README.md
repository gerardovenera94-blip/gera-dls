# SERIE A DLS CHAMPIONSHIP

## Variables de Vercel

Configura estas variables para los entornos que vayas a desplegar:

- `SUPABASE_URL`: la URL del proyecto Supabase.
- `SUPABASE_PUBLISHABLE_KEY`: la clave publicable `sb_publishable_...` del proyecto.

La clave publicable puede llegar al navegador y está protegida por las políticas RLS de Supabase. No configures ni utilices claves `sb_secret_...` o `service_role` en Vercel para esta web.

La ruta `/api/supabase-config` entrega únicamente esos dos valores públicos. Las reservas se guardan en `public.team_reservations`; la base de datos impide que un equipo se reserve dos veces.
