import { PageHeader, Card, ExternalCard } from "@/components/ui";
import { TodayDashboard } from "@/components/client/today-dashboard";
import { channelLinks } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Dashboard v10.8 — Stable Planner" title="วันนี้ต้องทำอะไร" desc="หน้าแรกเป็นรายงานตามปฏิทินเท่านั้น ถ้าจะติ๊กงานให้ไปที่หน้าปฏิทิน" />
      <TodayDashboard />
      <Card title="ลิงก์ช่องทางจริง">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <ExternalCard href={channelLinks.facebook} title="Facebook" desc="ห้องนั่งเล่น / คนแก่พักใจ" className="border-l-4 border-l-fb" />
          <ExternalCard href={channelLinks.youtube} title="YouTube" desc="Shorts / mood video" className="border-l-4 border-l-yt" />
          <ExternalCard href={channelLinks.etsy} title="Etsy ByeTension" desc="วอลอาร์ท / 5 listings ต่อวัน" className="border-l-4 border-l-etsy" />
          <ExternalCard href={channelLinks.pinterest} title="Pinterest" desc="3–5 pins ต่อวัน" className="border-l-4 border-l-pin" />
        </div>
      </Card>
    </div>
  );
}
