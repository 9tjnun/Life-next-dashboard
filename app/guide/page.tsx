import { PageHeader, Card } from "@/components/ui";
import { platformMeta, projectMap } from "@/lib/data";
export default function GuidePage() {
  return <div className="space-y-4"><PageHeader eyebrow="Project Guide" title="รายละเอียดโครงการทั้งหมด" desc="ดูให้ชัดว่างานแต่ละอย่างเป็นของโปรเจกต์ไหน ลงช่องทางไหน ร้านไหน และทำไปเพื่ออะไร" /><Card title="Project Map"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{projectMap.map(p=>{const c=platformMeta[p.platform]; return <div key={p.project} className={`rounded-2xl border border-line ${c.soft} p-4`}><p className="text-lg font-semibold text-ink">{p.project}</p><p className={`mt-1 text-xs font-semibold ${c.color}`}>{p.channels}</p><p className="mt-2 text-sm font-medium text-ink">{p.role}</p><p className="mt-2 text-xs leading-5 text-muted">{p.whatToDo}</p></div>})}</div></Card></div>
}
