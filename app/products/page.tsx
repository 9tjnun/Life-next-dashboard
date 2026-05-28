import { PageHeader, Card } from "@/components/ui";
import { ProductRecords } from "@/components/client/product-records";

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Product Planner" title="KDP / Planner / Checklist / Ebook" desc="คุมโปรเจกต์ใหญ่ เช่น Cozy Brain Games, Life Next Planner, Life Next Guides และสินค้า Etsy PDF ในอนาคต" />

      <Card title="รอบการลงสินค้า">
        <div className="grid gap-2 md:grid-cols-4 text-xs font-medium">
          <div className="rounded-xl bg-kdpSoft p-3"><b>KDP:</b><br />1 เล่มทุก 2 สัปดาห์หลังระบบนิ่ง</div>
          <div className="rounded-xl bg-productSoft p-3"><b>Life Next Etsy:</b><br />1 listing/สัปดาห์ ศุกร์ 21:00</div>
          <div className="rounded-xl bg-seasonalSoft p-3"><b>Ebook:</b><br />เดือนละ 1 เล่ม</div>
          <div className="rounded-xl bg-neutralSoft p-3"><b>Work Block:</b><br />09:00–14:30 ไทย</div>
        </div>
      </Card>

      <Card title="โฟกัสแรก">
        <div className="grid gap-2 md:grid-cols-4 text-xs font-medium">
          <div className="rounded-xl bg-kdpSoft p-3">Cozy Brain Games</div>
          <div className="rounded-xl bg-kdpSoft p-3">Flower Garden Edition</div>
          <div className="rounded-xl bg-kdpSoft p-3">48–60 หน้า</div>
          <div className="rounded-xl bg-kdpSoft p-3">8.5 x 11 / large print</div>
        </div>
      </Card>

      <ProductRecords />
    </div>
  );
}
