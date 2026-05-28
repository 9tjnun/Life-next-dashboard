import { PageHeader, Card } from "@/components/ui";
import { FacebookRecords } from "@/components/client/facebook-records";
export default function FacebookPage() {
  return <div className="space-y-4"><PageHeader eyebrow="Facebook" title="Facebook = ห้องนั่งเล่น" desc="Project: Life Next Chapter / ลงแคปชั่นพักใจ คนแก่พักใจ slow life และเก็บ record ย้อนหลัง" /><Card title="วิธีใช้สั้น ๆ"><div className="grid gap-2 md:grid-cols-3 text-xs font-medium leading-5"><div className="rounded-xl bg-fbSoft p-3">1. ก๊อปแคปชั่นจากที่อื่นมาวาง</div><div className="rounded-xl bg-fbSoft p-3">2. ตั้งสถานะ Ready / Posted</div><div className="rounded-xl bg-fbSoft p-3">3. ถ้า stock ต่ำกว่า 3 วัน ให้สร้างเพิ่ม</div></div></Card><FacebookRecords /></div>
}
