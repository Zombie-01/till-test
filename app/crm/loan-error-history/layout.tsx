"use client";

import { ListProvider } from "@/components";

/**
 * Customer's error history layout
 */
export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ListProvider>{children}</ListProvider>;
}
