self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('myCache').then(function(cache) {
      return cache.addAll(
        ['/',
          '/main.css',
          '/index.js',
          '/index.html'
        ]
      );
    })
  );
});
