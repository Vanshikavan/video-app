export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { q } = req.query;
    
    if (!q) {
      res.status(400).json({ error: 'Query parameter "q" is required' });
      return;
    }

    // Proxy the request to Google's suggestion API
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`
    );

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
}

