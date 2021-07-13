pageAssets = ['./','./manifest.json','./PONG','./TETRIS','sound.wav','./main.css','./index.js',"./sw.js",'./index.html']

self.addEventListener('install', async function(event) {
  const cache = await caches.open('pageCache')
  cache.addAll(pageAssets)
});
self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event);
  
});

self.addEventListener('fetch', async function(event){
  const req = event.request
  event.respondWith(cacheFirst(req))
})

async function cacheFirst(req){
  const cachedResponse = await caches.match(req)
  return cachedResponse || fetch(req)
}

