const TEXT_CONTENT_TYPES = ['text', 'application/json', 'application/xml'];

export async function onRequest(event) {
  const targetDomain =
    event.env.LARASITE_DOMAIN || 'sequence-diagram.zenuml.com';
  const newHttpsOrigin = `https://${targetDomain}`;
  const newHttpOrigin = `http://${targetDomain}`;

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

  const replaceUrl = (s) =>
    s
      .replaceAll(newHttpsOrigin, url.origin)
      .replaceAll(newHttpOrigin, url.origin);

  const isTextResponse = () => {
    const contentType = response.headers.get('content-type');
    return (
      contentType &&
      TEXT_CONTENT_TYPES.find((p) => contentType.toLowerCase().startsWith(p))
    );
  };

  const newResponseData = isTextResponse()
    ? replaceUrl(await response.text())
    : await response.arrayBuffer();

  const newHeaders = new Headers(response.headers);
  for (const [header, value] of newHeaders) {
    newHeaders.set(header, replaceUrl(value));
  }
  newHeaders.set('X-Forwarded-By', 'Cloudflare page function');

  return new Response(newResponseData, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
