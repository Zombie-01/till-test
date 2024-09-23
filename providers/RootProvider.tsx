"use client";
import { ReactNode } from "react";
import { IconContext } from "react-icons";
import ThemeProvider from "./ThemeProvider";

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider>
      <IconContext.Provider
        value={{ color: "", className: "global-class-name" }}
      >
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
};
