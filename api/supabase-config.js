module.exports = function handler(_request, response) {
  const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = process.env;

  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return response.status(500).json({ error: 'La configuración de reservas no está disponible.' });
  }

  response.setHeader('Cache-Control', 'public, max-age=60, s-maxage=300');
  return response.status(200).json({
    supabaseUrl: SUPABASE_URL,
    supabasePublishableKey: SUPABASE_PUBLISHABLE_KEY,
  });
};
