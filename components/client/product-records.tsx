"use client";

import { useEffect, useState } from "react";
import { Button, Card, Input, Select, MiniCard, Pill, Textarea } from "@/components/ui";
import { keys, ProductRecord, uid, loadArray, saveArray } from "@/lib/storage";

const empty: ProductRecord = { id: "", date: new Date().toISOString().slice(0,10), project: "Cozy Brain Games", productName: "", platform: "KDP", theme: "", status: "Idea", notes: "", link: "" };

export function ProductRecords() {
  const [records, setRecords] = useState<ProductRecord[]>([]);
  const [form, setForm] = useState<ProductRecord>(empty);
  useEffect(()=>setRecords(loadArray<ProductRecord>(keys.products)), []);
  function persist(next: ProductRecord[]) { setRecords(next); saveArray(keys.products, next); }
  function add(){ if(!form.productName.trim()) return; persist([{...form,id:uid()},...records]); setForm(empty); }
  function remove(id:string){ persist(records.filter(r=>r.id!==id)); }
  function patch(id:string, patch:Partial<ProductRecord>){ persist(records.map(r=>r.id===id?{...r,...patch}:r)); }
  const active = records.filter(r=>["Idea","Creating","QA","Ready"].includes(r.status)).length;
  const published = records.filter(r=>r.status==="Published").length;
  const ready = records.filter(r=>r.status==="Ready").length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <MiniCard label="Active" value={active} className="border-l-4 border-l-product" />
        <MiniCard label="Ready" value={ready} className="border-l-4 border-l-seasonal" />
        <MiniCard label="Published" value={published} className="border-l-4 border-l-kdp" />
      </div>
      <Card title="เพิ่มโปรเจกต์">
        <div className="grid gap-3 lg:grid-cols-4">
          <Input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} />
          <Select value={form.project} onChange={(e)=>setForm({...form,project:e.target.value})}><option>Cozy Brain Games</option><option>Life Next Planner</option><option>Life Next Guides</option><option>ByeTension</option></Select>
          <Select value={form.platform} onChange={(e)=>setForm({...form,platform:e.target.value})}><option>KDP</option><option>Etsy PDF</option><option>Etsy ByeTension</option><option>Both KDP + Etsy</option></Select>
          <Select value={form.status} onChange={(e)=>setForm({...form,status:e.target.value as ProductRecord["status"]})}><option>Idea</option><option>Creating</option><option>QA</option><option>Ready</option><option>Published</option><option>Promoted</option></Select>
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-3">
          <Input value={form.productName} onChange={(e)=>setForm({...form,productName:e.target.value})} placeholder="ชื่อสินค้า / โปรเจกต์" />
          <Input value={form.theme} onChange={(e)=>setForm({...form,theme:e.target.value})} placeholder="Theme" />
          <Input value={form.link} onChange={(e)=>setForm({...form,link:e.target.value})} placeholder="Link" />
        </div>
        <div className="mt-3"><Textarea value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} placeholder="Notes / จำนวนหน้า / สิ่งที่ต้องทำต่อ" /></div>
        <div className="mt-3"><Button onClick={add}>บันทึก</Button></div>
      </Card>
      <Card title="Product Pipeline">
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-neutralSoft text-muted"><tr><th className="p-3">โปรเจกต์</th><th className="p-3">สินค้า</th><th className="p-3">Theme/Notes</th><th className="p-3">สถานะ</th><th className="p-3">จัดการ</th></tr></thead>
            <tbody>
              {records.length === 0 && <tr><td colSpan={5} className="p-4 font-medium text-muted">ยังไม่มี project record</td></tr>}
              {records.map(r=><tr key={r.id} className="border-t border-line bg-white align-top">
                <td className="p-3 font-medium text-ink">{r.project}<div className="text-[10px] text-muted">{r.platform}</div></td>
                <td className="p-3 font-medium text-ink">{r.productName}<div className="text-[10px] text-muted">{r.link}</div></td>
                <td className="max-w-xl p-3 leading-5 text-ink">{r.theme}<div className="mt-1 whitespace-pre-wrap text-[11px] text-muted">{r.notes}</div></td>
                <td className="p-3"><Pill className={r.status==="Published"?"bg-kdpSoft text-kdp":r.status==="Ready"?"bg-seasonalSoft text-seasonal":r.status==="Creating"?"bg-productSoft text-product":"bg-neutralSoft text-muted"}>{r.status}</Pill></td>
                <td className="p-3"><div className="flex flex-wrap gap-1">{(["Idea","Creating","QA","Ready","Published"] as ProductRecord["status"][]).map(s=><Button key={s} variant="light" onClick={()=>patch(r.id,{status:s})}>{s}</Button>)}<Button variant="danger" onClick={()=>remove(r.id)}>ลบ</Button></div></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
