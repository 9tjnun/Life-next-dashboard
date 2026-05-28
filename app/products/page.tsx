import { PageHeader, Card } from "@/components/ui";
import { ProductRecords } from "@/components/client/product-records";
export default function ProductsPage() {
  return <div className="space-y-4"><PageHeader eyebrow="Product Planner" title="KDP / Planner / Checklist / Ebook" desc="คุมโปรเจกต์ใหญ่ เช่น Cozy Brain Games, Life Next Planner, Life Next Guides และสินค้า Etsy PDF ในอนาคต" /><Card title="โฟกัสแรก"><div className="grid gap-2 md:grid-cols-4 text-xs font-medium"><div className="rounded-xl bg-kdpSoft p-3">Cozy Brain Games</div><div className="rounded-xl bg-kdpSoft p-3">Flower Garden Edition</div><div className="rounded-xl bg-kdpSoft p-3">48–60 หน้า</div><div className="rounded-xl bg-kdpSoft p-3">8.5 x 11 / large print</div></div></Card><ProductRecords /></div>
}
