import { Button } from "antd";
import classNames from "classnames";
import { MenuOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";
import ThemeButton from "./ThemeButton";
import ProfileButton from "./ProfileButton";
import LanguageButton from "./LanguageButton";
import { useTheme } from "@/providers";

export const Header = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}) => {
  const { isDark } = useTheme();

  return (
    <section
      className={classNames(
        "h-[60px] gap-5 flex items-center justify-between px-3 md:px-6 w-full border-b",
        isDark ? "border-[#303030] bg-[#141414]" : "border-[#f0f0f0] bg-white"
      )}
    >
      <div className="hidden md:block">
        <div className={classNames(collapsed ? "block" : "hidden")}>
          <Button
            size="large"
            shape="circle"
            className="!border-none"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed((prevState) => !prevState)}
          />
        </div>
      </div>
      <div className="block md:hidden">
        <Button
          size="large"
          shape="circle"
          className={classNames("!border-none !shadow-none", isDark ? "!bg-[#00000066]" : "!bg-[#e0e6ed66]")}
          icon={<MenuOutlined />}
          onClick={() => setCollapsed((prevState) => !prevState)}
        />
      </div>
      <div className="flex items-center gap-2">
        <ThemeButton />
        <LanguageButton />
        <ProfileButton />
      </div>
    </section>
  );
};
export default Header;
