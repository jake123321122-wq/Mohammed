const CACHE_NAME = 'strong-arsenal-v2'; // غيرنا الاسم لتحديث الكاش
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // استخدام cache.addAll بحذر، إذا ملف واحد خطأ ستفشل العملية
      return Promise.all(
        ASSETS_TO_CACHE.map(url => {
          return fetch(url).then(response => {
            if (!response.ok) throw new Error('فشل تحميل: ' + url);
            return cache.put(url, response);
          }).catch(err => console.log('خطأ في الترسانة:', err));
        })
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
