"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, Pill, Button } from "@/components/ui";
import { seasonalGuide, weeklyTemplate, platformMeta, PlatformKey } from "@/lib/data";
import { CalendarDoneMap, keys, loadObject, saveObject } from "@/lib/storage";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

function thaiMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("th-TH", { month: "long", year: "numeric" }).format(date);
}
function isoLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function weekTemplateFor(date: Date) {
  return weeklyTemplate.find((x) => x.dayIndex === date.getDay()) || weeklyTemplate[0];
}

function tagClass(platform: PlatformKey) {
  switch (platform) {
    case "facebook": return "bg-fbSoft text-fb border-fb/20";
    case "youtube": return "bg-ytSoft text-yt border-yt/20";
    case "etsy": return "bg-etsySoft text-etsy border-etsy/20";
    case "pinterest": return "bg-pinSoft text-pin border-pin/20";
    case "kdp": return "bg-kdpSoft text-kdp border-kdp/20";
    case "product": return "bg-productSoft text-product border-product/20";
    default: return "bg-neutralSoft text-muted border-line";
  }
}

export function MonthCalendar() {
  const [viewDate, setViewDate] = useState(new Date());
  const [selected, setSelected] = useState(new Date());
  const [doneMap, setDoneMap] = useState<CalendarDoneMap>({});
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  useEffect(() => {
    setDoneMap(loadObject<CalendarDoneMap>(keys.calendarDone, {}));
  }, []);

  const days = useMemo(() => {
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const count = new Date(year, month + 1, 0).getDate();
    const arr: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) arr.push(null);
    for (let d = 1; d <= count; d++) arr.push(new Date(year, month, d));
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [year, month]);

  const currentSeason = seasonalGuide.find((m) => m.month === month + 1) || seasonalGuide[0];
  const selectedTemplate = weekTemplateFor(selected);
  const selectedKey = isoLocal(selected);

  function moveMonth(delta: number) {
    setViewDate(new Date(year, month + delta, 1));
  }

  function toggleTask(dateKey: string, taskId: string) {
    const next = { ...doneMap, [dateKey]: { ...(doneMap[dateKey] || {}), [taskId]: !(doneMap[dateKey]?.[taskId]) } };
    setDoneMap(next);
    saveObject(keys.calendarDone, next);
  }

  function completedCount(date: Date) {
    const key = isoLocal(date);
    const t = weekTemplateFor(date);
    return t.tasks.filter((task) => doneMap[key]?.[task.id]).length;
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
      <Card title="ปฏิทินรายเดือน">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Button variant="light" onClick={() => moveMonth(-1)}><ChevronLeft className="h-4 w-4" /></Button>
          <div className="text-center">
            <p className="text-2xl font-semibold text-ink">{thaiMonthLabel(viewDate)}</p>
            <p className="text-xs font-medium text-muted">{currentSeason.theme}</p>
          </div>
          <Button variant="light" onClick={() => moveMonth(1)}><ChevronRight className="h-4 w-4" /></Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((d) => (
            <div key={d} className="rounded-xl bg-neutralSoft p-2 text-center text-xs font-semibold text-muted">{d}</div>
          ))}
          {days.map((day, i) => {
            if (!day) return <div key={i} className="min-h-30 rounded-2xl border border-dashed border-line bg-white/40" />;
            const t = weekTemplateFor(day);
            const dateKey = isoLocal(day);
            const isSelected = dateKey === isoLocal(selected);
            const isToday = dateKey === isoLocal(new Date());
            const doneCount = completedCount(day);
            const allDone = doneCount === t.tasks.length;
            return (
              <button
                key={dateKey}
                onClick={() => setSelected(day)}
                className={`min-h-30 rounded-2xl border p-2 text-left transition hover:-translate-y-0.5 hover:shadow-card ${allDone ? "border-kdp bg-kdpSoft" : isSelected ? "border-blue-300 bg-blue-50" : "border-line bg-white"} ${isToday ? "ring-2 ring-blue-200" : ""}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink">{day.getDate()}</span>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${allDone ? "border-kdp bg-kdp" : "border-line bg-white"}`}>{allDone && <CheckCircle2 className="h-4 w-4 text-white" />}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {t.tasks.map((task) => {
                    const done = !!doneMap[dateKey]?.[task.id];
                    const meta = platformMeta[task.platform];
                    return (
                      <span
                        key={task.id}
                        className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${done ? "border-line bg-neutralSoft text-muted line-through opacity-60" : tagClass(task.platform)}`}
                        title={task.title}
                      >
                        {meta.short}
                      </span>
                    );
                  })}
                </div>

                <p className="mt-2 text-[11px] font-medium text-muted">{doneCount}/{t.tasks.length} tasks</p>
              </button>
            );
          })}
        </div>
      </Card>

      <Card title="รายละเอียดวันที่เลือก">
        <p className="text-xs font-medium text-muted">วันที่เลือก</p>
        <h2 className="mt-1 text-2xl font-semibold text-ink">{new Intl.DateTimeFormat("th-TH", { dateStyle: "full" }).format(selected)}</h2>
        <div className="mt-3 rounded-2xl bg-neutralSoft p-3">
          <p className="text-sm font-semibold text-ink">{selectedTemplate.day} · {selectedTemplate.focus}</p>
          <p className="mt-1 text-xs leading-5 text-muted"><b>เช้า:</b> {selectedTemplate.morning}</p>
          <p className="mt-1 text-xs leading-5 text-muted"><b>กลางคืน:</b> {selectedTemplate.night}</p>
        </div>

        <div className="mt-4 space-y-2">
          {selectedTemplate.tasks.map((task) => {
            const meta = platformMeta[task.platform];
            const done = !!doneMap[selectedKey]?.[task.id];
            return (
              <button key={task.id} onClick={() => toggleTask(selectedKey, task.id)} className={`w-full rounded-2xl border p-3 text-left transition ${done ? "border-kdp bg-kdpSoft" : "border-line bg-white hover:bg-neutralSoft"}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`rounded-md px-2 py-1 text-xs font-semibold ${done ? "bg-neutralSoft text-muted line-through" : tagClass(task.platform)}`}>{meta.short}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">{task.title}</p>
                      <p className="text-xs leading-5 text-muted">{task.detail}</p>
                    </div>
                  </div>
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${done ? "border-kdp bg-kdp" : "border-line bg-white"}`}>
                    {done && <CheckCircle2 className="h-5 w-5 text-white" />}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl bg-seasonalSoft p-3">
          <p className="text-sm font-semibold text-ink">Seasonal Guide</p>
          <p className="mt-1 text-xs leading-5 text-muted">{currentSeason.ideas}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {["facebook","youtube","etsy","pinterest","kdp"].map((key) => {
            const m = platformMeta[key as keyof typeof platformMeta];
            return (
              <Pill key={m.label} className={`${m.soft} ${m.color}`}>
                <span className={`mr-1.5 h-2 w-2 rounded-full ${m.dot}`} />{m.short}
              </Pill>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
