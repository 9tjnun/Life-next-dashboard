# Life Next Dashboard v10.5 — Build Safe Thai

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


## v10.1 Update
- เพิ่มปุ่ม Clear all ในหน้าปฏิทินด้านขวา
- ปุ่มนี้ล้างติ๊กถูกทั้งหมดของวันที่เลือก
- เหมาะสำหรับ reset งานวันนั้นถ้าติ๊กผิด


## v10.2 Update
- เปลี่ยนส่วน "ลิงก์ช่องทางจริง" ในหน้าแรกเป็น Logo Link Cards
- ใช้ไอคอนใหญ่ + สีแพลตฟอร์มแบบสุภาพ
- ไม่สร้างภาพ ไม่ใช้ไฟล์โลโก้ภายนอก


## v10.3 Update
- แก้ schedule logic ไม่ให้ KDP / Life Next Etsy / Ebook ขึ้นทุกวัน
- Daily: ByeTension Etsy, Pinterest, Facebook
- YouTube + Reels: พุธ / ศุกร์ / อาทิตย์
- KDP Work: อังคาร / พฤหัส
- Life Next Etsy Printable: ศุกร์ 21:00 ไทย เริ่มต้น 1 listing/สัปดาห์
- KDP Publish cycle: 1 เล่มทุก 2 สัปดาห์หลังระบบนิ่ง
- Ebook / Mini Guide: เดือนละ 1 เล่ม
- เพิ่มเวลาไทยในงานแต่ละ task
- เพิ่มตารางความถี่ในหน้า Guide


## v10.4 Update
- แก้ปฏิทินให้ KDP ขึ้นแค่ 2 ช่องต่อเดือน: วันที่ 14 และ 28
- แก้ Ebook ให้ขึ้นแค่ 1 ช่องต่อเดือน: วันที่ 21
- Reels ยังขึ้นพร้อม Shorts: พุธ / ศุกร์ / อาทิตย์
- หน้าแรกใช้ logic เดียวกับปฏิทิน


## v10.5 Update — Build Safe Thai
- Verified local `npm run build` passes on Next.js 16.2.6.
- Restored valid `tsconfig.json` JSON structure with `@/*` path alias.
- Confirmed `postcss.config.mjs` exports a valid default config.
- Kept AI routes disabled in planner mode to avoid missing OpenAI/Supabase imports.
- Preserved v10 localStorage keys so old browser data can continue to load.
