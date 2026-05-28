export const channelLinks = {
  pinterest: "https://www.pinterest.com/byetension/",
  etsy: "https://www.etsy.com/shop/ByeTension",
  youtube: "https://www.youtube.com/@LifeNextChapterCozy",
  facebook: "https://www.facebook.com/LifeNextChapter/"
};

export type PlatformKey =
  | "facebook"
  | "youtube"
  | "reels"
  | "etsy"
  | "pinterest"
  | "kdp"
  | "lifeetsy"
  | "ebook"
  | "product"
  | "neutral";

export const platformMeta: Record<PlatformKey, { label: string; short: string; color: string; soft: string; dot: string; full: string }> = {
  facebook: { label: "Facebook", short: "FB", color: "text-fb", soft: "bg-fbSoft", dot: "bg-fb", full: "bg-fb text-white" },
  youtube: { label: "YouTube", short: "YT", color: "text-yt", soft: "bg-ytSoft", dot: "bg-yt", full: "bg-yt text-white" },
  reels: { label: "Reels", short: "Reels", color: "text-yt", soft: "bg-ytSoft", dot: "bg-yt", full: "bg-yt text-white" },
  etsy: { label: "ByeTension Etsy", short: "Etsy", color: "text-etsy", soft: "bg-etsySoft", dot: "bg-etsy", full: "bg-etsy text-white" },
  pinterest: { label: "Pinterest", short: "Pin", color: "text-pin", soft: "bg-pinSoft", dot: "bg-pin", full: "bg-pin text-white" },
  kdp: { label: "KDP", short: "KDP", color: "text-kdp", soft: "bg-kdpSoft", dot: "bg-kdp", full: "bg-kdp text-white" },
  lifeetsy: { label: "Life Next Etsy", short: "LN Etsy", color: "text-product", soft: "bg-productSoft", dot: "bg-product", full: "bg-product text-white" },
  ebook: { label: "Ebook", short: "Ebook", color: "text-seasonal", soft: "bg-seasonalSoft", dot: "bg-seasonal", full: "bg-seasonal text-white" },
  product: { label: "Product Work", short: "Prod", color: "text-product", soft: "bg-productSoft", dot: "bg-product", full: "bg-product text-white" },
  neutral: { label: "General", short: "Gen", color: "text-muted", soft: "bg-neutralSoft", dot: "bg-slate-400", full: "bg-slate-500 text-white" }
};

export type TaskTemplate = {
  id: string;
  platform: PlatformKey;
  title: string;
  detail: string;
  thaiTime: string;
  note?: string;
};

export type DayPlan = {
  dayIndex: number;
  day: string;
  focus: string;
  morning: string;
  night: string;
  tasks: TaskTemplate[];
};

const dailyCore: TaskTemplate[] = [
  {
    id: "byetension-etsy-daily",
    platform: "etsy",
    title: "ByeTension: ลง 5 listings",
    detail: "ลงวอลอาร์ทใน Etsy ร้าน ByeTension วันละ 5 listings",
    thaiTime: "21:30 ไทย"
  },
  {
    id: "pinterest-daily",
    platform: "pinterest",
    title: "Pinterest: ลง 3–5 pins",
    detail: "ลง pins เพื่อดันทราฟฟิกไป Etsy / KDP / Product",
    thaiTime: "21:00–00:00 ไทย"
  },
  {
    id: "facebook-daily",
    platform: "facebook",
    title: "Facebook: โพสต์พักใจ 1 โพสต์",
    detail: "แคปชั่นคนแก่พักใจ / slow life / cozy home",
    thaiTime: "23:00 ไทย",
    note: "ตั้ง schedule ล่วงหน้าได้"
  }
];

const youtubeReels: TaskTemplate[] = [
  {
    id: "youtube-short",
    platform: "youtube",
    title: "YouTube Shorts",
    detail: "ลง Shorts 1 คลิป",
    thaiTime: "04:00–06:00 ไทย วันถัดไป",
    note: "ควรตั้ง schedule ล่วงหน้า ไม่ต้องตื่นมาลง"
  },
  {
    id: "facebook-reels",
    platform: "reels",
    title: "Facebook Reels",
    detail: "ใช้คลิปเดียวกับ YouTube Shorts แล้วลง Reels",
    thaiTime: "05:00–07:00 ไทย วันถัดไป",
    note: "ลงพร้อมรอบ Shorts ได้ หรือห่าง 30–60 นาที"
  }
];

const lifeNextEtsyListing: TaskTemplate = {
  id: "life-next-etsy-listing",
  platform: "lifeetsy",
  title: "Life Next Etsy Printable",
  detail: "ลงสินค้า printable / checklist / planner / activity PDF",
  thaiTime: "ศุกร์ 21:00 ไทย",
  note: "เริ่มต้น 1 listing/สัปดาห์; ถ้าพร้อมค่อยเพิ่มเป็น 2 listings/สัปดาห์"
};

const kdpMidCycle: TaskTemplate = {
  id: "kdp-mid-cycle",
  platform: "kdp",
  title: "KDP Mid-Cycle / Production Check",
  detail: "เช็กความคืบหน้า Planner / Brain Game / Activity Book รอบกลางเดือน",
  thaiTime: "09:00–14:30 ไทย",
  note: "KDP ขึ้น 2 ช่อง/เดือน: วันที่ 14 และ 28"
};

const kdpPublishCycle: TaskTemplate = {
  id: "kdp-publish-cycle",
  platform: "kdp",
  title: "KDP Publish / Final QA",
  detail: "ตรวจไฟล์ final, export PDF, upload / publish prep",
  thaiTime: "09:00–14:30 ไทย",
  note: "รอบ publish ทุก 2 สัปดาห์หลังระบบนิ่ง"
};

const ebookMonthly: TaskTemplate = {
  id: "ebook-monthly-milestone",
  platform: "ebook",
  title: "Ebook / Mini Guide Monthly Milestone",
  detail: "งาน Ebook เดือนละ 1 เล่ม: outline / draft / layout / proof",
  thaiTime: "09:00–14:30 ไทย",
  note: "Ebook ขึ้น 1 ช่อง/เดือนเท่านั้น"
};

const weeklyReview: TaskTemplate = {
  id: "weekly-review",
  platform: "neutral",
  title: "Weekly Review",
  detail: "เช็กงานค้าง เติม stock วางแผนสัปดาห์หน้า",
  thaiTime: "อาทิตย์ 21:00–22:00 ไทย"
};

function thaiDayName(dayIndex: number) {
  return ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"][dayIndex];
}

function baseFocus(dayIndex: number) {
  if ([3, 5, 0].includes(dayIndex)) return "Daily Core + Shorts/Reels";
  if (dayIndex === 5) return "Daily Core + Life Next Etsy";
  if (dayIndex === 0) return "Daily Core + Weekly Review";
  return "Daily Core";
}

export function getDayPlan(date: Date = new Date()): DayPlan {
  const dayIndex = date.getDay();
  const dayOfMonth = date.getDate();

  const tasks: TaskTemplate[] = [...dailyCore];

  // YouTube Shorts + Reels: Wednesday / Friday / Sunday
  if ([3, 5, 0].includes(dayIndex)) {
    tasks.push(...youtubeReels);
  }

  // Life Next Etsy Printable: Friday only, 1 listing/week initially
  if (dayIndex === 5) {
    tasks.push(lifeNextEtsyListing);
  }

  // KDP: exactly 2 slots/month
  if (dayOfMonth === 14) {
    tasks.push(kdpMidCycle);
  }
  if (dayOfMonth === 28) {
    tasks.push(kdpPublishCycle);
  }

  // Ebook: exactly 1 slot/month
  if (dayOfMonth === 21) {
    tasks.push(ebookMonthly);
  }

  // Weekly review: Sunday
  if (dayIndex === 0) {
    tasks.push(weeklyReview);
  }

  const specialFocus = [
    dayOfMonth === 14 ? "KDP Mid-Cycle" : "",
    dayOfMonth === 21 ? "Ebook Monthly Milestone" : "",
    dayOfMonth === 28 ? "KDP Publish / Final QA" : ""
  ].filter(Boolean).join(" + ");

  return {
    dayIndex,
    day: thaiDayName(dayIndex),
    focus: specialFocus || baseFocus(dayIndex),
    morning:
      dayOfMonth === 14 || dayOfMonth === 28
        ? "KDP / Planner / Brain Game check"
        : dayOfMonth === 21
          ? "Ebook / Mini Guide milestone"
          : "ผลิตคอนเทนต์ / เตรียมรูป / เตรียม listing",
    night: "ลง ByeTension + Pinterest + Facebook ตามเวลาไทย",
    tasks
  };
}

export const weeklyTemplate: DayPlan[] = [0, 1, 2, 3, 4, 5, 6].map((dayIndex) => ({
  dayIndex,
  day: thaiDayName(dayIndex),
  focus: baseFocus(dayIndex),
  morning: "ผลิตคอนเทนต์ / เตรียมรูป / เตรียม listing",
  night: "ลง ByeTension + Pinterest + Facebook ตามเวลาไทย",
  tasks: getDayPlan(new Date(2026, 5, dayIndex === 0 ? 7 : dayIndex)).tasks
}));

export const cycleRules = [
  {
    name: "ByeTension Wall Art",
    frequency: "ทุกวัน",
    thaiTime: "21:30 ไทย",
    detail: "ลง Etsy ร้าน ByeTension วันละ 5 listings"
  },
  {
    name: "Pinterest",
    frequency: "ทุกวัน",
    thaiTime: "21:00–00:00 ไทย",
    detail: "ลง 3–5 pins/day"
  },
  {
    name: "Facebook Post",
    frequency: "ทุกวัน",
    thaiTime: "23:00 ไทย",
    detail: "1 cozy post/day"
  },
  {
    name: "YouTube Shorts + Reels",
    frequency: "3 วัน/สัปดาห์",
    thaiTime: "YT 04:00–06:00 / Reels 05:00–07:00 ไทย วันถัดไป",
    detail: "พุธ / ศุกร์ / อาทิตย์, ตั้ง schedule ล่วงหน้า"
  },
  {
    name: "Life Next Etsy Printable Shop",
    frequency: "1 listing/สัปดาห์ เริ่มต้น",
    thaiTime: "ศุกร์ 21:00 ไทย",
    detail: "พอสินค้าเยอะค่อยเพิ่มเป็น อังคาร + ศุกร์"
  },
  {
    name: "KDP Planner / Brain Game / Activity Book",
    frequency: "2 ช่อง/เดือน",
    thaiTime: "วันที่ 14 และ 28 · 09:00–14:30 ไทย",
    detail: "รอบกลางเดือน = production check, วันที่ 28 = final QA / publish prep"
  },
  {
    name: "Ebook / Mini Guide",
    frequency: "1 ช่อง/เดือน",
    thaiTime: "วันที่ 21 · 09:00–14:30 ไทย",
    detail: "เดือนละ 1 เล่ม ไม่ใช่งานรายวัน"
  }
];

export const seasonalGuide = [
  { month: 1, monthName: "มกราคม", theme: "New Year Reset", ideas: "planner, habit tracker, fresh start, reset checklist" },
  { month: 2, monthName: "กุมภาพันธ์", theme: "Love & Home", ideas: "self-love, cozy home, couple gift, soft floral" },
  { month: 3, monthName: "มีนาคม", theme: "Spring Garden", ideas: "flowers, garden, renewal, spring activity pages" },
  { month: 4, monthName: "เมษายน", theme: "Easter / Cottage Bloom", ideas: "cottage bloom, floral, Easter calm, soft colors" },
  { month: 5, monthName: "พฤษภาคม", theme: "Mother’s Day / Garden Life", ideas: "gift, flowers, gratitude, mother’s day printable" },
  { month: 6, monthName: "มิถุนายน", theme: "Summer Slow Living", ideas: "garden, lake, quiet morning, summer wall art, flower activity book" },
  { month: 7, monthName: "กรกฎาคม", theme: "Travel Memories", ideas: "travel window view, seaside, vacation memory, slow travel" },
  { month: 8, monthName: "สิงหาคม", theme: "Cozy Home Reset", ideas: "home planner, cottage room, declutter checklist, cozy corner" },
  { month: 9, monthName: "กันยายน", theme: "Autumn Prep", ideas: "fall decor, gratitude sheet, autumn wall art, warm routine" },
  { month: 10, monthName: "ตุลาคม", theme: "Cozy Fall", ideas: "tea, pumpkins, leaves, indoor hobbies, fall coloring book" },
  { month: 11, monthName: "พฤศจิกายน", theme: "Gratitude", ideas: "Thanksgiving, gratitude journal, family calm, thankful prompts" },
  { month: 12, monthName: "ธันวาคม", theme: "Christmas Calm", ideas: "soft holiday, winter calm, Christmas activity book, cozy gifts" }
];

export const projectMap = [
  { project: "ByeTension", channels: "Etsy + Pinterest", role: "ร้านวอลอาร์ท / printable wall art", whatToDo: "ลง wall art วันละ 5 listings เวลา 21:30 และใช้ Pinterest ดันทราฟฟิก", platform: "etsy" as PlatformKey },
  { project: "Life Next Chapter", channels: "Facebook + YouTube Shorts", role: "แบรนด์แม่ / ห้องนั่งเล่นของแบรนด์", whatToDo: "ลงคอนเทนต์พักใจ slow life คนแก่พักใจ และวิดีโอ mood สั้น ๆ", platform: "facebook" as PlatformKey },
  { project: "Cozy Brain Games", channels: "KDP + Etsy ร้านใหม่ในอนาคต", role: "สมุดเกมฝึกสมอง / activity book", whatToDo: "ทำหนังสือธีมเดียวต่อเล่ม เช่น Flower Garden, Tea Time, Travel Memories", platform: "kdp" as PlatformKey },
  { project: "Life Next Planner", channels: "KDP + Etsy ร้านใหม่ในอนาคต", role: "planner / journal / checklist", whatToDo: "ทำ planner, checklist, journal และ printable bundle สำหรับชีวิตช้าลง/เกษียณ", platform: "product" as PlatformKey },
  { project: "Life Next Guides", channels: "KDP + Etsy PDF", role: "ebook / mini guide / workbook", whatToDo: "ทำคู่มือสั้น ๆ เช่น retirement lifestyle, cozy living, hobby after retirement", platform: "ebook" as PlatformKey }
];

export const defaultStockTargets = { facebookDailyNeed: 1, youtubeWeeklyNeed: 3, etsyDailyNeed: 5, pinterestDailyNeed: 5 };
