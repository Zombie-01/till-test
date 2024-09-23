"use client";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Avatar, Divider, Space, theme, Typography } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useTheme } from "@/providers";

export const ProfileButton = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const router = useRouter();
  const { isDark } = useTheme();
  const { colorBgContainer } = theme.useToken().token;

  const handleSelect = (href: string) => {
    router.push(href);
    setIsPopupVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div className="relative">
      <div ref={buttonRef}>
        <Avatar
          size="large"
          className="cursor-pointer active:opacity-60 transition-all z-10"
          src="https://react.vristo.sbthemes.com/assets/images/user-profile.jpeg"
          onClick={() => setIsPopupVisible((prev) => !prev)}
        />
      </div>

      {isPopupVisible && (
        <div ref={popupRef} className="pt-[50px] top-0 right-0 absolute">
          <div
            style={{ backgroundColor: colorBgContainer }}
            className={cn(
              "w-[230px] rounded-md drop-shadow-sm p-1 top-[50px] right-0 absolute z-10",
              isDark ? "border border-[#303030] bg-[#001529]" : "drop-shadow-sm"
            )}
          >
            {/* Profile image, name, email */}
            <Space className="px-4 py-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="profile picture"
                loading="lazy"
                className="rounded-md w-10 h-10 object-cover bg-gray-100"
                src="https://react.vristo.sbthemes.com/assets/images/user-profile.jpeg"
              />
              <div>
                <Typography.Text className="font-semibold block">Burendelger</Typography.Text>
                <Typography.Text className="text-sm text-black/60 w-[150px]" ellipsis>
                  burendelger@iicapital.mn
                </Typography.Text>
              </div>
            </Space>

            {/* MENU */}
            <ul className="grid">
              <MenuItem onClick={() => handleSelect("/crm/profile")} text="Хувийн мэдээлэл" icon={<UserOutlined />} />
              <Divider className="!my-1" />
              <MenuItem onClick={() => handleSelect("/login")} text="Гарах" icon={<LogoutOutlined />} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;

const MenuItem = ({ text, icon, onClick }: { text: string; icon: React.ReactNode; onClick: () => void }) => {
  const { isDark } = useTheme();
  return (
    <Typography.Text
      onClick={onClick}
      className={cn(
        "h-[40px] px-5 py-2 rounded-md text-sm flex items-center gap-2 cursor-pointer",
        isDark ? "hover:bg-[#1D1D1D]" : "hover:bg-gray-100"
      )}
    >
      {icon}
      {text}
    </Typography.Text>
  );
};
