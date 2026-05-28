import { PageHeader, Card, ExternalCard, MiniCard } from "@/components/ui";
import { channelLinks } from "@/lib/data";
export default function PinterestPage() {
  return <div className="space-y-4"><PageHeader eyebrow="Pinterest" title="Pinterest = ป้ายบอกทาง" desc="ลง 3–5 pins ต่อวันเพื่อดัน traffic ไป Etsy/KDP ไม่ต้องกรอกราย pin ตอนนี้" /><ExternalCard href={channelLinks.pinterest} title="เปิด Pinterest ByeTension" desc="ช่องจริง" className="border-l-4 border-l-pin" /><div className="grid gap-3 md:grid-cols-3"><MiniCard label="เป้าหมาย" value="3–5" note="pins/วัน" className="border-l-4 border-l-pin" /><MiniCard label="ใช้ภาพ" value="Reuse" note="wall art / mockup / preview" className="border-l-4 border-l-pin" /><MiniCard label="Record" value="Calendar" note="ติ๊กในหน้าปฏิทิน" /></div><Card title="Project Context"><p className="text-sm font-medium leading-6 text-muted">Pinterest ใช้กับ ByeTension และ Life Next เป็นสาย search ต้องใช้ภาพอ่านง่ายและ keyword ชัด</p></Card></div>
}
