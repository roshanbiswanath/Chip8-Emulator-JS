self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('myCache').then(function(cache) {
      return cache.addAll(
        ['/main.css','index.js','index.html'
        ]
      );
    })
  );
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
