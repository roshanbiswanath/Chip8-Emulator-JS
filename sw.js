self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          'main.css',
          'index.js',
          'index.html'
        ]
      );
    })
  );
});
