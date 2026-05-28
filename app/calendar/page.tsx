import { PageHeader } from "@/components/ui";
import { MonthCalendar } from "@/components/client/month-calendar";

export default function CalendarPage() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Calendar" title="ปฏิทินกดดูงานรายวัน" desc="แต่ละวันใช้แท็กสีเล็ก ๆ บอกงาน ไม่รกตา กดวันที่เพื่อดูรายละเอียดและติ๊กงานที่เสร็จได้ ถ้าเสร็จครบทั้งวัน ช่องวันนั้นจะเป็นสีเขียว" />
      <MonthCalendar />
    </div>
  );
}
