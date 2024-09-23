"use client";
import cn from "classnames";
import { ReactNode, useState } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { useTheme } from "@/providers";
import { MobileSidebar, Sidebar } from "../sidebar";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isDark } = useTheme();

  return (
    <main
      className={cn(
        "flex h-screen relative overflow-x-hidden",
        isDark ? "bg-[#1D1D1D]" : "bg-[#fafafa]"
      )}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <MobileSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className={cn(
          "w-full transition-all",
          collapsed ? "pl-0 md:pl-[80px]" : "pl-0 md:pl-[280px]"
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <section className="p-3 md:p-6 w-full min-h-[calc(100%-105px)]">
          {children}
        </section>
        <Footer />
      </div>
    </main>
  );
};
export default Layout;
