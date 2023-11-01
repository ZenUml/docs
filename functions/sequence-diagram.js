export function onRequest(event) {
  const url = new URL(event.request.url);
  console.log('request url', url.pathname)

  if (url.pathname.startsWith('/sequence-diagram')) {
    const newPathname = url.pathname.replace('/sequence-diagram', '');
    // const appURL = new URL(`http://18.141.198.134:8000/${newPathname}`)
    const appURL = new URL(`https://zenuml.cn`)
    return fetch(appURL, event.request);
  }

  return fetch(event.request);
}