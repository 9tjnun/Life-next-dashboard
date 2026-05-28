import { PageHeader, Card } from "@/components/ui";
export default function SettingsPage() {
  return <div className="space-y-4"><PageHeader eyebrow="Settings" title="ตั้งค่าเว็บ" desc="เวอร์ชันนี้ไม่มี AI ใช้ localStorage บันทึก record ใน browser เครื่องนี้" /><Card title="สถานะระบบ"><div className="space-y-2 text-sm font-medium leading-6 text-muted"><p>✅ ไม่มี OpenAI API ในเว็บนี้</p><p>✅ ไม่ต้องตั้งค่า API key</p><p>✅ Facebook / YouTube / Product records บันทึกในเครื่องนี้</p><p>✅ Calendar task done บันทึกในเครื่องนี้</p><p>⚠️ ถ้าล้าง browser data ข้อมูล localStorage จะหาย</p><p>ต่อไปถ้าต้องใช้หลายเครื่อง ค่อยต่อ Supabase</p></div></Card></div>
}
