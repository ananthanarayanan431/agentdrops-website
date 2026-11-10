/**
 * The site's only server code. Static pages are served straight from dist/;
 * just /api/* reaches this Worker (see run_worker_first in wrangler.jsonc).
 * Secrets: `npx wrangler secret put NAME`, then add an `env` parameter to fetch.
 */

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/health') return json({ ok: true });
    return json({ ok: false, error: 'not found' }, 404);
  },
};
