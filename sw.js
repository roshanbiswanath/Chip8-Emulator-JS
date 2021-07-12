self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          'new.css',
          'index.js',
          'index.html'
        ]
      );
    })
  );
});
