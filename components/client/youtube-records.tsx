"use client";

import { useEffect, useState } from "react";
import { Button, Card, Input, Select, MiniCard, Pill, Textarea } from "@/components/ui";
import { keys, uid, YoutubeRecord, loadArray, saveArray } from "@/lib/storage";

const empty: YoutubeRecord = { id: "", date: new Date().toISOString().slice(0,10), title: "", hook: "", details: "", youtubeLink: "", reelsDone: false, status: "Idea" };

export function YoutubeRecords() {
  const [records, setRecords] = useState<YoutubeRecord[]>([]);
  const [form, setForm] = useState<YoutubeRecord>(empty);
  useEffect(() => setRecords(loadArray<YoutubeRecord>(keys.youtube)), []);
  function persist(next: YoutubeRecord[]) { setRecords(next); saveArray(keys.youtube, next); }
  function add() { if (!form.title.trim()) return; persist([{ ...form, id: uid() }, ...records]); setForm(empty); }
  function remove(id: string) { persist(records.filter(r => r.id !== id)); }
  function patch(id: string, patch: Partial<YoutubeRecord>) { persist(records.map(r => r.id === id ? { ...r, ...patch } : r)); }
  const ready = records.filter(r => r.status === "Ready").length;
  const posted = records.filter(r => r.status === "Posted").length;
  const reelsPending = records.filter(r => r.status === "Posted" && !r.reelsDone).length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <MiniCard label="พร้อมลง" value={ready} note={`≈ ${Math.floor(ready/3)} สัปดาห์`} className="border-l-4 border-l-yt" />
        <MiniCard label="ลงแล้ว" value={posted} className="border-l-4 border-l-kdp" />
        <MiniCard label="รอ Reels" value={reelsPending} className="border-l-4 border-l-seasonal" />
      </div>
      <Card title="เพิ่มคลิป">
        <div className="grid gap-3 lg:grid-cols-[150px_1fr_1fr_160px]">
          <Input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} />
          <Input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} placeholder="ชื่อคลิป" />
          <Input value={form.hook} onChange={(e)=>setForm({...form,hook:e.target.value})} placeholder="Hook" />
          <Select value={form.status} onChange={(e)=>setForm({...form,status:e.target.value as YoutubeRecord["status"]})}><option>Idea</option><option>Ready</option><option>Posted</option></Select>
        </div>
        <div className="mt-3"><Textarea value={form.details} onChange={(e)=>setForm({...form,details:e.target.value})} placeholder="รายละเอียดคลิป / visual sequence / ไฟล์ที่ใช้" /></div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_110px]">
          <Input value={form.youtubeLink} onChange={(e)=>setForm({...form,youtubeLink:e.target.value})} placeholder="ลิงก์ YouTube" />
          <Button onClick={add}>บันทึก</Button>
        </div>
      </Card>
      <Card title="ประวัติ YouTube">
        <div className="overflow-hidden rounded-2xl border border-line">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-neutralSoft text-muted"><tr><th className="p-3">วันที่</th><th className="p-3">ชื่อคลิป</th><th className="p-3">Hook / Details</th><th className="p-3">สถานะ</th><th className="p-3">จัดการ</th></tr></thead>
            <tbody>
              {records.length === 0 && <tr><td colSpan={5} className="p-4 font-medium text-muted">ยังไม่มี record</td></tr>}
              {records.map(r => <tr key={r.id} className="border-t border-line bg-white align-top">
                <td className="p-3 font-medium text-ink">{r.date}</td>
                <td className="p-3 font-medium text-ink">{r.title}<div className="mt-1 text-[10px] text-muted">{r.youtubeLink}</div></td>
                <td className="max-w-xl p-3 leading-5 text-ink">{r.hook}<div className="mt-1 whitespace-pre-wrap text-[11px] text-muted">{r.details}</div></td>
                <td className="p-3"><div className="flex flex-col gap-1"><Pill className={r.status==="Ready"?"bg-ytSoft text-yt":r.status==="Posted"?"bg-kdpSoft text-kdp":"bg-neutralSoft text-muted"}>{r.status}</Pill><Pill className={r.reelsDone?"bg-kdpSoft text-kdp":"bg-seasonalSoft text-seasonal"}>{r.reelsDone?"Reels แล้ว":"ยังไม่ Reels"}</Pill></div></td>
                <td className="p-3"><div className="flex flex-wrap gap-1"><Button variant="light" onClick={()=>patch(r.id,{status:"Ready"})}>Ready</Button><Button variant="light" onClick={()=>patch(r.id,{status:"Posted"})}>Posted</Button><Button variant="light" onClick={()=>patch(r.id,{reelsDone:!r.reelsDone})}>Reels</Button><Button variant="danger" onClick={()=>remove(r.id)}>ลบ</Button></div></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
