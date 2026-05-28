import { PageHeader, Card } from "@/components/ui";
import { ProductRecords } from "@/components/client/product-records";

export default function KdpPage() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="KDP" title="KDP = สำนักพิมพ์" desc="สมุดเกม planner journal coloring book และ mini guide ระยะยาว ใช้ Product Planner เป็นตัวคุมสถานะ" />
      <Card title="KDP Schedule">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-kdpSoft p-3 text-sm">
            <p className="font-semibold text-ink">Work Days</p>
            <p className="mt-1 text-xs leading-5 text-muted">อังคาร / พฤหัส · 09:00–14:30 ไทย</p>
          </div>
          <div className="rounded-xl bg-kdpSoft p-3 text-sm">
            <p className="font-semibold text-ink">Publishing Cycle</p>
            <p className="mt-1 text-xs leading-5 text-muted">หลังระบบนิ่ง: 1 เล่มทุก 2 สัปดาห์</p>
          </div>
          <div className="rounded-xl bg-seasonalSoft p-3 text-sm">
            <p className="font-semibold text-ink">First Books</p>
            <p className="mt-1 text-xs leading-5 text-muted">เล่มแรกอาจใช้ 3–4 สัปดาห์เพื่อเซ็ตระบบ</p>
          </div>
        </div>
      </Card>
      <ProductRecords />
    </div>
  );
}
