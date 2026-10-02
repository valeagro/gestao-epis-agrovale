const CACHE_NAME = 'epi-agrovale-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o motor offline
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceta os pedidos de internet e serve os ficheiros guardados no telemóvel
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
