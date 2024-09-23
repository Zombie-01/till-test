import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "@/providers";
import cn from "classnames";

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="w-10 h-10 rounded-full">
      <Button
        className={cn("relative z-10 !border-none !shadow-none", isDark ? "!bg-[#00000066]" : "!bg-[#e0e6ed66]")}
        size="large"
        draggable
        shape="circle"
        onClick={toggleTheme}
        icon={isDark ? <SunOutlined /> : <MoonOutlined />}
      />
    </div>
  );
};
export default ThemeButton;
