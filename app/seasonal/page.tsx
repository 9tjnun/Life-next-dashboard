import { PageHeader, Card, Pill } from "@/components/ui";
import { seasonalGuide } from "@/lib/data";
export default function SeasonalPage() {
  const currentMonth = new Date().getMonth() + 1;
  return <div className="space-y-4"><PageHeader eyebrow="Seasonal Guide" title="ไกด์เทศกาล / ธีมรายเดือน" desc="ใช้หาไอเดียให้ถูกฤดูกาล ว่าเดือนไหนควรลงธีมอะไร" /><Card title="Seasonal Calendar"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{seasonalGuide.map(m => <div key={m.month} className={`rounded-2xl border p-4 ${m.month === currentMonth ? "border-seasonal bg-seasonalSoft" : "border-line bg-white"}`}><div className="flex items-center justify-between gap-2"><p className="text-lg font-semibold text-ink">{m.monthName}</p>{m.month === currentMonth && <Pill className="bg-seasonal text-white">เดือนนี้</Pill>}</div><p className="mt-1 text-sm font-semibold text-seasonal">{m.theme}</p><p className="mt-2 text-xs leading-5 text-muted">{m.ideas}</p></div>)}</div></Card></div>
}
