pageAssets = ['./','./main.css','./index.js']

self.addEventListener('install', async function(event) {
  const cache = await caches.open('pageCache')
  cache.addAll(pageAssets)
});
self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
  
});

self.addEventListener(fetch, (event) => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
  console.log('Inside the fetch handler:', event);
});
