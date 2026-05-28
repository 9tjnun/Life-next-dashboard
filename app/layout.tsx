import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Life Next Planner v10.5.5",
  description: "Compact calendar tag planner"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="min-w-0 flex-1 p-5 md:p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
