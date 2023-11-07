const targetDomain =
  process.env.LARASITE_DOMAIN || 'sequence-diagram.zenuml.com';
const newHttpsOrigin = `https://${targetDomain}`;
const newHttpOrigin = `http://${targetDomain}`;

export async function onRequest(event) {
  const url = new URL(event.request.url);
  console.log('original url:', url);

  let newPathname = url.pathname;

  if (
    url.pathname === '/sequence-diagram' ||
    url.pathname.startsWith('/sequence-diagram/share')
  ) {
    newPathname = url.pathname.replace('/sequence-diagram', '');
  }

  const newUrl = `${newHttpsOrigin}${newPathname}`;
  console.log('new url:', newUrl);

  const response = await fetch(new URL(newUrl), event.request);
  const body = await response.text();

  const replaceUrl = (s) =>
    s
      .replaceAll(newHttpsOrigin, url.origin)
      .replaceAll(newHttpOrigin, url.origin);
  const newBody = replaceUrl(body);

  const newHeaders = new Headers(response.headers);
  for (const [header, value] of newHeaders) {
    newHeaders.set(header, replaceUrl(value));
  }

  newHeaders.set('X-Forwarded-By', 'Cloudflare page function');

  return new Response(newBody, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
