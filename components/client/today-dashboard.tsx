"use client";

import { useEffect, useState } from "react";
import { Card, MiniCard, Pill } from "@/components/ui";
import { defaultStockTargets, seasonalGuide, weeklyTemplate, platformMeta } from "@/lib/data";
import { FacebookRecord, keys, ProductRecord, YoutubeRecord, loadArray, loadObject, CalendarDoneMap } from "@/lib/storage";

function todayKey() { return new Date().toISOString().slice(0, 10); }
function getThaiDate() { return new Intl.DateTimeFormat("th-TH", { dateStyle: "full" }).format(new Date()); }
function getWeekTemplate(date = new Date()) { return weeklyTemplate.find((d) => d.dayIndex === date.getDay()) || weeklyTemplate[0]; }

export function TodayDashboard() {
  const [facebook, setFacebook] = useState<FacebookRecord[]>([]);
  const [youtube, setYoutube] = useState<YoutubeRecord[]>([]);
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [doneMap, setDoneMap] = useState<CalendarDoneMap>({});

  const template = getWeekTemplate();
  const thisMonth = seasonalGuide.find((m) => m.month === new Date().getMonth() + 1) || seasonalGuide[0];

  useEffect(() => {
    setFacebook(loadArray<FacebookRecord>(keys.facebook));
    setYoutube(loadArray<YoutubeRecord>(keys.youtube));
    setProducts(loadArray<ProductRecord>(keys.products));
    setDoneMap(loadObject<CalendarDoneMap>(keys.calendarDone, {}));
  }, []);

  const todayDoneCount = template.tasks.filter((t) => doneMap[todayKey()]?.[t.id]).length;
  const progress = Math.round((todayDoneCount / template.tasks.length) * 100);
  const fbReady = facebook.filter((r) => r.status === "Ready").length;
  const ytReady = youtube.filter((r) => r.status === "Ready").length;
  const activeProducts = products.filter((p) => ["Idea", "Creating", "QA", "Ready"].includes(p.status)).length;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <Card title="รายงานวันนี้ตามปฏิทิน">
          <div className="grid gap-3 md:grid-cols-[1fr_260px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Today</p>
              <h2 className="mt-1 text-2xl font-semibold text-ink">{getThaiDate()}</h2>
              <p className="mt-1 text-sm font-medium text-muted">{template.day} · {template.focus}</p>
            </div>
            <div className="rounded-xl bg-neutralSoft p-3">
              <p className="text-xs font-semibold text-muted">ธีมเดือนนี้</p>
              <p className="mt-1 text-sm font-semibold text-ink">{thisMonth.theme}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{thisMonth.ideas}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
              <span>Progress จากปฏิทิน</span>
              <span>{todayDoneCount}/{template.tasks.length} done · {progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-neutralSoft">
              <div className="h-2 rounded-full bg-kdp transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {template.tasks.map((t) => {
              const meta = platformMeta[t.platform];
              const done = !!doneMap[todayKey()]?.[t.id];
              return (
                <div key={t.id} className={`rounded-xl border p-3 ${done ? "border-kdp bg-kdpSoft" : "border-line bg-white"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${meta.color}`}>{meta.label}</span>
                    <Pill className={done ? "bg-kdp text-white" : "bg-neutralSoft text-muted"}>{done ? "เสร็จแล้ว" : "รอทำ"}</Pill>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-ink">{t.title}</p>
                  <p className="mt-1 text-xs leading-4 text-muted">{t.detail}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="ตารางชีวิตวันนี้">
          <div className="grid gap-3">
            <div className="rounded-xl border border-line bg-kdpSoft p-3">
              <p className="text-sm font-semibold text-ink">09:00–14:30 · งานผลิต</p>
              <p className="mt-1 text-xs leading-5 text-muted">{template.morning}</p>
            </div>
            <div className="rounded-xl border border-line bg-productSoft p-3">
              <p className="text-sm font-semibold text-ink">21:00–00:00 · ลงงาน + บันทึก</p>
              <p className="mt-1 text-xs leading-5 text-muted">{template.night}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <MiniCard label="Facebook stock" value={fbReady} note={`${fbReady} วัน`} />
              <MiniCard label="YouTube stock" value={ytReady} note={`≈ ${Math.floor(ytReady / defaultStockTargets.youtubeWeeklyNeed)} สัปดาห์`} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <MiniCard label="FB Ready" value={fbReady} note="แคปชั่นพร้อมลง" className="border-l-4 border-l-fb" />
        <MiniCard label="YT Ready" value={ytReady} note="Shorts พร้อมลง" className="border-l-4 border-l-yt" />
        <MiniCard label="Active Product" value={activeProducts} note="โปรเจกต์กำลังทำ" className="border-l-4 border-l-kdp" />
        <MiniCard label="Today Done" value={`${todayDoneCount}/${template.tasks.length}`} note="ติ๊กในหน้าปฏิทิน" className="border-l-4 border-l-etsy" />
      </div>
    </div>
  );
}
