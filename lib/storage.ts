export type FacebookRecord = {
  id: string;
  date: string;
  caption: string;
  theme: string;
  imageNote: string;
  link: string;
  status: "Ready" | "Posted" | "Reuse Later";
};

export type YoutubeRecord = {
  id: string;
  date: string;
  title: string;
  hook: string;
  details: string;
  youtubeLink: string;
  reelsDone: boolean;
  status: "Idea" | "Ready" | "Posted";
};

export type ProductRecord = {
  id: string;
  date: string;
  project: string;
  productName: string;
  platform: string;
  theme: string;
  status: "Idea" | "Creating" | "QA" | "Ready" | "Published" | "Promoted";
  notes: string;
  link: string;
};

export type CalendarDoneMap = Record<string, Record<string, boolean>>;

export const keys = {
  facebook: "life-next-facebook-records-v10",
  youtube: "life-next-youtube-records-v10",
  products: "life-next-product-records-v10",
  calendarDone: "life-next-calendar-done-v10"
};

export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function loadArray<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
}

export function saveArray<T>(key: string, value: T[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadObject<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; }
}

export function saveObject<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
