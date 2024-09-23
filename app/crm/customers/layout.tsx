"use client";

import { ListProvider } from "@/components";

/**
 * Customer layout
 */
export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
