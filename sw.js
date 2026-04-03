const CACHE_NAME = 'strong-arsenal-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // تأكد من وجود صورة بهذا الاسم في المستودع
];

// 1. مرحلة التثبيت (Installation) - تخزين الترسانة الأساسية
self.addEventListener('install', (event) => {
  self.skipWaiting(); // إجبار السيرفس وركر الجديد على التفعيل فوراً
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('✅ الترسانة: تم تأمين الملفات الأساسية في الكاش');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. مرحلة التفعيل (Activation) - تنظيف المخلفات القديمة
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🧹 الترسانة: تنظيف الكاش القديم');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim(); // السيطرة على المتصفح فوراً
});

// 3. استراتيجية الجلب الذكية (Stale-While-Revalidate)
// القوة هنا: يعطيك الملف من الكاش فوراً (سرعة صاروخية) 
// وفي الخلفية يذهب للإنترنت ليحدث الكاش للمرة القادمة
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // تحديث الكاش بالنسخة الجديدة من الإنترنت
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // إذا انقطع الإنترنت تماماً، لا تفعل شيئاً (سيبقى يستخدم الكاش)
        });
        
        // ارجع الكاش فوراً إذا وجد، أو انتظر رد الشبكة
        return response || fetchPromise;
      });
    })
  );
});
