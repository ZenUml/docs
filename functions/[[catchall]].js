const targetDomain = 'sequence-diagram.zenuml.com';
const newOrigin = `https://${targetDomain}`;
const newOrigin2 = `http://${targetDomain}`;

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

  // else if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')
  //     || url.pathname.startsWith('/vendor')
  //     || url.pathname.startsWith('/login')) {
  //   newPathname = url.pathname;
  // }

  const newUrl = `${newOrigin}${newPathname}`;
  console.log('new url:', newUrl);

  const response = await fetch(new URL(newUrl), event.request);
  const body = await response.text();

  const replaceUrl = (s) =>
    s.replaceAll(newOrigin, url.origin).replaceAll(newOrigin2, url.origin);
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
