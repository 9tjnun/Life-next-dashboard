import Link from "next/link";
import { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

export function Card({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-line bg-panel p-4 shadow-card ${className}`}>
      <h2 className="mb-3 text-base font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function MiniCard({ label, value, note, className = "" }: { label: string; value: string | number; note?: string; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-panel p-4 shadow-card ${className}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-ink">{value}</p>
      {note && <p className="mt-1 text-xs font-medium text-muted">{note}</p>}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${className || "bg-neutralSoft text-muted"}`}>{children}</span>;
}

export function SoftBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${className || "bg-neutralSoft text-muted"}`}>{children}</span>;
}

export function PageHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <header className="rounded-3xl border border-line bg-panel p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h1>
      <p className="mt-2 max-w-5xl text-sm font-medium leading-6 text-muted">{desc}</p>
    </header>
  );
}

export function Button({ children, onClick, type = "button", disabled = false, variant = "dark" }: { children: ReactNode; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean; variant?: "dark" | "light" | "danger" }) {
  const cls = variant === "danger"
    ? "bg-red-500 text-white hover:bg-red-600"
    : variant === "light"
      ? "border border-line bg-white text-ink hover:bg-neutralSoft"
      : "bg-ink text-white hover:bg-slate-700";
  return <button type={type} onClick={onClick} disabled={disabled} className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition disabled:opacity-50 ${cls}`}>{children}</button>;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm font-medium text-ink outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="min-h-20 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm font-medium text-ink outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm font-medium text-ink outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />;
}

export function ExternalCard({ href, title, desc, className = "" }: { href: string; title: string; desc: string; className?: string }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className={`block rounded-2xl border border-line bg-panel p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-float ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          <p className="mt-1 text-xs font-medium leading-5 text-muted">{desc}</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted" />
      </div>
    </Link>
  );
}
