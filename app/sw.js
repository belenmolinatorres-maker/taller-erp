/* Taller ERP - Service Worker */
const CACHE = 'taller-erp-v2';

const PRECACHE = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/api.js',
  'manifest.json',
  'img/logo-taller.png',
  'icons/icon-192.svg',
  'icons/icon-512.svg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(cache => {
          if (e.request.url.startsWith(self.location.origin) &&
              !e.request.url.includes('/api/')) {
            cache.put(e.request, clone);
          }
        });
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
