import Link from "next/link";
import { Facebook, Youtube, ShoppingBag, Pin, ExternalLink } from "lucide-react";
import { PageHeader, Card } from "@/components/ui";
import { TodayDashboard } from "@/components/client/today-dashboard";
import { channelLinks } from "@/lib/data";

function LogoLinkCard({
  href,
  title,
  desc,
  icon,
  accentClass,
  softClass
}: {
  href: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accentClass: string;
  softClass: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group block rounded-2xl border border-line bg-panel p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-float`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${softClass}`}>
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClass}`}>
            {icon}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-base font-semibold text-ink">{title}</h3>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted transition group-hover:text-ink" />
          </div>
          <p className="mt-1 text-xs font-medium leading-5 text-muted">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Dashboard v10.5 — Build Safe" title="วันนี้ต้องทำอะไร" desc="หน้าแรกเป็นรายงานตามปฏิทินเท่านั้น ถ้าจะติ๊กงานให้ไปที่หน้าปฏิทิน" />
      <TodayDashboard />

      <Card title="ลิงก์ช่องทางจริง">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <LogoLinkCard
            href={channelLinks.facebook}
            title="Facebook"
            desc="ห้องนั่งเล่น / คนแก่พักใจ"
            icon={<Facebook className="h-5 w-5 text-white" />}
            accentClass="bg-fb"
            softClass="bg-fbSoft"
          />
          <LogoLinkCard
            href={channelLinks.youtube}
            title="YouTube"
            desc="Shorts / mood video"
            icon={<Youtube className="h-5 w-5 text-white" />}
            accentClass="bg-yt"
            softClass="bg-ytSoft"
          />
          <LogoLinkCard
            href={channelLinks.etsy}
            title="Etsy ByeTension"
            desc="วอลอาร์ท / 5 listings ต่อวัน"
            icon={<ShoppingBag className="h-5 w-5 text-white" />}
            accentClass="bg-etsy"
            softClass="bg-etsySoft"
          />
          <LogoLinkCard
            href={channelLinks.pinterest}
            title="Pinterest"
            desc="3–5 pins ต่อวัน"
            icon={<Pin className="h-5 w-5 text-white" />}
            accentClass="bg-pin"
            softClass="bg-pinSoft"
          />
        </div>
      </Card>
    </div>
  );
}
