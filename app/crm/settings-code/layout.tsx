"use client";

import { ListProvider } from "@/components";

/**
 * SettingsCode layout
 */
export default function SettingsCodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
