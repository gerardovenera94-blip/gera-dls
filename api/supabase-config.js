module.exports = function handler(_request, response) {
  const { SUPABASE_URL } = process.env;
  const SUPABASE_PUBLISHABLE_KEY =
    process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLIC_KEY;

  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return response.status(500).json({ error: 'La configuración de reservas no está disponible.' });
  }

  const supabaseUrl = SUPABASE_URL.replace(/\/rest\/v1\/?$/, '');

  response.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
  return response.status(200).json({
    supabaseUrl,
    supabasePublishableKey: SUPABASE_PUBLISHABLE_KEY,
  });
};
