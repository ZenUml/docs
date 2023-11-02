export function onRequest(event) {
  const url = new URL(event.request.url);
  console.log('request url', url.pathname)

  if (url.pathname.startsWith('/sequence-diagram')) {
    const newPathname = url.pathname.replace('/sequence-diagram', '');
    const appURL = new URL(`http://sequence-diagram.zenuml.com:8000/${newPathname}`)
    return fetch(appURL, event.request);
  }

  return fetch(event.request);
}