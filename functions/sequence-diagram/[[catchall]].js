export async function onRequest(event) {
  const url = new URL(event.request.url);
  let newUrl = url;
  console.log('original url', url)

  if (url.pathname === '/sequence-diagram' 
      || url.pathname.startsWith('/sequence-diagram/share')
    ) {
    const newPathname = url.pathname.replace('/sequence-diagram', '');
    newUrl = new URL(`http://sequence-diagram.zenuml.com${newPathname}`)
  } 
  
  else if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    newUrl = new URL(`http://sequence-diagram.zenuml.com${url.pathname}`)
  }

  console.log('new url', newUrl)
  return fetch(newUrl, event.request);
}