export default {
  async fetch(request, env, ctx) {
    // Only handle GET requests
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Check if the resource exists in cache
    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    let response = await cache.match(cacheKey);

    if (!response) {
      // If not in cache, fetch from Google Drive
      const googleDriveUrl = `https://docs.google.com${path}`;
      const googleDriveRequest = new Request(googleDriveUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      try {
        response = await fetch(googleDriveRequest);
        
        // Check if the response is successful
        if (!response.ok) {
          return new Response('Resource not found', { status: 404 });
        }

        // Clone the response before caching
        const clonedResponse = response.clone();
        
        // Cache the response
        ctx.waitUntil(cache.put(cacheKey, clonedResponse));
      } catch (error) {
        return new Response('Error fetching resource', { status: 500 });
      }
    }

    // Return the response
    return response;
  }
}; 