"use client";

import { useEffect, useState } from "react";
import { Button, Card, Input, Select, MiniCard, Pill, Textarea } from "@/components/ui";
import { FacebookRecord, keys, uid, loadArray, saveArray } from "@/lib/storage";

const empty: FacebookRecord = { id: "", date: new Date().toISOString().slice(0,10), caption: "", theme: "", imageNote: "", link: "", status: "Ready" };

export function FacebookRecords() {
  const [records, setRecords] = useState<FacebookRecord[]>([]);
  const [form, setForm] = useState<FacebookRecord>(empty);
  useEffect(() => setRecords(loadArray<FacebookRecord>(keys.facebook)), []);
  function persist(next: FacebookRecord[]) { setRecords(next); saveArray(keys.facebook, next); }
  function add() { if (!form.caption.trim()) return; persist([{ ...form, id: uid() }, ...records]); setForm(empty); }
  function remove(id: string) { persist(records.filter(r => r.id !== id)); }
  function patch(id: string, patch: Partial<FacebookRecord>) { persist(records.map(r => r.id === id ? { ...r, ...patch } : r)); }

  const ready = records.filter(r => r.status === "Ready").length;
  const posted = records.filter(r => r.status === "Posted").length;
  const reuse = records.filter(r => r.status === "Reuse Later").length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <MiniCard label="พร้อมลง" value={ready} note={`${ready} วัน`} className="border-l-4 border-l-fb" />
        <MiniCard label="ลงแล้ว" value={posted} className="border-l-4 border-l-kdp" />
        <MiniCard label="เก็บใช้ซ้ำ" value={reuse} className="border-l-4 border-l-seasonal" />
      </div>
      <Card title="เพิ่มแคปชั่น">
        <div className="grid gap-3 lg:grid-cols-[150px_1fr_170px]">
          <Input type="date" value={form.date} onChange={(e) => setForm({...form, date:e.target.value})} />
          <Input value={form.theme} onChange={(e) => setForm({...form, theme:e.target.value})} placeholder="ธีม เช่น คนแก่พักใจ / cozy home" />
          <Select value={form.status} onChange={(e) => setForm({...form, status:e.target.value as FacebookRecord["status"]})}><option>Ready</option><option>Posted</option><option>Reuse Later</option></Select>
        </div>
        <div className="mt-3"><Textarea value={form.caption} onChange={(e) => setForm({...form, caption:e.target.value})} placeholder="วางแคปชั่นตรงนี้" /></div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1fr_110px]">
          <Input value={form.imageNote} onChange={(e) => setForm({...form, imageNote:e.target.value})} placeholder="รูปที่ใช้ / note" />
          <Input value={form.link} onChange={(e) => setForm({...form, link:e.target.value})} placeholder="ลิงก์โพสต์" />
          <Button onClick={add}>บันทึก</Button>
        </div>
      </Card>
      <Card title="ประวัติแคปชั่น">
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-neutralSoft text-muted"><tr><th className="p-3">วันที่</th><th className="p-3">ธีม</th><th className="p-3">แคปชั่น</th><th className="p-3">สถานะ</th><th className="p-3">จัดการ</th></tr></thead>
            <tbody>
              {records.length === 0 && <tr><td colSpan={5} className="p-4 font-medium text-muted">ยังไม่มี record</td></tr>}
              {records.map(r => <tr key={r.id} className="border-t border-line bg-white align-top">
                <td className="p-3 font-medium text-ink">{r.date}</td>
                <td className="p-3 font-medium text-ink">{r.theme || "-"}</td>
                <td className="max-w-xl p-3 leading-5 text-ink">{r.caption}<div className="mt-1 text-[10px] text-muted">{r.imageNote} {r.link}</div></td>
                <td className="p-3"><Pill className={r.status === "Ready" ? "bg-fbSoft text-fb" : r.status === "Posted" ? "bg-kdpSoft text-kdp" : "bg-seasonalSoft text-seasonal"}>{r.status}</Pill></td>
                <td className="p-3"><div className="flex flex-wrap gap-1"><Button variant="light" onClick={() => patch(r.id,{status:"Ready"})}>Ready</Button><Button variant="light" onClick={() => patch(r.id,{status:"Posted"})}>Posted</Button><Button variant="danger" onClick={() => remove(r.id)}>ลบ</Button></div></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
