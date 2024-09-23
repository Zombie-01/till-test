"use client";

import { ListProvider } from "@/components";

/**
 * SettingsRole layout
 */
export default function SettingsRoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
