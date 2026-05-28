import { PageHeader } from "@/components/ui";
import { ProductRecords } from "@/components/client/product-records";
export default function KdpPage() {
  return <div className="space-y-4"><PageHeader eyebrow="KDP" title="KDP = สำนักพิมพ์" desc="สมุดเกม planner journal coloring book และ mini guide ระยะยาว ใช้ Product Planner เป็นตัวคุมสถานะ" /><ProductRecords /></div>
}
