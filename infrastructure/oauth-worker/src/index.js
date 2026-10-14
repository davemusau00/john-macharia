export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/auth') {
      const params = new URLSearchParams({client_id: env.GITHUB_CLIENT_ID, redirect_uri: `${url.origin}/callback`, scope: 'repo'});
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing OAuth code', {status: 400});
      const response = await fetch('https://github.com/login/oauth/access_token', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code})});
      const token = await response.json();
      if (!token.access_token) return new Response('OAuth exchange failed', {status: 502});
      return new Response(`<script>window.opener.postMessage({token:'${token.access_token}'}, '*');window.close();</script>`, {headers: {'content-type': 'text/html; charset=utf-8'}});
    }
    return new Response('Not found', {status: 404});
  }
};
