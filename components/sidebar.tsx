import Link from "next/link";
import { Home, Facebook, Youtube, ShoppingBag, BookOpen, Pin, CalendarDays, Settings, Boxes, Compass, ClipboardList } from "lucide-react";
import { channelLinks } from "@/lib/data";

const items = [
  { href: "/", label: "วันนี้", icon: Home, cls: "bg-white text-muted hover:bg-neutralSoft" },
  { href: "/calendar", label: "ปฏิทิน", icon: CalendarDays, cls: "bg-white text-muted hover:bg-neutralSoft" },
  { href: "/facebook", label: "Facebook", icon: Facebook, cls: "bg-fb text-white hover:bg-fb/90" },
  { href: "/youtube", label: "YouTube", icon: Youtube, cls: "bg-yt text-white hover:bg-yt/90" },
  { href: "/etsy", label: "Etsy", icon: ShoppingBag, cls: "bg-etsy text-white hover:bg-etsy/90" },
  { href: "/pinterest", label: "Pinterest", icon: Pin, cls: "bg-pin text-white hover:bg-pin/90" },
  { href: "/kdp", label: "KDP", icon: BookOpen, cls: "bg-kdp text-white hover:bg-kdp/90" },
  { href: "/products", label: "Product", icon: Boxes, cls: "bg-white text-muted hover:bg-neutralSoft" },
  { href: "/seasonal", label: "Seasonal", icon: Compass, cls: "bg-white text-muted hover:bg-neutralSoft" },
  { href: "/guide", label: "Guide", icon: ClipboardList, cls: "bg-white text-muted hover:bg-neutralSoft" },
  { href: "/settings", label: "Settings", icon: Settings, cls: "bg-white text-muted hover:bg-neutralSoft" }
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-60 overflow-y-auto border-r border-line bg-panel p-4">
      <div className="mb-4 rounded-2xl bg-ink p-4 text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Life Next</p>
        <h1 className="mt-1 text-lg font-semibold">Planner v10.5</h1>
        <p className="mt-1 text-xs font-medium leading-5 text-slate-300">Compact calendar tags</p>
      </div>
      <nav className="space-y-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${item.cls}`}>
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-4 rounded-2xl border border-line bg-neutralSoft p-3 text-xs font-medium leading-6 text-muted">
        <p className="mb-1 font-semibold text-ink">ลิงก์ช่องทาง</p>
        <a className="block hover:text-etsy" href={channelLinks.etsy} target="_blank">Etsy ByeTension</a>
        <a className="block hover:text-pin" href={channelLinks.pinterest} target="_blank">Pinterest</a>
        <a className="block hover:text-yt" href={channelLinks.youtube} target="_blank">YouTube</a>
        <a className="block hover:text-fb" href={channelLinks.facebook} target="_blank">Facebook</a>
      </div>
    </aside>
  );
}
