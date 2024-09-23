"use client";
import { Flex, Space } from "antd";
import { Logo } from "@/assets/svg/Logo";
import { useTheme } from "@/providers";
import { LanguageButton, ThemeButton } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <Flex
      justify="center"
      align="center"
      className="bg-center"
      style={{
        backgroundImage: theme.isDark ? "url('/images/login_bg.jpeg')" : "url('/images/login_bg_dark.jpg')",
        height: "100vh",
      }}
    >
      <div
        className="w-full max-w-[870px]"
        style={{
          ...styles.formWrapper,
          ...(theme.isDark ? styles.bgDark : styles.bgLight),
        }}
      >
        <Flex
          justify="center"
          className={"py-10 px-20 rounded shadow-sm backdrop-blur " + (theme.isDark ? "bg-white/10" : "bg-white/10")}
        >
          <div className="absolute top-6 start-6">
            <Space>
              <Logo />
            </Space>
          </div>
          <div className="absolute top-6 end-6">
            <Space>
              <ThemeButton />
              <LanguageButton />
            </Space>
          </div>
          {children}
        </Flex>
      </div>
    </Flex>
  );
}

const styles = {
  formWrapper: {
    padding: 10,
  },
  bgLight: {
    background: "linear-gradient(45deg, #fff9f9 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, #fff9f9 100%)",
  },
  bgDark: {
    background: "linear-gradient(45deg, #000 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, #000 100%)",
  },
};
