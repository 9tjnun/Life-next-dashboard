# Life Next Dashboard v10.8 — Stable Next 14 Thai

เวอร์ชั่นนี้ทำมาเพื่อให้ Vercel build ผ่านแบบนิ่งขึ้น โดยใช้ Next 14 + React 18 และตัด dependency ที่ยังไม่ใช้ใน planner mode ออกก่อน

## สำคัญ
- ใช้ Node 22.x
- ไม่มี OpenAI/Supabase dependency ในรอบนี้
- ใช้ localStorage สำหรับ records เหมือนเดิม
- อัปขึ้น GitHub เฉพาะโครงไฟล์ ไม่อัป zip ทั้งก้อน

# Life Next Dashboard v10 — Compact Calendar Tags Thai

## แก้ล่าสุด
- ปฏิทินเปลี่ยนจากเส้นยาวรก ๆ เป็น tag สีเล็ก ๆ ในช่องวัน
- สีเป็นโทนสุภาพขึ้น ไม่แสบตา
- เมนูซ้ายแพลตฟอร์มยังเป็นสีเต็มช่องเพื่อแยกชัด
- หน้าแรกเป็นรายงานเท่านั้น ไม่ติ๊กงานรายวัน
- กดวันที่ในปฏิทินแล้วติ๊กงานได้
- ถ้าเสร็จครบทั้งวัน ช่องวันนั้นเป็นสีเขียว
- หน้าอื่นครบ: FB, YT, Etsy, Pinterest, KDP, Product, Seasonal, Guide, Settings

## Deploy
อัปโหลดทับ GitHub repo เดิมทั้งชุด แล้ว Vercel log ต้องขึ้น:
life-next-dashboard@0.10.0-compact-calendar-tags-thai
