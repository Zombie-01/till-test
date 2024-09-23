import cn from "classnames";
import Image from "next/image";
import { Layout, Menu } from "antd";
import { Dispatch, SetStateAction } from "react";
import { getMenus } from "./Menus";
import { CloseSidebarIcon } from "@/assets";
import logoSrc from "@/assets/iicapital-logo.webp";
import { useTheme } from "@/providers";

export const MobileSidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}) => {
  const { isDark } = useTheme();
  return (
    <Layout.Sider
      width={280}
      className={cn(
        "block md:hidden fixed transition-all z-20",
        collapsed ? "left-0" : "-left-[280px]"
      )}
    >
      <div
        className={cn(
          "h-[60px] bg-[#001529] font-bold flex items-center border-b border-r justify-between px-3",
          isDark
            ? "bg-[#141414] border-[#303030]"
            : "bg-[#001529] border-[#121e32]"
        )}
      >
        <div className="flex gap-2 items-center">
          <Image
            src={logoSrc}
            alt="iicapital-logo"
            className="object-contain h-[32px] w-auto"
          />
          <h1 className={"text-white font-normal text-sm whitespace-nowrap"}>
            Их ирээдүй капитал
          </h1>
        </div>
        <button
          className="collapse_sidebar_btn"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <CloseSidebarIcon />
        </button>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["/", "/customer"]}
        className={cn(
          "h-[calc(100vh-60px)] overflow-y-auto sticky top-[60px]",
          isDark ? "bg-[#141414]" : ""
        )}
        items={getMenus()}
      />
    </Layout.Sider>
  );
};
export default MobileSidebar;
