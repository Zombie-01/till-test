"use client";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { useLocale } from "next-intl";
import { startTransition } from "react";
import { Button, theme, Typography } from "antd";
import { useTheme } from "@/providers";
import korFlagSrc from "@/assets/flags/korean.png";
import engFlagSrc from "@/assets/flags/english.png";
import mglFlagSrc from "@/assets/flags/mongolian.png";
import { setUserLocale } from "@/services";

export const LanguageButton = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { isDark } = useTheme();
  const { colorBgContainer } = theme.useToken().token;
  const locale = useLocale();

  const toggleLanguagePopup = () => setIsPopupVisible((prev) => !prev);

  const onChangeLocale = (locale: "mn" | "en" | "kr") => {
    setIsPopupVisible(false);
    startTransition(() => {
      setUserLocale(locale);
    });
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
    <div className="relative h-[40px] rounded-full">
      <div ref={buttonRef}>
        <Button
          shape="circle"
          size="large"
          className={cn("relative z-10 !border-none !shadow-none", isDark ? "!bg-[#00000066]" : "!bg-[#e0e6ed66]")}
          onClick={toggleLanguagePopup}
          icon={flags[locale.toString() as keyof typeof flags]}
        />
      </div>

      {/* Popup for Language Menu */}
      {isPopupVisible && (
        <div
          ref={popupRef}
          style={{ backgroundColor: colorBgContainer }}
          className={cn(
            "w-[230px] rounded-lg drop-shadow-sm p-1 z-10 top-[50px] right-0 absolute",
            isDark ? "border border-[#303030]" : "drop-shadow-sm"
          )}
        >
          <MenuItem text="Монгол хэл" locale="mn" onClick={() => onChangeLocale("mn")} />
          <MenuItem text="한국어" locale="kr" onClick={() => onChangeLocale("kr")} />
          <MenuItem text="English" locale="en" onClick={() => onChangeLocale("en")} />
        </div>
      )}
    </div>
  );
};

export default LanguageButton;

interface MenuItemProps {
  text: string;
  locale: "mn" | "kr" | "en";
  onClick: () => void;
}

const MenuItem = ({ text, locale, onClick }: MenuItemProps) => {
  const { isDark } = useTheme();
  return (
    <Typography.Text
      className={cn(
        "h-[40px] px-5 py-2 rounded-lg text-sm flex items-center gap-2 cursor-pointer",
        isDark ? "hover:bg-[#1D1D1D]" : "hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      {flags[locale]}
      {text}
    </Typography.Text>
  );
};

const flags = {
  mn: (
    <Image
      alt="mongolia-flag"
      src={mglFlagSrc}
      className="object-cover object-center rounded-full w-[20px] h-[20px] relative z-10"
    />
  ),
  kr: (
    <Image
      alt="mongolia-flag"
      src={korFlagSrc}
      className="object-cover object-center rounded-full w-[20px] h-[20px] relative z-10"
    />
  ),
  en: (
    <Image
      alt="mongolia-flag"
      src={engFlagSrc}
      className="object-cover object-center rounded-full w-[20px] h-[20px] relative z-10"
    />
  ),
};
