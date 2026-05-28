import { PageHeader, Card } from "@/components/ui";
import { cycleRules, platformMeta, projectMap } from "@/lib/data";

export default function GuidePage() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Project Guide" title="รายละเอียดโครงการทั้งหมด" desc="ดูให้ชัดว่างานแต่ละอย่างเป็นของโปรเจกต์ไหน ลงช่องทางไหน ร้านไหน และทำไปเพื่ออะไร" />

      <Card title="ตารางความถี่และเวลาไทย">
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-neutralSoft text-muted">
              <tr>
                <th className="p-3">งาน</th>
                <th className="p-3">ความถี่</th>
                <th className="p-3">เวลาไทย</th>
                <th className="p-3">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {cycleRules.map((rule) => (
                <tr key={rule.name} className="border-t border-line bg-white align-top">
                  <td className="p-3 font-semibold text-ink">{rule.name}</td>
                  <td className="p-3 font-medium text-ink">{rule.frequency}</td>
                  <td className="p-3 font-semibold text-ink">{rule.thaiTime}</td>
                  <td className="p-3 leading-5 text-muted">{rule.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Project Map">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {projectMap.map((p) => {
            const c = platformMeta[p.platform];
            return (
              <div key={p.project} className={`rounded-2xl border border-line ${c.soft} p-4`}>
                <p className="text-lg font-semibold text-ink">{p.project}</p>
                <p className={`mt-1 text-xs font-semibold ${c.color}`}>{p.channels}</p>
                <p className="mt-2 text-sm font-medium text-ink">{p.role}</p>
                <p className="mt-2 text-xs leading-5 text-muted">{p.whatToDo}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
