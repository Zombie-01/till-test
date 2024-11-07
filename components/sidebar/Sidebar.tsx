"use client";
import cn from "classnames";
import Image from "next/image";
import { Layout, Menu } from "antd";
import { useTranslations } from "next-intl";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getMenus } from "./Menus";
import { useTheme } from "@/providers";
import { CloseSidebarIcon } from "@/assets";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}) => {
  const { isDark } = useTheme();
  const { width } = useWindowSize();
  const t = useTranslations("sidebar");

  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = useCallback(
    (e: { key: string }) => {
      router.push(e.key);
    },
    [router]
  );
  useEffect(() => {
    const collapsed = width !== undefined && width >= 768 && width <= 1024;
    if (collapsed) setCollapsed(true);
    else setCollapsed(false);
  }, [setCollapsed, width]);

  return (
    <Layout.Sider
      collapsed={collapsed}
      width={collapsed ? 80 : 280}
      className=" md:block fixed left-0 top-0 z-10">
      <div
        className={cn(
          `h-[60px] font-bold flex items-center border-b border-r`,
          collapsed ? "pl-0 pr-0 justify-center" : "pl-5 pr-2 justify-between",
          isDark
            ? "bg-[#141414] border-[#303030]"
            : "bg-[#001529] border-[#121e32]"
        )}>
        <div className="flex gap-2 items-center">
          <Image
            src={"/android-chrome-512x512.png"}
            alt="iicapital-logo"
            fill
            className="object-contain h-[32px] w-[32px] "
          />
          <h3
            className={cn(
              "!m-0 text-white text-sm",
              collapsed ? "!hidden" : "!block"
            )}>
            {t("title")}
          </h3>
        </div>
        {!collapsed && (
          <button
            className="collapse_sidebar_btn"
            onClick={() => setCollapsed((prev) => !prev)}>
            <CloseSidebarIcon />
          </button>
        )}
      </div>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        onSelect={handleSelect}
        theme="dark"
        className={cn(
          "h-[calc(100vh-60px)] overflow-y-auto sticky top-[60px]",
          isDark ? "bg-[#141414]" : ""
        )}
        items={getMenus()}
      />
    </Layout.Sider>
  );
};
export default Sidebar;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth as never,
        height: window.innerHeight as never,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
