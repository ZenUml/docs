const TEXT_CONTENT_TYPES = ['text', 'application/json', 'application/xml'];
// How the reverse proxy works
// https://zenuml.com/sequence-diagram/share/7fc5e57b-d812-4c7d-a86b-d35ef96fe302:nWttdaNAxHJBTeZ9wDAKq76h59wfn9JK?v=261b6bffef8fa6485be52c40981f71e5
export async function onRequest(event) {
  const larasiteDomain =
    event.env.LARASITE_DOMAIN || 'sequence-diagram.zenuml.com';
  const larasiteBaseHttps = `https://${larasiteDomain}`;
  const larasiteBaseHttp = `http://${larasiteDomain}`;

  const inboundUrl = new URL(event.request.url);
  console.log('inbound url:', inboundUrl);

  let outboundPathname = inboundUrl.pathname;

  if (
    inboundUrl.pathname === '/sequence-diagram' ||
    inboundUrl.pathname.startsWith('/sequence-diagram/share') ||
    inboundUrl.pathname.startsWith('/sequence-diagram/embed')
  ) {
    outboundPathname = inboundUrl.pathname.replace('/sequence-diagram', '');
  }

  const outboundUrl = `${larasiteBaseHttps}${outboundPathname}`;
  console.log('outbound url:', outboundUrl);

  // response from the larasite host
  const inboundResponse = await fetch(new URL(outboundUrl), event.request);

  const replaceUrl = (s) =>
    s
      .replaceAll(larasiteBaseHttps, inboundUrl.origin)
      .replaceAll(larasiteBaseHttp, inboundUrl.origin);

  const isTextResponse = () => {
    const contentType = inboundResponse.headers.get('content-type');
    return (
      contentType &&
      TEXT_CONTENT_TYPES.find((p) => contentType.toLowerCase().startsWith(p))
    );
  };

  const outboundResponseData = isTextResponse()
    ? replaceUrl(await inboundResponse.text())
    : await inboundResponse.arrayBuffer();

  const outboundResponseHeaders = new Headers(inboundResponse.headers);
  for (const [header, value] of outboundResponseHeaders) {
    outboundResponseHeaders.set(header, replaceUrl(value));
  }
  outboundResponseHeaders.set('X-Forwarded-By', 'Cloudflare page function');

  return new Response(outboundResponseData, {
    status: inboundResponse.status,
    statusText: inboundResponse.statusText,
    headers: outboundResponseHeaders,
  });
}
