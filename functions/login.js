export async function onRequest(event) {
  const url = new URL(event.request.url);
  console.log('request url', url.pathname)

  const appURL = new URL(`http://sequence-diagram.zenuml.com${url.pathname}`)
  return fetch(appURL, event.request);
}