"use client";

import { ListProvider } from "@/components";

/**
 * Dialed all history layout
 */
export default function DialedAllHistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
