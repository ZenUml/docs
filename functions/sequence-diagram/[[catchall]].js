export async function onRequest(event) {
  const url = new URL(event.request.url);
  console.log('request url', url.pathname)

  if (url.pathname === '/sequence-diagram') {
    const newPathname = url.pathname.replace('/sequence-diagram', '');
    const appURL = new URL(`http://sequence-diagram.zenuml.com/${newPathname}`)
    return fetch(appURL, event.request);
  } 
  
  else if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    const appURL = new URL(`http://sequence-diagram.zenuml.com/${url.pathname}`)
    return fetch(appURL, event.request);
  }

  return fetch(event.request);
}