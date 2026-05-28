import { PageHeader, Card } from "@/components/ui";
import { YoutubeRecords } from "@/components/client/youtube-records";
export default function YoutubePage() {
  return <div className="space-y-4"><PageHeader eyebrow="YouTube" title="YouTube Shorts = เครื่องสร้างอารมณ์" desc="Project: Life Next Chapter / บันทึกคลิป hook รายละเอียด ลิงก์ และติ๊กว่าเอาไปลง Reels แล้วหรือยัง" /><Card title="วิธีใช้สั้น ๆ"><div className="grid gap-2 md:grid-cols-3 text-xs font-medium leading-5"><div className="rounded-xl bg-ytSoft p-3">1. บันทึกไอเดียคลิปหรือคลิปพร้อมลง</div><div className="rounded-xl bg-ytSoft p-3">2. ตั้งสถานะ Idea / Ready / Posted</div><div className="rounded-xl bg-ytSoft p-3">3. คลิปที่ Posted แล้วให้ติ๊ก Reels ด้วย</div></div></Card><YoutubeRecords /></div>
}
