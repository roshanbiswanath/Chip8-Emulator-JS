self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('myCache').then(function(cache) {
      return cache.addAll(
        ['/'
        ]
      );
    })
  );
});
self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
  
});

self.addEventListener(fetch, (event) => {
  event.waitUntil(
    caches.open('myCache').then(function(cache) {
      return cache.addAll(
        ['/'
        ]
      );
    })
  );
  console.log('Inside the fetch handler:', event);
});
