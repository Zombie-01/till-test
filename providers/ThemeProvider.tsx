"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ConfigProvider, ThemeConfig } from "antd";
import { DARK_COLORS, LIGHT_COLORS } from "@/constants";

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  toggleTheme: () => undefined,
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeConfig | undefined>(LIGHT_COLORS);
  const [isDark, setIsDark] = useState(false);

  const changeLightTheme = () => {
    setIsDark(false);
    setTheme(LIGHT_COLORS);
    localStorage.setItem("isDark", "false");
  };

  const changeDarkTheme = () => {
    setIsDark(true);
    setTheme(DARK_COLORS);
    localStorage.setItem("isDark", "true");
  };

  const toggleTheme = useCallback(() => {
    if (isDark) changeLightTheme();
    else changeDarkTheme();
  }, [isDark]);

  useEffect(() => {
    if (localStorage.getItem("isDark") === "true") changeDarkTheme();
    else changeLightTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <AntdRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </AntdRegistry>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a BalanceProvider");
  }
  return context;
};
