"use client";

import { ListProvider } from "@/components";

/**
 * Dialed history layout
 */
export default function DialedHistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
